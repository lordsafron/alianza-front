import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe traer el valor de _ocultarModal en true', () => {

    var result = service.ocultarModal
    expect(result).toBe(true);
  });

  it('Debe traer el valor de _ocultarModal en false cuando se abre modal', () => {

    var result = service.abrirModal();

    expect(result).toBeFalsy;

  });

  it('Debe traer el valor de _ocultarModal en true con previo llamado a abrirModal', () => {
    service.abrirModal();

    var result = service.cerrarModal();

    expect(result).toBeTruthy
  });

});
