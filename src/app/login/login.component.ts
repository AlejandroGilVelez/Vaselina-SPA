import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../dto/loginDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  objLogin = new LoginDto();

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    // https://www.youtube.com/watch?v=5RSgMnX5xrg
  }

}
