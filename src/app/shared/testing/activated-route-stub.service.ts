/**
 * Arquivo utilitário que serve como mock de um 
 * ActivatedRoute.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.5
 */

import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ActivatedRouteStub {

  private _queryParams: string[] = [];
  get queryParams() { 
    return this._queryParams; 
  }
  set queryParams(params: string[]) {
    this._queryParams = params;
  }

  private subject = new BehaviorSubject(this.testParams);
  params = this.subject.asObservable();

  private _testParams: {};
  get testParams() { 
    return this._testParams; 
  }
  set testParams(params: {}) {
    this._testParams = params;
    this.subject.next(params);
  }

  // ActivatedRoute.snapshot.params
  get snapshot() {
    return { 
      params: this.testParams,
      queryParams: this._queryParams 
    };
  }
}
