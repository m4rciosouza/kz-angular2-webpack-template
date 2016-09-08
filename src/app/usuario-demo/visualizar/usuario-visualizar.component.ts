/**
 * Componente de visualização de usuário.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

import { Usuario, UsuarioService } from '../shared';

@Component({
	selector: 'kz-aluno-visualizar',
	templateUrl: './usuario-visualizar.component.html',
	providers: [ UsuarioService ],
	directives: [ ROUTER_DIRECTIVES ],
	styleUrls: ['./usuario-visualizar.component.css']
})
export class UsuarioVisualizarComponent implements OnInit {

	private id: number;
	private usuario: Usuario;

	/**
	 * Construtor.
	 *
	 * @param ActivatedRoute route
	 * @param UsuarioService usuarioService
	 */
	constructor(
		private route: ActivatedRoute, 
		private usuarioService: UsuarioService) {
	}

	/**
	 * Método executado logo após a criação do componente.
	 */
	ngOnInit() {
		this.id = +this.route.snapshot.params['id'];
		this.usuario = this.usuarioService.buscarPorId(this.id);
	}
}