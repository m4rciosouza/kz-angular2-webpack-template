import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule }   from '@angular/forms';

import { DemoComponent } from './';
import { 
  KzCepPipe,
  KzCpfPipe,
  KzCnpjPipe,
  KzCpfCnpjPipe,
  KzCpfValidatorDirective,
  KzCnpjValidatorDirective, 
  KzCpfCnpjValidatorDirective 
} from '../shared';

describe('DemoComponent', function () {
  let comp: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DemoComponent,
        KzCepPipe,
        KzCpfPipe,
        KzCnpjPipe,
        KzCpfCnpjPipe,
        KzCpfValidatorDirective,
        KzCnpjValidatorDirective,
        KzCpfCnpjValidatorDirective
      ],
      imports: [
          RouterTestingModule.withRoutes(
            [{path: '', component: DemoComponent}]),
          FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    comp = fixture.componentInstance;
  });

  it('deve criar o componente', () => expect(comp).toBeDefined());
});
