import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/models/response.model';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private clientService: ClientService) {}

  clients?: Client[] = [];
  clientsData?: Client[] = [];

  ngOnInit(): void {
    this.cargarClients();
    this.clientService.nuevoClient.subscribe( resp => this.cargarClients() );
  }

  cargarClients() {
    this.clientService.getAllClients()
    .subscribe( res => {
      this.clients = res;
      this.clientsData = this.clients
    }, (err) => {
      // Si sucede un error
      Swal.fire('Error', err.error.message, 'error' );
    });
  }

  cambiar(termino: string) {
    this.clients = this.clientsData
    if(termino !== ''){
      this.clients = this.clients?.filter(x => x.sharedId ==termino)
    }
  }

  limpiar() {
    this.clients = this.clientsData
  }

}
