import { Injectable } from '@angular/core';
import { User } from '../admin-route/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;
  redirecturl: string;

  constructor() { }

  get isLoggedIn(): boolean{
      return !!this.currentUser;
  }

  login(userName: string, password: string): void{
    if(!userName || !password ){
    return;
  }
  if(userName === 'admin'){
    this.currentUser = {
      id: 1,
      userName: userName,
      isAdmin: true
      
    }
  }
  this.currentUser = {
    id: 2,
    userName: 'Barns',
    isAdmin: true,
  }
}

logout(): void {
  this.currentUser = null;
}

}
