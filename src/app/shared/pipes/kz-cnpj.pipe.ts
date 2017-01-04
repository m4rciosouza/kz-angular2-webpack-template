/**
 * Filtro/Pipe de formatação de CNPJ.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
	name: 'kzCnpj'
})
export class KzCnpjPipe implements PipeTransform {

	/**
	 * Formata um CNPJ ou retorna o valor passado caso inválido. 
     * O CNPJ informado deve ser composto por 14 caracteres numéricos.
	 *
	 * @param string cnpj
	 * @return string
	 */
	transform(cnpj: string): string {
 		if (!cnpj) {
            return '';
        }
    
        var cnpjValor = cnpj.replace(/\D/g, '');
    
        if (cnpjValor.length !== 14) {
            return cnpj;
        }
        
        var cnpjLista = cnpjValor.match(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/);
        
        if (cnpjLista && cnpjLista.length === 6) {
            cnpj = cnpjLista[1] + '.' + cnpjLista[2] + '.' + cnpjLista[3] + '/' + cnpjLista[4] + '-' + cnpjLista[5];
        }
        
        return cnpj;
	}
}
