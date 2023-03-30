import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8080/api/auth/login';

  constructor(private http : HttpClient) { }
  
  login(credentials: any) {
    return this.http.post(this.url, credentials);
  }
}
