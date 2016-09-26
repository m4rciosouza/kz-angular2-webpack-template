/**
 * Componente de cadastro de #MODULO_PLURAL#.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

/*#import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router'; 

import { #MODULO_CAP#, #MODULO_CAP#Service } from '../shared';

@Component({
	selector: 'kz-#MODULO#-cadastrar',
	templateUrl: './#MODULO#-cadastrar.component.html',
	providers: [ #MODULO_CAP#Service ],
	directives: [ ROUTER_DIRECTIVES ],
	styleUrls: ['./#MODULO#-cadastrar.component.css']
})
export class #MODULO_CAP#CadastrarComponent implements OnInit {

	private #MODULO#: #MODULO_CAP#;#*/

	/**
	 * Construtor.
	 *
	 * @param Router router
	 * @param #MODULO_CAP#Service #MODULO#Service
	 */
	/*#constructor(
		private router: Router, 
		private #MODULO#Service: #MODULO_CAP#Service) {
	}#*/

	/**
	 * Método executado logo após a criação do componente.
	 */
	/*#ngOnInit() {
		this.#MODULO# = new #MODULO_CAP#();
	}#*/

	/**
	 * Método responsável por cadastrar um novo #MODULO#.
	 */
	/*#cadastrar() {
		this.#MODULO#.id = new Date().getTime();
		this.#MODULO#Service.cadastrar(this.#MODULO#);
		this.router.navigate(['/#MODULO#-listar']);
	}
}#*/