import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { GlobalFilterService } from 'src/app/shared/services/global-filter.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  usuarioSeleccionado: User;
  esNuevoUsuario: boolean;

  constructor(private globalFilterService: GlobalFilterService) { }

  ngOnInit(): void {
    this.esNuevoUsuario = true;
    this.usuarioSeleccionado = this.globalFilterService.usuarioSeleccionado;

    if (this.usuarioSeleccionado != null) {
      // Editar
      // Falta traer el usuario a editar
      this.esNuevoUsuario = false;
    }else{
      this.usuarioSeleccionado = new User();
    }
  }

  guardar(){

  }

  cancelar(){

  }

}
