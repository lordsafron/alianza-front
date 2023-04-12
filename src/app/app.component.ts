import { Component, ViewChild } from '@angular/core';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientComponent } from './components/client/client.component';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alianza';
  @ViewChild(ClientsComponent) clientsComponent: ClientsComponent
  @ViewChild(ClientComponent) clientComponent: ClientComponent
  
  recibir(event:string) {
    if(event === '') {
      this.clientsComponent.limpiar()  
    } else {
      this.clientsComponent.cambiar(event)
    }
  }

  abrirModal() {
    this.clientComponent.abrirModal();
  }

  exportCSV() {
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: false, 
      showTitle: false,
      useBom: false,
      noDownload: false,
      headers: ["ID", "sharedId", "businessId", "email", "phone", "createAt"]
    };
    new ngxCsv(this.clientsComponent.clients, 'Clients', options);
  }
}
