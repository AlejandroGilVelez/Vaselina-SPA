import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RolDto } from 'src/app/dto/rol';
import { User } from 'src/app/models/user';
import { GlobalFilterService } from 'src/app/shared/services/global-filter.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  usuarioSeleccionado: User;
  esNuevoUsuario: boolean;
  recordsRol: Array<RolDto> = [];
  


  constructor(private globalFilterService: GlobalFilterService,
              private route: Router,
              private userService: UserService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.esNuevoUsuario = true;
    this.usuarioSeleccionado = this.globalFilterService.usuarioSeleccionado;
    this.getRol();

    if (this.usuarioSeleccionado != null) {
      // Editar      
      this.esUsuarioAntiguo(this.usuarioSeleccionado);            
      this.esNuevoUsuario = false;
    }else{
      this.usuarioSeleccionado = new User();
      this.usuarioSeleccionado.rol = "0";      
    }
  }

  getRol(){
    this.userService.getRol().subscribe(
      (response) => {
        this.recordsRol = [...response];
      },
      (error) => {
        this.messageService.add({
          severity: "error",
          summary: "Error al cargar",
          detail: "Ocurrió un error al momento de cargar los roles."
        });
      }
    )
  }

  guardar(){

    if (this.esNuevoUsuario) {
      this.userService.createUser(this.usuarioSeleccionado).subscribe(
        (response) => {
          this.messageService.add({
            severity: "success",
            summary: "Guadado exitoso",
            detail: "El usuario se creo correctamente"
          });
          this.route.navigateByUrl("user");
        },
        (error) => {
          this.messageService.add({
            severity: "error",
            summary: "Error al guardar",
            detail: "Ocurrió un error al momento de guardar."
          });
        });      
    } else {
      // Llamar al servicio de editar
    }    
  }

  esUsuarioAntiguo(usuarioSeleccionado: User){
    this.userService.getUser(usuarioSeleccionado).subscribe(
      (response) => {
        this.usuarioSeleccionado = response;
      },
      (error) => {
        this.messageService.add({
          severity: "error",
          summary: "Error al consultar",
          detail: "Error al consultar el usuario"
        });
      }
    );
  }

  cancelar(){
    this.route.navigateByUrl("/user");
  }

}
