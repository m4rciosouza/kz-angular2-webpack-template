/**
 * Arquivo principal de rotas e navegação da aplicação.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosRoutes } from './usuario-demo/usuarios.routes';

export const routes: Routes = [
	...UsuariosRoutes
]; 

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);