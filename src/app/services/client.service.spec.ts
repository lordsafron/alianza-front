import { TestBed } from '@angular/core/testing';

import { ClientService } from './client.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('ClientService', () => {
  let httpMock: HttpTestingController;
  let service: ClientService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClientService]
    });
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(ClientService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debe traer 2 registro el método getAllClients', () => {
    const response = {
      message: 'SUCCESS',
      traceId: '12132134',    
      data: [
        {id: 1, businessId: 'pedro perez', sharedId: 'pperez', email: 'pperez@gmail.com', phone: '121411'},
        {id: 2, businessId: 'maria lopez', sharedId: 'mlopez', email: 'mlopez@gmail.com', phone: '1352342'}
      ]
    };
    service.getAllClients().subscribe( resp => {
      expect( resp ).toEqual(response);
    });

    const req = httpMock.expectOne('http://localhost:8080/client');

    expect(req.request.method).toEqual('GET');

    req.flush(response);

  });

  it('Debe traer el registro del método getClientBySharedId', () => {
    const sharedId = 'pperez'
    const response = {
      message: 'SUCCESS',
      traceId: '12132134',    
      data: 
        [{id: 1, businessId: 'pedro perez', sharedId: 'pperez', email: 'pperez@gmail.com', phone: '121411'}]
    };

    service.getClientBySharedId(sharedId).subscribe( resp => {
      expect( resp ).toEqual(response);
    });

    const req = httpMock.expectOne(`http://localhost:8080/client/${sharedId}`);

    expect(req.request.method).toEqual('GET');

    req.flush(response);

  });

  it('Debe traer el registro del método saveClient', () => {
    const client = {businessId: 'pedro perez', email: 'pperez@gmail.com', phone: '121411'}
    const response = {
      message: 'SUCCESS',
      traceId: '12132134',    
      data: 
        [{id: 1, businessId: 'pedro perez', sharedId: 'pperez', email: 'pperez@gmail.com', phone: '121411'}]
    };
    service.saveClient(client).subscribe( resp => {
      expect( resp ).toEqual(response);
    });

    const req = httpMock.expectOne('http://localhost:8080/client');

    expect(req.request.method).toEqual('POST');

    req.flush(response);

  });

});
