import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Contact } from '../models/contact';
import { ContactService } from '../shared/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactSeleccionado: Contact = new Contact();

  constructor(private contactService: ContactService,
              private messageService: MessageService,
              private route: Router) { }

  ngOnInit(): void {
  }

  guardar(){    
    if (!this.validaciones()) {
      return;
    }
    
    this.contactService.create(this.contactSeleccionado).subscribe(
      (response) => {
        this.messageService.add({
          severity: "success",
          summary: "Guadado exitoso",
          detail: "La solicitud se creo correctamente"
        });
        this.route.navigateByUrl("/home");
      },
      (error) => {
        this.messageService.add({
          severity: "error",
          summary: "Error al guardar",
          detail: "Ocurrió un error al momento de guardar la solicitud."
        });
      });
  }

  cancelar(){
    this.route.navigateByUrl("/contact");
  }

  validaciones():boolean{
    if (this.contactSeleccionado.nombres == null || this.contactSeleccionado.nombres.length == 0) {
      this.messageService.add({
        severity: "warn",
        summary: "Nombres Inválido",
        detail: "Digite un nombre",
      });
      return false;  
    }
    if (this.contactSeleccionado.empresa == null || this.contactSeleccionado.empresa.length == 0) {
      this.messageService.add({
        severity: "warn",
        summary: "Empresa Inválido",
        detail: "Digite una empresa",
      });
      return false;  
    }
    if (this.contactSeleccionado.correo == null || this.contactSeleccionado.correo.length == 0) {
      this.messageService.add({
        severity: "warn",
        summary: "Correo Inválido",
        detail: "Digite una correo",
      });
      return false;      
    }
    if (this.contactSeleccionado.telefono == null || this.contactSeleccionado.telefono.length == 0) {
      this.messageService.add({
        severity: "warn",
        summary: "Teléfono Inválido",
        detail: "Digite una teléfono",
      });
      return false;      
    }
    if (this.contactSeleccionado.mensaje == null || this.contactSeleccionado.mensaje.length == 0) {
      this.messageService.add({
        severity: "warn",
        summary: "Mensaje Inválido",
        detail: "Digite un mensaje",
      });
      return false;      
    }    

    return true;
  }

}
