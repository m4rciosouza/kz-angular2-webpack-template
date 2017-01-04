/**
 * Validador de CPF.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { AbstractControl } from '@angular/forms';

export class KzCpfValidator {

    /**
     * Método estático responsável pela validação dos dados.
     *
     * @param AbstractControl control
     * @return object ou null caso válido
     */
    static validate(control: AbstractControl): {[key: string]: boolean} {
        if (this.cpfValido(control.value)) {
            return null;
        }
        return { 'cpf': true };
    }

	/**
     * Valida um CPF.
     *
     * @param cpf valor do cpf a ser validado.
     * @return boolean informando se o cpf é válido ou não.
     */
    static cpfValido(cpf: any): boolean {
                
        cpf = !cpf || cpf.replace(/\D/g, '');
        var cpfsInvsRegex = /1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}/;
        
        if (!cpf || cpf.length !== 11 || cpfsInvsRegex.test(cpf)) {
            return false;
        } 
        
        var x = cpf.length - 1;
        var digitosTemp = 0;
        var e = 0;
        var h = '';
        
        for (var i = 0; i <= cpf.length - 3; i++) {
            digitosTemp = cpf.substring(i, i + 1);
            e = e + (digitosTemp * x);
            x -= 1;
            h = h + digitosTemp;
        }
        
        var digitos = 11 - (e % 11);
        if (digitos === 10 || digitos === 11) {
            digitos = 0;
        }

        var cpfSemDigVer = cpf.substring(0, cpf.length - 2) + digitos;
        x = 11;
        e = 0;
        for (var j = 0; j <= (cpf.length - 2); j++) {
            e += (cpfSemDigVer.substring(j, j + 1) * x);
            x -= 1;
        }
        
        var digVerificador = 11 - (e % 11);
        if (digVerificador === 10 || digVerificador === 11) {
            digVerificador = 0;
        }
        
        return ((digitos + '' + digVerificador) === cpf.substring(cpf.length, cpf.length - 2));
    }
}
