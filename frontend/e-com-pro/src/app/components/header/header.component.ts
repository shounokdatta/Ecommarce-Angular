import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isDarkTheme = false;
  isLoginPage = false;
  isAuthenticated = false;
  isDropdownOpen = false;
  isCartOpen = false;
  cartItemCount = 0;
  cartItems: CartItem[] = [];
  total = 0;

  private destroy$ = new Subject<void>();

  constructor(
    private readonly cartService: CartService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    // Detect if current page is login
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.destroy$)
    ).subscribe((event: NavigationEnd) => {
      this.isLoginPage = (event as NavigationEnd).urlAfterRedirects === '/login';
    });
  }

  ngOnInit() {
    // Subscribe to auth status
    this.authService.authStatus.pipe(takeUntil(this.destroy$))
      .subscribe(status => this.isAuthenticated = status);

    // Subscribe to cart count
    this.cartService.cartCount$.pipe(takeUntil(this.destroy$))
      .subscribe(count => this.cartItemCount = count);

    // Load initial cart data
    this.loadCart();
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  profileBtnClick() {
    this.router.navigate(['/profile']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  navigate() {
    this.router.navigate(['/home']);
  }

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }

  loadCart() {
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  increaseQuantity(item: CartItem) {
    this.cartService.addItem(item);
    this.loadCart();
  }

  decreaseQuantity(item: CartItem) {
    this.cartService.decreaseItem(item.id);
    this.loadCart();
  }

  removeItem(id: number) {
    this.cartService.removeItem(id);
    this.loadCart();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
