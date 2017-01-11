import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing } from './app.routes';

import { 
  KzCepPipe,
  KzCpfPipe,
  KzCnpjPipe,
  KzCpfCnpjPipe,
  KzCpfValidatorDirective,
  KzCnpjValidatorDirective, 
  KzCpfCnpjValidatorDirective,
  ModalUtilComponent,
  KzPaginacaoComponent,
  DemoComponent
} from './';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	routing,
    FormsModule
  ],
  declarations: [ 
  	AppComponent,
  	DemoComponent,
    KzCepPipe,
    KzCpfPipe,
    KzCnpjPipe,
    KzCpfCnpjPipe,
    KzCpfValidatorDirective,
    KzCnpjValidatorDirective,
    KzCpfCnpjValidatorDirective,
    KzPaginacaoComponent,
    ModalUtilComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
