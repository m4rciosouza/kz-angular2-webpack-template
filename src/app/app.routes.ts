/**
 * Arquivo principal de rotas e navegação da aplicação.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoRoutes } from './demo';

export const routes: Routes = [
	...DemoRoutes
]; 

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);