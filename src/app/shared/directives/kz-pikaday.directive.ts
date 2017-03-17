/**
 * Diretiva de calendário seletor de data (date picker)
 * com o Pikaday.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.7
 */

import { 
  Directive, 
  HostListener, 
  Input, 
  AfterViewInit, 
  AfterViewChecked 
} from '@angular/core';
import { 
  NG_VALUE_ACCESSOR, ControlValueAccessor 
} from '@angular/forms';

import * as moment from 'moment';

declare var Pikaday: any;

@Directive({
  selector: '[kzPikaday]',
  providers: [{
    provide: NG_VALUE_ACCESSOR, 
    useExisting: KzPikadayDirective, 
    multi: true 
  }]
})
export class KzPikadayDirective implements AfterViewInit, 
    AfterViewChecked, ControlValueAccessor {

  @Input('kzPikaday') pikaday: string;
  @Input('formato') formato: string = 'DD/MM/YYYY';
  @Input('mascara') mascara: string = '99/99/9999';

  onTouched: any;
  onChange: any;

  picker: any;
  field: any;
  value: any;
  initValue: boolean = false;
  
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngAfterViewInit() {
    this.field = document.getElementById(this.pikaday);

    this.picker = new Pikaday({ 
      field: this.field,
      onSelect: (date: any) => {
          this.field.value = moment(date).format(this.formato);
          this.onChange(this.field.value);
      },
      i18n: {
        previousMonth : 'Anterior',
        nextMonth     : 'Próximo',
        months        : [
          'Janeiro', 'Fevereiro', 'Março', 'Abril', 
          'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 
          'Outubro','Novembro','Dezembro'
        ],
        weekdays      : [
          'Domingo', 'Segunda-feira', 'Terça-feira', 
          'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
        ],
        weekdaysShort : [
          'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'
        ]
      }
    });
  }

  ngAfterViewChecked() {
    if (this.value !== undefined && !this.initValue) {
      this.picker.setDate(
        moment(this.value, this.formato).toDate());
      this.initValue = true;
    }
  }

  @HostListener('keyup', ['$event']) 
  onKeyup($event: any) {
    let valor = $event.target.value.replace(/\D/g, '');
    let pad = this.mascara.replace(/\D/g, '').replace(/9/g, '_');
    let valorMask = valor + pad.substring(0, pad.length - valor.length);

    // retorna caso pressionado backspace
    if ($event.keyCode === 8) {
      this.onChange(valor);
      return;
    }

    let valorMaskPos = 0;
    valor = '';
    for (let i = 0; i < this.mascara.length; i++) {
      if (isNaN(parseInt(this.mascara.charAt(i), 10))) {
        valor += this.mascara.charAt(i);
      } else {
        valor += valorMask[valorMaskPos++];
      }
    }
    
    if (valor.indexOf('_') > -1) {
      valor = valor.substr(0, valor.indexOf('_'));
    }

    $event.target.value = valor;
    this.onChange(valor);
  }

  @HostListener('blur', ['$event']) 
  onBlur($event: any) {
    let valor = $event.target.value.length;
    if (valor === 10) {
      return;
    }
    this.onChange('');
    $event.target.value = '';
  }
}
