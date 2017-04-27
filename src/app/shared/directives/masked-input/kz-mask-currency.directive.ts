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
  OnInit,
  ElementRef 
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

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.separadorDecimal = this.kzMask.decimal || ',';
    this.separadorMilhar = this.kzMask.milhar || '.';
    this.prefixo = this.kzMask.prefixo || '';
  }

  writeValue(value: any): void {
    if (value) {
      if (!isNaN(value)) {
        value = value.toFixed(2);
      }
      this.el.nativeElement.value = this.aplicarMascara(String(value));
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('keyup', ['$event']) 
  onKeyup($event: any) {

    let valor: string = this.aplicarMascara($event.target.value);

    if (valor === '') {
      this.onChange('');
      $event.target.value = '';
      return;
    }

    if (this.separadorDecimal === ',') {
      this.onChange(valor.replace(/\./g, '').replace(',', '.'));
    } else {
      this.onChange(valor.replace(/\,/g, ''));
    }

    $event.target.value = valor;
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

  /**
   * Aplica a máscara a determinado valor.
   *
   * @param string valorConverter
   * @return string
   */
  aplicarMascara(valorConverter: string): string {
    let valorNum = parseInt(valorConverter.replace(/\D/g, ''), 10);
    let valorMask = '';
    let valor: string;

    if (isNaN(valorNum)) {
      return '';
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
      let sepMilhar = 0;
      for (let i = (valor.length - 3); i >= 0; i--) {
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

    if (this.prefixo !== '') {
      valorMask = this.prefixo + ' ' + valorMask;
    }
    
    return valorMask;
  }

}
