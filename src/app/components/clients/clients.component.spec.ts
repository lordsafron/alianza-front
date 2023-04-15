import { ComponentFixture, TestBed, flush } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ClientsComponent } from './clients.component';
import { ClientService } from 'src/app/services/client.service';
import { of } from 'rxjs';

describe('ClientsComponent', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;
  let service: ClientService;
  const response = {
    message: 'SUCCESS',
    traceId: '12132134',    
    data: [
      {id: 1, businessId: 'pedro perez', sharedId: 'pperez', email: 'pperez@gmail.com', phone: '121411'},
      {id: 2, businessId: 'maria lopez', sharedId: 'mlopez', email: 'mlopez@gmail.com', phone: '1352342'}
    ]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsComponent ],
      imports: [HttpClientTestingModule],
      providers: [ ClientService ],
    });

    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ClientService);
  });

  it('Creación Clients Component', () => {
    expect(component).toBeTruthy();
  });

  it('cargarClients()', () => {

    const spy = spyOn(service, 'getAllClients').and.returnValue(of(response));

    component.cargarClients();

    expect(spy).toHaveBeenCalled();

    expect(component.clients).toEqual(response.data);
  });

  it('cambiar()', () => {
    const termino = 'pperez';
    component.clientsData = response.data;

    component.cambiar(termino);

    expect(component.clients).toHaveSize(1);
  });

  it('limpiar()', () => {
    component.clientsData = response.data;

    component.limpiar();

    expect( component.clients ).toEqual( component.clientsData );
  });

});
