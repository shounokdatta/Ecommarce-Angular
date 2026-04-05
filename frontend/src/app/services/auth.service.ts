import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

console.log("AuthService is running");

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor (
    private readonly router: Router,
    private http: HttpClient
  ) { }
  // Auth state variable
  private readonly authState = new BehaviorSubject<boolean>(false);
  authStatus = this.authState.asObservable(); 

  signup(name:string,email:string,password:string,phone:string){
    console.log(email,phone,password)
  const userData = {
    name: name,   
    email: email,
    phone: phone,
    password: password
  };
  return this.http.post('https://ecommarce-angular-1.onrender.com/api/signup', userData);
}
  

  login(email: string, password: string) {
  const res= this.http.post('https://ecommarce-angular-1.onrender.com/api/login', {
    email,
    password
  });
  console.log(res);
  return res;
}

  logout(): void {
    localStorage.removeItem('token');
    this.authState.next(false);
    this.router.navigate(['/login']);
    console.log("User logged out");
  }

  isLoggedIn(): boolean {
    return this.hasToken() &&  this.authState.getValue();   
  }
  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
