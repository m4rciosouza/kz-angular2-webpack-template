/**
 * Filtro/Pipe de formatação de data e hora.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';
 
@Pipe({
	name: 'kzDataHoraBr'
})
export class KzDataHoraBrPipe implements PipeTransform {

	/**
	 * Método responsável por formatar a data e hora.
	 *
	 * @param string data e hora
	 * @return string
	 */
	transform(data: string): string {        
        return moment(data).format('DD/MM/YYYY HH:mm:ss');
	}
}