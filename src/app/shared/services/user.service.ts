import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RolDto } from 'src/app/dto/rol';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usuarioSeleccionado: User;

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(`${environment.baseUrl}User/List`);
  }

  getUser(usuarioSeleccionado: User){
    return this.http.get<User>(`${environment.baseUrl}User/Get/${usuarioSeleccionado.id}`);
  }

  createUser(usuarioSeleccionado: User){
    return this.http.post(`${environment.baseUrl}User/Create`, usuarioSeleccionado);
  }

  getRol(){
    return this.http.get<RolDto[]>(`${environment.baseUrl}Roles/List`);
  }

  changeStatus(usuarioSeleccionado: User){
    return this.http.post(`${environment.baseUrl}User/CambioEstado`, usuarioSeleccionado);
  }

  delete(usuarioSeleccionado: User){
    return this.http.delete(`${environment.baseUrl}User/Delete/${usuarioSeleccionado.id}`);
  }

  edit(usuarioSeleccionado: User){
    return this.http.put(`${environment.baseUrl}User/Update`, usuarioSeleccionado);
  }

}
