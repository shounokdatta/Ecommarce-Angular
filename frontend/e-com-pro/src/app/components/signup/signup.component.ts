import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name='';
  email = '';
  password = '';
  phone = '';
  showPassword = false;

  constructor(private readonly authServices: AuthService,
              private readonly router: Router,
            ){}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSignup() {
    console.log("signup called");
  this.authServices.signup(this.name,this.email, this.password, this.phone)
    .subscribe({
      next: (res: any) => {
      alert("Signup successful");
        this.router.navigate(['/home']);
      },
      error: (err) => {
        if (err.status === 400) {
            alert("User already exists ");
        } else {
          alert("Server error ");
        }
      }
    });
}
}
