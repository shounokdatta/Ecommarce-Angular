import { Component,OnInit  } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit{
   products: any[] = [];
  constructor(private readonly cartService: CartService,
  private readonly productService: ProductService // ✅ Inject ProductService

  ) {}
    ngOnInit(): void { // ✅ New lifecycle method to fetch data on load
    this.productService.getProducts().subscribe({
      next: (res) => this.products = res, // ✅ Load products from backend
      error: (err) => console.error('Error loading products:', err) // ✅ Handle errors
    });
  }

 
  addToCart(product: any) {
    this.cartService.addItem(product);
  }
}
