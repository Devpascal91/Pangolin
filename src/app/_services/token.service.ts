import { Injectable } from '@angular/core';
import { Router } from 'express';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }

 saveToken(token: string): void  {
  localStorage.setItem('token', token);
  // this.router.navigate(['auth'])
 }
 isLogged (): boolean{
  const Token = localStorage.getItem('token')
  console.log(Token)
  return !! Token
 }
}
