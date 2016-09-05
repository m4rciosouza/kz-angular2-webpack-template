/**
 * Componente de cadastro de usuários.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router'; 

import { Usuario } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';


@Component({
	selector: 'kz-usuario-cadastrar',
	templateUrl: './usuario-cadastrar.component.html',
	providers: [ UsuarioService ],
	directives: [ ROUTER_DIRECTIVES ],
	styleUrls: ['./usuario-cadastrar.component.css']
})
export class UsuarioCadastrarComponent implements OnInit {

	private usuario: Usuario;

	/**
	 * Construtor.
	 *
	 * @param Router router
	 * @param UsuarioService usuarioService
	 */
	constructor(
		private router: Router, 
		private usuarioService: UsuarioService) {
	}

	/**
	 * Método executado logo após a criação do componente.
	 */
	ngOnInit() {
		this.usuario = new Usuario();
	}

	/**
	 * Método responsável por cadastrar um novo usuário.
	 */
	cadastrar() {
		this.usuario.id = new Date().getTime();
		this.usuarioService.cadastrar(this.usuario);
		this.router.navigate(['/usuario-listar']);
	}
}