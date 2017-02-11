/**
 * Arquivo utilitário que serve como mock de um 
 * RouterLink.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.5
 */

import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[routerLink]',
  host: {
    '(click)': 'onClick()'
  }
})
export class RouterLinkStubDirective {

  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}
