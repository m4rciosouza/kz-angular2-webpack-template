/**
 * Serviço de gerenciamento de #MODULO_PLURAL#.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */
 
/*#import { Injectable } from '@angular/core';

import { #MODULO_CAP# } from './#MODULO#.model';

@Injectable()
export class #MODULO_CAP#Service {#*/

	/**
	 * Retorna listagem de todos os #MODULO_PLURAL#.
	 *
	 * @return #MODULO_CAP#[] #MODULO_PLURAL#
	 */
	/*#listarTodos(): #MODULO_CAP#[] {
		var #MODULO_PLURAL#:string = sessionStorage['#MODULO_PLURAL#'];
		return #MODULO_PLURAL# ? JSON.parse(#MODULO_PLURAL#) : [];
	}#*/

	/**
	 * Cadastra um novo #MODULO#.
	 *
	 * @param #MODULO_CAP# #MODULO#
	 */
	/*#cadastrar(#MODULO#: #MODULO_CAP#): void {
		var #MODULO_PLURAL#:#MODULO_CAP#[] = this.listarTodos();
		#MODULO_PLURAL#.push(#MODULO#);
		sessionStorage['#MODULO_PLURAL#'] = JSON.stringify(#MODULO_PLURAL#);
	}#*/

	/**
	 * Retorna os dados de um #MODULO# por id.
	 *
	 * @param number id
	 * @return Usuario #MODULO#
	 */
	/*#buscarPorId(id: number):#MODULO_CAP# {
		var #MODULO_PLURAL#:#MODULO_CAP#[] = this.listarTodos();
		for (let #MODULO# of #MODULO_PLURAL#) {
			if (#MODULO#.id == id) {
				return #MODULO#;
			}
		}

		return new #MODULO_CAP#();
	}#*/

	/**
	 * Atualiza os dados de um #MODULO#.
	 *
	 * @param number id
	 * @param #MODULO_CAP# #MODULO#
	 */
	/*#atualizar(id: number, #MODULO#: #MODULO_CAP#): void {
		var #MODULO_PLURAL#:#MODULO_CAP#[] = this.listarTodos();
		for (var i=0; i<#MODULO_PLURAL#.length; i++) {
			if (#MODULO_PLURAL#[i].id == id) {
				#MODULO_PLURAL#[i] = #MODULO#;
			}
		}

		sessionStorage['#MODULO_PLURAL#'] = JSON.stringify(#MODULO_PLURAL#);
	}#*/

	/**
	 * Remove um #MODULO#.
	 *
	 * @param number id
	 */
	/*#excluir(id: number): void {
		var #MODULO_PLURAL#:#MODULO_CAP#[] = this.listarTodos();
		var #MODULO_PLURAL#Final:#MODULO_CAP#[] = [];

		for (let #MODULO# of #MODULO_PLURAL#) {
			if (#MODULO#.id != id) {
				#MODULO_PLURAL#Final.push(#MODULO#);
			}
		}

		sessionStorage['#MODULO_PLURAL#'] = JSON.stringify(#MODULO_PLURAL#Final);
	}

	/**
	 * Retorna listagem parcial de #MODULO_PLURAL#.
	 *
	 * @param number pagina
	 * @param number qtdPorPagina
	 * @return #MODULO_CAP#[] #MODULO_PLURAL#
	 */
	/*#listarParcial(pagina: number, qtdPorPagina: number): #MODULO_CAP#[] {
		let storage: string = sessionStorage['#MODULO_PLURAL#'];
		let #MODULO_PLURAL#: #MODULO_CAP#[] = storage ? JSON.parse(storage) : [];

		let #MODULO_PLURAL#Parcial: #MODULO_CAP#[] = [];
		for (let i = ( pagina * qtdPorPagina ); i < (pagina * qtdPorPagina + qtdPorPagina); i++) {
			if (i >= #MODULO_PLURAL#.length) {
				break;
			}
			#MODULO_PLURAL#Parcial.push(#MODULO_PLURAL#[i]);
		}

		return #MODULO_PLURAL#Parcial;
	}#*/

	/**
	 * Retorna o total de pessoas.
	 *
	 * @return number total de registros
	 */
	/*#totalRegistros(): number {
		return this.listarTodos().length;
	}
}#*/
