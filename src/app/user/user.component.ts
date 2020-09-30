import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  recordsUsers: Array<User> = [];
  usuarioSeleccionado: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  addUser(){

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
