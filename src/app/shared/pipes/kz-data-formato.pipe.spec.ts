/**
 * Arquivo de teste do filtro/pipe de data.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { KzDataFormatoPipe } from './kz-data-formato.pipe';

describe('KzDataFormatoPipe', () => {

  let kzDataFormatoPipe:KzDataFormatoPipe;

  beforeEach(() => {
    kzDataFormatoPipe = new KzDataFormatoPipe();
  });

  it('deve formatar corretamento a data 2016-09-24 => 24/09/2016', function() {
      var data = kzDataFormatoPipe.transform('2016-09-24', 'DD/MM/YYYY');
      expect(data).toEqual('24/09/2016');
  });

  it('deve formatar corretamento a data 2016-09-24 08:05:45 => 24/09/2016 08:05:45', function() {
      var data = kzDataFormatoPipe.transform('2016-09-24 08:05:45', 'DD/MM/YYYY HH:mm:ss');
      expect(data).toEqual('24/09/2016 08:05:45');
  });
});