import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  nombreUsuario: string;

  constructor(private authService: AuthService,
              private route: Router) { }

  ngOnInit(): void {
    
  }

  logout(){
    this.authService.deleteKey();
    this.route.navigateByUrl("login");
  }

  estaLogueado(){
    return this.authService.estaLogueado();
  }

}
