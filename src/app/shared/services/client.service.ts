import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  gets(){
    return this.http.get<Client[]>(`${environment.baseUrl}Client/List`);
  }

  get(clienteSeleccionado: Client){
    return this.http.get<Client>(`${environment.baseUrl}Client/Get/${clienteSeleccionado.id}`);
  }

  create(clienteSeleccionado: Client){
    return this.http.post(`${environment.baseUrl}Client/Create`, clienteSeleccionado);
  }

  edit(clienteSeleccionado: Client){
    return this.http.put(`${environment.baseUrl}Client/Update`, clienteSeleccionado);
  }

  delete(clienteSeleccionado: Client){
    return this.http.delete(`${environment.baseUrl}Client/Delete/${clienteSeleccionado.id}`);

  }

}
