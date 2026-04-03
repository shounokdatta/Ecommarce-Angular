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
  return this.http.post('http://localhost:5000/api/signup', userData);
}
  

  login(email: string, password: string) {
    console.log(email,password)
  return this.http.post('http://localhost:5000/api/login', {
    email,
    password
  });
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
