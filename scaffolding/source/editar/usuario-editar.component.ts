/**
 * Componente de edição de #MODULO#.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

/*#import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router'; 

import { #MODULO_CAP#, #MODULO_CAP#Service } from '../shared';

@Component({
	selector: 'kz-#MODULO#-editar',
	templateUrl: './#MODULO#-editar.component.html',
	providers: [ #MODULO_CAP#Service ],
	directives: [ ROUTER_DIRECTIVES ],
	styleUrls: ['./#MODULO#-editar.component.css']
})
export class #MODULO_CAP#EditarComponent implements OnInit {

	private id: number;
	private #MODULO#: #MODULO_CAP#;#*/

	/**
	 * Construtor.
	 *
	 * @param ActivatedRoute route
	 * @param Router router
	 * @param #MODULO_CAP#Service #MODULO#Service
	 */
	/*#constructor(
		private route: ActivatedRoute, 
		private router: Router, 
		private #MODULO#Service: #MODULO_CAP#Service) {
	}#*/

	/**
	 * Método executado logo após a criação do componente.
	 */
	/*#ngOnInit() {
		this.id = +this.route.snapshot.params['id'];
		this.#MODULO# = this.#MODULO#Service.buscarPorId(this.id);
	}#*/

	/**
	 * Método responsável por atualizar os dados de um #MODULO#.
	 */
	/*#atualizar() {
		this.#MODULO#Service.atualizar(this.id, this.#MODULO#);
		this.router.navigate(['/#MODULO#-listar']);
	}
}#*/