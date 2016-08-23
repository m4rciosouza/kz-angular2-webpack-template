/**
 * Módulo principal da aplicação.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}