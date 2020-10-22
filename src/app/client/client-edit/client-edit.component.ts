import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/shared/services/client.service';
import { GlobalFilterService } from 'src/app/shared/services/global-filter.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  esClienteNuevo: boolean;

  clientSeleccionado: Client;

  constructor(private route: Router,
              private globalFilterService: GlobalFilterService,
              private messageService: MessageService,
              private clientService: ClientService) { }

  ngOnInit(): void {
    this.esClienteNuevo = true;
    this.clientSeleccionado = this.globalFilterService.clientSeleccionado;

    if (this.clientSeleccionado != null) {
      //Editando
    }else{
      this.clientSeleccionado = new Client();
    }
  }

  cancelar(){
    this.route.navigateByUrl("/client");
  }

  guardar(){

    if (this.esClienteNuevo) {
      this.clientService.create(this.clientSeleccionado).subscribe(
        (response) => {
          this.messageService.add({
            severity: "success",
            summary: "Guadado exitoso",
            detail: "El cliente se creo correctamente"
          });
          this.route.navigateByUrl("/client");
        },
        (error) => {
          this.messageService.add({
            severity: "error",
            summary: "Error al guardar",
            detail: "Ocurrió un error al momento de guardar."
          });
        });      
    }

  }

}
