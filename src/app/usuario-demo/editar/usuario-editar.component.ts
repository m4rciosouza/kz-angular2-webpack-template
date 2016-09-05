/**
 * Componente de edição de usuário.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router'; 

import { Usuario } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
	selector: 'kz-usuario-editar',
	templateUrl: './usuario-editar.html',
	providers: [ UsuarioService ],
	directives: [ ROUTER_DIRECTIVES ]
})
export class UsuarioEditarComponent implements OnInit {

	private id: number;
	private usuario: Usuario;

	/**
	 * Construtor.
	 *
	 * @param ActivatedRoute route
	 * @param Router router
	 * @param UsuarioService usuarioService
	 */
	constructor(
		private route: ActivatedRoute, 
		private router: Router, 
		private usuarioService: UsuarioService) {
	}

	/**
	 * Método executado logo após a criação do componente.
	 */
	ngOnInit() {
		this.id = +this.route.snapshot.params['id'];
		this.usuario = this.usuarioService.buscarPorId(this.id);
	}

	/**
	 * Método responsável por atualizar os dados de um usuário.
	 */
	atualizar() {
		this.usuarioService.atualizar(this.id, this.usuario);
		this.router.navigate(['/usuario-listar']);
	}
}