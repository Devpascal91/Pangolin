import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login: any;

  constructor() { }
  // login(email: string, password:number) { }
  authUser(user: any) {
    let UserArray: any[] = [];
    if (localStorage.getItem('Users')) {
      localStorage.setItem('Users', JSON.stringify(UserArray));
      return true;
    }
    return UserArray.find((p: { userEmail: string; userPassword: number; }) => p.userEmail === user.userEmail && p.userPassword === user.userPassword);
  }
}
