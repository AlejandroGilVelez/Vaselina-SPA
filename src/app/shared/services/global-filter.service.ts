import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class GlobalFilterService {

  usuarioSeleccionado: User;
  
  constructor() { }
}
