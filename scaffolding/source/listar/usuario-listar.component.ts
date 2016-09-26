/**
 * Componente de listagem de #MODULO#s.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

/*#import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { #MODULO_CAP#, #MODULO_CAP#Service } from '../shared';
import { ModalUtilComponent } from '../../shared';

@Component({
	selector: 'kz-#MODULO#-listar',
	templateUrl: './#MODULO#-listar.component.html',
	providers: [ #MODULO_CAP#Service ],
	directives: [ ROUTER_DIRECTIVES, ModalUtilComponent ],
	styleUrls: ['./#MODULO#-listar.component.css']
})
export class #MODULO_CAP#ListarComponent implements OnInit {

	private #MODULO#s: #MODULO_CAP#[];
	private idExcluir: number;#*/

	/**
	 * Construtor.
	 *
	 * @param #MODULO_CAP#Service #MODULO#Service
	 */
	/*#constructor(private #MODULO#Service: #MODULO_CAP#Service) {
	}#*/

	/**
	 * Método executado logo após a criação do componente.
	 */
	/*#ngOnInit() {
		this.#MODULO#s = this.#MODULO#Service.listarTodos();
	}#*/

	/**
	 * Método responsável por armazenar o id do #MODULO# a 
	 * removido.
	 *
	 * @param number id
	 */
	/*#excluir(id: number) {
 		this.idExcluir = id;
 	}#*/

 	/**
	 * Método responsável por remover um #MODULO#.
	 */
 	/*#onExcluir() {
 		this.#MODULO#Service.excluir(this.idExcluir);
 		this.idExcluir = -1;
 		this.#MODULO#s = this.#MODULO#Service.listarTodos();
 	}
}#*/