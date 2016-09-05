/**
 * Arquivo de configuração de rotas.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { Routes } from '@angular/router'; 

import { UsuarioListarComponent } from './listar/usuario-listar.component';
import { UsuarioCadastrarComponent } from './cadastrar/usuario-cadastrar.component';
import { UsuarioEditarComponent } from './editar/usuario-editar.component';
import { UsuarioVisualizarComponent } from './visualizar/usuario-visualizar.component';

export const UsuariosRoutes: Routes = [
	{ path: 'usuario-listar', component: UsuarioListarComponent }, 
	{ path: 'usuario-cadastrar', component: UsuarioCadastrarComponent }, 
	{ path: 'usuario-editar/:id', component: UsuarioEditarComponent },
	{ path: 'usuario-visualizar/:id', component: UsuarioVisualizarComponent },
	{ path: '', redirectTo: '/usuario-listar', terminal: true }
];