import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../dto/loginDto';
import { AuthService } from '../shared/services/auth.service';
import * as jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
import { constants } from 'buffer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  objLogin = new LoginDto();
  nombreUsuario: string;
  tokenDecode: any;

  constructor(private authService: AuthService,
              private route: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.loginToken(this.objLogin).subscribe(
      (response) =>{
        localStorage.setItem("autey", response.token);
        this.tokenDecode = jwt_decode(response.token);
        this.nombreUsuario = this.tokenDecode.unique_name;
        this.route.navigateByUrl("/home");
      }, 
      (error) => {
        console.log("Error en el login");
      });      
  }

}
