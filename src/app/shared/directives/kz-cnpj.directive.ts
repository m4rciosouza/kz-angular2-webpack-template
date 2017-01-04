/**
 * Diretiva de validação de CNPJ.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { Directive } from '@angular/core';
import { 
  AbstractControl, NG_VALIDATORS, Validator
} from '@angular/forms';

import { KzCnpjValidator } from '../validators';

@Directive({
  selector: '[kz-cnpj]',
  providers: [{
    provide: NG_VALIDATORS, 
    useExisting: KzCnpjValidatorDirective, 
    multi: true 
  }]
})
export class KzCnpjValidatorDirective implements Validator {

  /**
   * Valida os dados.
   *
   * @param AbstractControl control
   * @return object ou null caso válido
   */
  validate(control: AbstractControl): {[key: string]: any} {
    return KzCnpjValidator.validate(control);
  }
}
