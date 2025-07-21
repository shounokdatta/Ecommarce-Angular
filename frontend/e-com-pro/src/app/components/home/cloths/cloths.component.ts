import { Component } from '@angular/core';

@Component({
  selector: 'app-cloths',
  templateUrl: './cloths.component.html',
  styleUrls: ['./cloths.component.css']
})
export class ClothsComponent {
  clothsItems = [
    { id: 1, name: 'Men\'s T-Shirt', price: 499, image: 'https://cdn.pixabay.com/photo/2016/03/27/22/22/t-shirt-1283866_1280.jpg' },
    { id: 2, name: 'Women\'s Dress', price: 999, image: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/dress-1866573_1280.jpg' },
    { id: 3, name: 'Jeans', price: 799, image: 'https://cdn.pixabay.com/photo/2016/03/27/22/22/jeans-1283867_1280.jpg' },
    { id: 4, name: 'Jacket', price: 1299, image: 'https://cdn.pixabay.com/photo/2016/03/27/22/22/jacket-1283868_1280.jpg' },
    { id: 5, name: 'Sweater', price: 699, image: 'https://cdn.pixabay.com/photo/2016/03/27/22/22/sweater-1283869_1280.jpg' },
    { id: 6, name: 'Skirt', price: 599, image: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/skirt-1866574_1280.jpg' },
    { id: 7, name: 'Shorts', price: 399, image: 'https://cdn.pixabay.com/photo/2016/03/27/22/22/shorts-1283870_1280.jpg' },
    { id: 8, name: 'Blouse', price: 549, image: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/blouse-1866575_1280.jpg' },
    { id: 9, name: 'Coat', price: 1499, image: 'https://cdn.pixabay.com/photo/2016/03/27/22/22/coat-1283871_1280.jpg' },
    { id: 10, name: 'Scarf', price: 299, image: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/scarf-1866576_1280.jpg' }
  ];
}

