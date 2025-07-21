import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDarkTheme = false;
  isLoginPage = false;
  isAuthenticated = false;
  isDropdownOpen = false;
  cartItemCount = 0; 
  isCartOpen=false;

  constructor(
    private readonly cartService: CartService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    // Detect if current page is login
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isLoginPage = (event as NavigationEnd).urlAfterRedirects === '/login';
    });
  }

  ngOnInit() {
    // Subscribe to auth status
    this.authService.authStatus.subscribe(status => {
      this.isAuthenticated = status;
    });

    // Subscribe to cart count changes
    this.cartService.cartCount$.subscribe(count => {
      this.cartItemCount = count;
    });
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
  }

  navigate() {
    this.router.navigate(['/home']);
  }

  toggleCart(){
    this.isCartOpen = !this.isCartOpen;
  }
}
