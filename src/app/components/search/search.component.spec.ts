import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { By } from '@angular/platform-browser';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    });

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('buscarClient()', () => {
    const termino = 'pperez';

    const spy = spyOn(component.terminoEvent, 'emit');
    component.buscarClient(termino);
 
    const nativeElement = fixture.debugElement;
    const button = nativeElement.query(By.css('#buscar'));
    button.triggerEventHandler('click');

    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith(termino);
    expect(component.terminoEvent.emit).toHaveBeenCalledWith(termino);
  });

  it('limpiar()', () => {
    const termino = '';

    const spy = spyOn(component.terminoEvent, 'emit');
    component.limpiar();
 
    const nativeElement = fixture.debugElement;
    const button = nativeElement.query(By.css('#limpiar'));
    button.triggerEventHandler('click');

    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith(termino);
    expect(component.terminoEvent.emit).toHaveBeenCalledWith(termino);
  });

});
