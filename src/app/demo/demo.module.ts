/**
 * Arquivo de configuração do módulo.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */

import { NgModule } from '@angular/core';

import { DemoComponent } from './';

import { SharedModule } from '../shared';

@NgModule({
	imports: [ 
		SharedModule
	],
	declarations: [
		DemoComponent
	]
})
export class DemoModule {}
