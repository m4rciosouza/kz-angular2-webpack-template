/**
 * Arquivo de teste do filtro/pipe de data.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { KzDataBrPipe } from './kz-data-br.pipe';

describe('KzDataBrPipe', () => {

  let kzDataBrPipe:KzDataBrPipe;

  beforeEach(() => {
    kzDataBrPipe = new KzDataBrPipe();
  });

  it('deve formatar corretamento a data 2016-09-24 => 24/09/2016', function() {
      var dataBr = kzDataBrPipe.transform('2016-09-24');        
      expect(dataBr).toEqual('24/09/2016');
  });
});