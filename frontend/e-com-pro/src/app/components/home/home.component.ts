import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CartService } from '../../services/cart.service';
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
export class HomeComponent {
  constructor(private readonly cartService: CartService) {}

  products = [
    { name: 'Wireless Headphones', price: 2999, description: 'High-quality audio with noise cancellation.', image: 'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?cs=srgb&dl=pexels-cottonbro-3945667.jpg&fm=jpg' },
    { name: 'Smart Watch', price: 4999, description: 'Track fitness & notifications on the go.', image: 'assets/images/smartwatch.jpg' },
    { name: 'Gaming Mouse', price: 1499, description: 'Precision tracking with RGB lights.', image: 'assets/images/mouse.jpg' },
    { name: 'Gaming keyboard', price: 2499, description: 'Precision tracking with RGB lights.', image: 'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?cs=srgb&dl=pexels-cottonbro-3945667.jpg&fm=jpg' },
  ];
  addToCart(product: any) {
    this.cartService.addItem(product);
  }
}
