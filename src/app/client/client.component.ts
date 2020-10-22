import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Client } from '../models/client';
import { ClientService } from '../shared/services/client.service';
import { GlobalFilterService } from '../shared/services/global-filter.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  recordsClients: Array<Client> = [];
  clientSeleccionado: Client;

  constructor(private http: HttpClient,
              private route: Router,
              private globalFilterService: GlobalFilterService,
              private clientService: ClientService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.gets();
  }

  addClient(){
    this.globalFilterService.clientSeleccionado = null;
    this.route.navigateByUrl("/client-edit");
  }

  gets(){
    this.clientService.gets().subscribe(
      (response) => {
        this.recordsClients = [...response];
      },
      (error) => {
        this.messageService.add({
          severity: "error",
          summary: "Error al cargar",
          detail: "Ocurrió un error al momento de cargar lista de clientes."
        });
      });
  }

  edit(row: Client){

  }

  delete(row: Client){

  }

  onConfirm(){

  }

  onReject(){

  }
}
