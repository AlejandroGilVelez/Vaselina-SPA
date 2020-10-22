import { Injectable } from '@angular/core';
import { Client } from 'src/app/models/client';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class GlobalFilterService {

  usuarioSeleccionado: User;
  clientSeleccionado: Client;
  
  constructor() { }
}
