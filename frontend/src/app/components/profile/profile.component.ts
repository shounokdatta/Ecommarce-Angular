import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent {
  constructor (
    private http: HttpClient
  ) { }
  profile = {
    photo: '',
  }
  user = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1-555-1234',
    address: '123 Main St, Cityville',
    bio: 'Hello! I love coding and coffee.'
  };

  onSave(): void {
    alert('Profile saved successfully!');
  }

  onLogout(): void {
    alert('Logging out...');
  }
}