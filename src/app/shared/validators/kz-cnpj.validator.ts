/**
 * Validador de CNPJ.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { AbstractControl } from '@angular/forms';

export class KzCnpjValidator {

    /**
     * Método estático responsável pela validação dos dados.
     *
     * @param AbstractControl control
     * @return object ou null caso válido
     */
    static validate(control: AbstractControl): {[key: string]: boolean} {
        if (this.cnpjValido(control.value)) {
            return null;
        }
        return { 'cnpj': true };
    }

	/**
     * Valida um CNPJ.
     *
     * @param cnpj valor do cnpj a ser validado.
     * @return boolean informando se o cnpj é válido ou não.
     */
    static cnpjValido(cnpj: any): boolean {
        cnpj = !cnpj || cnpj.replace(/\D/g, '');
        
        var cnpjsInvsRegex = /1{14}|2{14}|3{14}|4{14}|5{14}|6{14}|7{14}|8{14}|9{14}|0{14}/;
 
        if (!cnpj || cnpj.length !== 14 || cnpjsInvsRegex.test(cnpj)) {
            return false;
        }
             
        var tamanho = cnpj.length - 2;
        var numeros = cnpj.substring(0, tamanho);
        var digitos = cnpj.substring(tamanho);
        var soma = 0;
        var pos = tamanho - 7;
        
        for (var i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }
        
        var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado !== parseInt(digitos.charAt(0), 10)) {
            return false;
        }
             
        tamanho += 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }
        
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        
        return (resultado === parseInt(digitos.charAt(1), 10));
    }
}
