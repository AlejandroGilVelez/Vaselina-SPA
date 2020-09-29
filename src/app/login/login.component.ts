import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../dto/loginDto';
import { AuthService } from '../shared/services/auth.service';
import * as jwt_decode from "jwt-decode";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  objLogin = new LoginDto();

  constructor(private authService: AuthService,
              private route: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.loginToken(this.objLogin).subscribe(
      (response) =>{
        localStorage.setItem("autey", response.token);
        const tokenDecode = jwt_decode(response.token);
        this.route.navigateByUrl("home");        
      }
    )
  }

}
