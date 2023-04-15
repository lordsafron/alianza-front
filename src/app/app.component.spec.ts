import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { SearchComponent } from './components/search/search.component';
import { ClientsComponent } from './components/clients/clients.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './services/client.service';
import { ClientComponent } from './components/client/client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let clientsComponent: ClientsComponent;
  let clientComponent: ClientComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule 
      ],
      declarations: [
        AppComponent,
        MenuComponent,
        SearchComponent,
        ClientsComponent,
        ClientComponent
      ],
      providers: [ClientService]
    });
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    clientsComponent = jasmine.createSpyObj("ClientsComponent", [
      "cambiar", "limpiar"
    ]);
    clientComponent = jasmine.createSpyObj("ClientComponent", [
      "abrirModal"
    ]);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'alianza'`, () => {
    expect(app.title).toEqual('alianza');
  });

  it('recibir() con valor distinto de vacio', () => {
    const event = 'pperez';
    app.clientsComponent = clientsComponent;
    app.recibir(event);
    expect(app.clientsComponent.cambiar).toHaveBeenCalled();
    expect(app.clientsComponent.limpiar).not.toHaveBeenCalled();
  });

  it('recibir() con valor vacio', () => {
    const event = '';
    app.clientsComponent = clientsComponent;
    app.recibir(event);
    expect(app.clientsComponent.limpiar).toHaveBeenCalled();
    expect(app.clientsComponent.cambiar).not.toHaveBeenCalled();
  });

  it('abrirModal()', () => {
    app.clientComponent = clientComponent;
    app.abrirModal();
    expect(app.clientComponent.abrirModal).toHaveBeenCalled();
  });

});
