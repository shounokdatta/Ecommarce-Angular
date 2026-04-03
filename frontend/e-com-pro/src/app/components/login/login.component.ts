import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password= '';
  loginFailed = false;
  showPassword: boolean = false;

  constructor(private readonly authServices: AuthService,
              private  readonly router: Router) {}

onLogin() {
  this.authServices.login(this.email, this.password)
    .subscribe({
      next: (res: any) => {
        console.log(res);
        const isValid = res; 
        if (isValid) {
          alert("Login successful");
          this.router.navigate(["/home"])
        } else {
          alert("Invalid credentials");
        }
      },
      error: () => {
        alert("Invalid email or password");
      }
    });
}


onsignup(){
  this.router.navigate(['/signup']);
}

}

