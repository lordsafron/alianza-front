import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Client } from 'src/app/models/response.model';

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
  comp: any;

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
