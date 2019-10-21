import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  constructor() { }
  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
  login(){
    // localStorage.setItem('loggedIn', "true");
    this.loggedIn.next(true);
  }
  logout(){
    // localStorage.removeItem('loggedIn');
    this.loggedIn.next(false);
  }
  authState(){
    this.loggedIn.next(false);

  }

}
