/**
 * Teste do componente utilitário para exibir os links de 
 * paginação para uma tabela HTML.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.2
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule }   from '@angular/forms';

import { KzPaginacaoComponent } from './';


describe('DemoComponent', function () {
  let fixture: ComponentFixture<KzPaginacaoComponent>;
  let comp: KzPaginacaoComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        KzPaginacaoComponent
      ],
      imports: [
          RouterTestingModule.withRoutes(
            [{path: '', component: KzPaginacaoComponent}]),
          FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KzPaginacaoComponent);
    comp = fixture.componentInstance;
  });

  it('deve criar o componente', () => expect(comp).toBeDefined());
});
