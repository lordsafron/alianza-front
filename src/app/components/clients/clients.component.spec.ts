import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ClientsComponent } from './clients.component';
import { ClientService } from 'src/app/services/client.service';
import { of, from } from 'rxjs';

describe('ClientsComponent', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;
  const http = jasmine.createSpyObj('HttpClient', { post: of({}), get: of({}) })
  const servicio = new ClientService(http);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsComponent ],
      imports: [HttpClientTestingModule],
      providers: [ ClientService ],
    });

    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Creación Clients Component', () => {
    spyOn( servicio, 'getAllClients' ).and.callFake( () => {
      return from( [  []  ] );
    });
    component.ngOnInit
    expect(component).toBeTruthy();
  });
});
