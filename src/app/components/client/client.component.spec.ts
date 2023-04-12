import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientComponent } from './client.component';
import { ClientService } from 'src/app/services/client.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { empty, of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModalService } from 'src/app/services/modal.service';

describe('ClientComponent', () => {
  let component: ClientComponent;
  let fixture: ComponentFixture<ClientComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ ClientComponent ],
      providers: [ ClientService ],
      imports: [ 
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule 
      ]
    }).compileComponents;

    fixture = TestBed.createComponent(ClientComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('ClientComponent 2', () => {
  let component: ClientComponent;
  const http = jasmine.createSpyObj('HttpClient', { post: of({}), get: of({}) })
  const servicio = new ClientService(http);
  const modal = new ModalService();

  beforeEach(() => {
      component = new ClientComponent(new FormBuilder, new ModalService, servicio);
    });

  it( 'Debe de guardar un cliente', () => {

    const spy = spyOn( servicio, 'saveClient' )
            .and.callFake( client => empty() );

    component.guardar();

    expect( spy ).toHaveBeenCalled();
  });

  it( 'Debe comprobar campo businessId', () => {
    const control = component.form.get('businessId');
    control?.setValue('');
    const resp = component.nombreNoValido
    expect( control?.valid ).toBeFalsy();
    expect( resp ).toBeFalsy();
  });

  it( 'Debe comprobar campo phone', () => {
    const control = component.form.get('phone');
    control?.setValue('');
    const resp = component.phoneNoValido
    expect( control?.valid ).toBeFalsy();
    expect( resp ).toBeFalsy();
  });

  it( 'Debe comprobar campo email', () => {
    const control = component.form.get('email');
    control?.setValue('');
    const resp = component.correoNoValido
    expect( control?.valid ).toBeFalsy();
    expect( resp ).toBeFalsy();
  });

  it( 'Abrir modal new client', () => {
    component.abrirModal();
    expect(component.modalService.ocultarModal).toBeFalsy();
  });

  it( 'Cerrar modal new client', () => {
    component.cerrarModal();
    expect(component.modalService.ocultarModal).toBeTruthy();
  });

});
