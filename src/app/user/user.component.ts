import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
              private route: Router,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  addUser(){
    this.globalFilterService.usuarioSeleccionado = null;
    this.route.navigateByUrl("/user-edit");
  }

  delete(row: User){
    this.usuarioSeleccionado = row;
    this.messageService.clear();
    this.messageService.add({
      key: "c",
      sticky: true,
      severity: "warn",
      summary: "Eliminar el Usuario?",
      detail: "Esta acción no se podra deshacer. ¿ Esta seguro que desea eliminar el usuario?" 
    });
  }

  onConfirm(){
    this.userService.delete(this.usuarioSeleccionado).subscribe(
      (response) => {
        this.onReject();
        this.getUsers()
      },
      (error) => {
        this.onReject();
        this.messageService.add({
          severity: "error",
          summary: "Error al guardar",
          detail: "Ocurrió un error al momento de guardar"
        });
      });
  }

  onReject(){
    this.messageService.clear("c");
  }

  edit(row: User){
    this.globalFilterService.usuarioSeleccionado = row;
    this.route.navigateByUrl("/user-edit");
  }

  changeStatus(e, row: User){
    let isChecked = e.checked;
    this.usuarioSeleccionado = row;
    this.userService.changeStatus(this.usuarioSeleccionado).subscribe(
      (response) => {
        this.messageService.add({
          severity: "success",
          summary: "Guadado exitoso",
          detail: `El usuario se ${isChecked?"activo":"inactivo"} correctamente`
        });
        this.getUsers();
      },
      (error) => {
        this.messageService.add({
          severity: "error",
          summary: "Error al guardar",
          detail: `Ocurrió un error al momento de ${isChecked?"activar":"inactivar"} el usuario`
        });
      }
    )
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      (response) => {
        this.recordsUsers = [...response];
      },
      (error) => {        
        this.messageService.add({
          severity: "error",
          summary: "Error al cargar",
          detail: "Ocurrió un error al momento de cargar lista de usuarios."
        });
      });
  }
}
