/**
 * Componente de listagem de #MODULO#s.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */

/*#import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { #MODULO_CAP#, #MODULO_CAP#Service } from '../shared';
import { KzPaginacaoComponent } from '../../shared';

@Component({
	selector: 'kz-#MODULO#-listar',
	templateUrl: './#MODULO#-listar.component.html',
	styleUrls: ['./#MODULO#-listar.component.css']
})
export class #MODULO_CAP#ListarComponent implements OnInit {

	private #MODULO#s: #MODULO_CAP#[];
	private idExcluir: number;
	private pagina: number;
	private totalRegistros: number;#*/

	/**
	 * Construtor.
	 *
	 * @param #MODULO_CAP#Service #MODULO#Service
	 */
	/*#constructor(private #MODULO#Service: #MODULO_CAP#Service,
		private route: ActivatedRoute) {
	}#*/

	/**
	 * Método executado logo após a criação do componente.
	 */
	/*#ngOnInit() {
		this.totalRegistros = this.#MODULO#Service.totalRegistros();
		this.pagina = +this.route.snapshot.queryParams['pagina'] || KzPaginacaoComponent.PAG_PADRAO;
		this.#MODULO_PLURAL# = this.#MODULO#Service.listarParcial(
			--this.pagina, KzPaginacaoComponent.TOTAL_PAGS_PADRAO);
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
 		location.reload();
 	}#*/

 	/**
 	 * Método responsável pela paginação.
 	 *
 	 * @param any $event Número da página atual.
 	 */
 	/*#paginar($event: any) {
		this.pagina = $event - 1;
		this.totalRegistros = this.#MODULO#Service.totalRegistros();
		this.#MODULO_PLURAL# = this.#MODULO#Service.listarParcial(
			this.pagina, KzPaginacaoComponent.TOTAL_PAGS_PADRAO);
	}
}#*/