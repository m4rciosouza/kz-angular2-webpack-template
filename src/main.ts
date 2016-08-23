/**
 * Arquivo responsável pela inicialização da aplicação.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

if (process.env.ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);