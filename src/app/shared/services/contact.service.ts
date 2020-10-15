import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {  

  constructor(private http: HttpClient) { }

  create(contactSeleccionado: Contact){
    return this.http.post(`${environment.baseUrl}Contact/Create`, contactSeleccionado);
  }
}
