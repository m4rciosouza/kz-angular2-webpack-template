/**
 * Diretiva de validação de CPF/CNPJ.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { Directive } from '@angular/core';
import { 
  AbstractControl, NG_VALIDATORS, Validator
} from '@angular/forms';

import { KzCpfCnpjValidator } from '../validators';

@Directive({
  selector: '[kz-cpf-cnpj]',
  providers: [{
    provide: NG_VALIDATORS, 
    useExisting: KzCpfCnpjValidatorDirective, 
    multi: true 
  }]
})
export class KzCpfCnpjValidatorDirective implements Validator {

  /**
   * Valida os dados.
   *
   * @param AbstractControl control
   * @return object ou null caso válido
   */
  validate(control: AbstractControl): {[key: string]: any} {
    return KzCpfCnpjValidator.validate(control);
  }
}
