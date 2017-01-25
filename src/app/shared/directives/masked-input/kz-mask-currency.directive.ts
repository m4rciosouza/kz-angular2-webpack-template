/**
 * Diretiva de máscara para campos monetários.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.4
 */

import { 
  Directive, 
  HostListener, 
  Input, 
  OnInit 
} from '@angular/core';
import { 
  NG_VALUE_ACCESSOR, ControlValueAccessor 
} from '@angular/forms';

@Directive({
  selector: '[kzMaskCurrency]',
  providers: [{
    provide: NG_VALUE_ACCESSOR, 
    useExisting: KzMaskCurrencyDirective, 
    multi: true 
  }]
})
export class KzMaskCurrencyDirective implements ControlValueAccessor, OnInit {

  onTouched: any;
  onChange: any;

  separadorDecimal: string;
  separadorMilhar: string;
  prefixo: string;

  @Input('kzMaskCurrency') kzMask: any;

  ngOnInit() {
    this.separadorDecimal = this.kzMask.decimal || ',';
    this.separadorMilhar = this.kzMask.milhar || '.';
    this.prefixo = this.kzMask.prefixo || '';
  }

  writeValue(value: any): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('keyup', ['$event']) 
  onKeyup($event: any) {
    var valorNum = parseInt($event.target.value.replace(/\D/g, ''));
    var valorMask = '';
    var valor: string;

    if (isNaN(valorNum)) {
      this.onChange('');
      $event.target.value = '';
      return;
    }

    valor = valorNum.toString();
    switch (valor.length) {
       case 1:
         valorMask = '0' + this.separadorDecimal + 
           '0' + valor;
         break;
       case 2:
         valorMask = '0' + this.separadorDecimal + valor;
         break;
       case 3:
         valorMask = valor.substr(0, 1) + this.separadorDecimal + 
           valor.substr(1, 2);
         break;
       default:
         break;
     }

    if (valorMask === '') {
      var sepMilhar = 0;
      for (var i = (valor.length - 3); i >= 0; i--) {
        if (sepMilhar === 3) {
          valorMask = this.separadorMilhar + valorMask;
          sepMilhar = 0;
        }
        valorMask = valor.charAt(i) + valorMask;
        sepMilhar++;
      }
      valorMask = valorMask + this.separadorDecimal + 
        valor.substr(valor.length - 2, 2);
    }

    if (this.separadorDecimal === ',') {
      this.onChange(valorMask.replace(/\./g, '').replace(',', '.'));
    } else {
      this.onChange(valorMask.replace(/\,/g, ''));
    }
    if (this.prefixo !== '') {
      valorMask = this.prefixo + ' ' + valorMask;
    }
    $event.target.value = valorMask;
  }

  @HostListener('blur', ['$event']) 
  onBlur($event: any) {
    var pattern = '0' + this.separadorDecimal + '00';
    if ($event.target.value.indexOf(pattern) === -1) {
      return;
    }
    this.onChange('');
    $event.target.value = '';
  }
}
