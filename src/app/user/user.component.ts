import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { GlobalFilterService } from '../shared/services/global-filter.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  recordsUsers: Array<User> = [];
  usuarioSeleccionado: User;

  constructor(private userService: UserService,
              private globalFilterService: GlobalFilterService,
              private route: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  addUser(){
    this.globalFilterService.usuarioSeleccionado = null;
    this.route.navigateByUrl("/user-edit");
  }

  delete(row: User){

  }

  update(row: User){

  }

  changeStatus(e, row: User){

  }

  getUsers(){
    this.userService.getUsers().subscribe(
      (response) => {
        this.recordsUsers = [...response];
      },
      (error) => {
        console.log("Error al cargar los usuarios");
      });
  }
}
