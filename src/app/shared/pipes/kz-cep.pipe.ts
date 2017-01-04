/**
 * Filtro/Pipe de formatação de CEP.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
	name: 'kzCep'
})
export class KzCepPipe implements PipeTransform {

	/**
	 * Método responsável por formatar o CEP.
	 *
	 * @param string cep
	 * @return string
	 */
	transform(cep: string): string {
 		if (!cep) {
            return '';
        }
    
        var cepValor = cep.replace(/\D/g, '');
    
        if (cepValor.length !== 8) {
            return cep;
        }
        
        var cepLista = cepValor.match(/^(\d{5})(\d{3})$/);
        
        if (cepLista && cepLista.length === 3) {
            cep = cepLista[1] + '-' + cepLista[2];
        }
        
        return cep;
	}
}
