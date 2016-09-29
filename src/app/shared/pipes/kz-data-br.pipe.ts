/**
 * Filtro/Pipe de formatação de data.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';
 
@Pipe({
	name: 'kzDataBr'
})
export class KzDataBrPipe implements PipeTransform {

	/**
	 * Método responsável por formatar a data.
	 *
	 * @param string data
	 * @return string
	 */
	transform(data: string): string {        
        return moment(data).format('DD/MM/YYYY');
	}
}