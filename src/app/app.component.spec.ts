/**
 * Arquivo de teste do componente AppComponent.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('App', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AppComponent]});
  });

  it ('deve criar o componente AppComponent', () => {
    //let fixture = TestBed.createComponent(AppComponent);
    //expect(fixture.componentInstance instanceof AppComponent).toBe(
    //	true, 'deve criar o AppComponent');
  });
  
});