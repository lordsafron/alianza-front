import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { Client } from '../../models/response.model';
import { ClientService } from 'src/app/services/client.service';
import { ClientsComponent } from '../clients/clients.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {

  form: FormGroup;
  @ViewChild(ClientsComponent) clientsComponent: ClientsComponent

  constructor(
    private fb: FormBuilder,
    public modalService: ModalService,
    private clientService: ClientService){
    this.crearFormulario()
  }

  get nombreNoValido() {
    return this.form.get('businessId')?.invalid && this.form.get('businessId')?.touched
  }

  get phoneNoValido() {
    return this.form.get('phone')?.invalid && this.form.get('phone')?.touched
  }

  get correoNoValido() {
    return this.form.get('email')?.invalid && this.form.get('email')?.touched
  }

  crearFormulario() {
    this.form = this.fb.group({
      businessId  : ['', [ Validators.required, Validators.pattern('^[a-zA-Z]+(\\s[a-zA-Z]+)*$') ]  ],
      email  : ['', [ Validators.required, Validators.pattern('^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$')] ],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{0,10}')] ]  
    });
  }

  guardar() {
    let client: Client = {
      businessId: this.form.get('businessId')?.value,
      phone: this.form.get('phone')?.value,
      email: this.form.get('email')?.value
    }

    this.clientService.saveClient(client)
    .subscribe( resp => {
      this.clientService.nuevoClient.emit(resp);
      this.form.reset();
      Swal.fire(
        'SUCCESS',
        'new client created!',
        'success'
      )
    }, (err) => {
      // Si sucede un error
      console.log(err);
      Swal.fire('Error', err.error.message, 'error' );
    });
  }

  abrirModal() {
    this.modalService.abrirModal();
  }

  cerrarModal() {
    this.modalService.cerrarModal();
  }

}
