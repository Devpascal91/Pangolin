
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { TokenService } from 'src/app/_services/token.service';

interface ICredentials{
  email:string;
  password:string;
}

interface IToken  {
  access_token:string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  form: ICredentials =  {
    email: '',
    password:''
  }
  constructor
  (private authService: AuthService,private tokenService: TokenService) { }

  ngOnInit():void{

  }
onSubmit(){
  console.log(this.form)
  this.authService.login(this.form).subscribe(
    (data:IToken) => console.log(data.access_token),
    // this.tokenService.saveToken(data.access_token)
    (err: any)  => console.log(err)
  )
  }
}
