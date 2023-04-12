import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/response.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() terminoEvent = new EventEmitter<string>();
  @ViewChild('buscarTexto') buscarTexto: ElementRef;
  clients?:Client[] = []
  termino:string;

  constructor() {

  }

  buscarClient( termino:string ){
    this.terminoEvent.emit(termino);
  }

  limpiar() {
    this.terminoEvent.emit('');
    this.buscarTexto.nativeElement.value = '';
  }

}
