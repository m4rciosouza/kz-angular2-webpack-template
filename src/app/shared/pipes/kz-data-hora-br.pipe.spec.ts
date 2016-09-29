/**
 * Arquivo de teste do filtro/pipe de data e hora.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { KzDataHoraBrPipe } from './kz-data-hora-br.pipe';

describe('KzDataHoraBrPipe', () => {

  let kzDataHoraBrPipe:KzDataHoraBrPipe;

  beforeEach(() => {
    kzDataHoraBrPipe = new KzDataHoraBrPipe();
  });

  it('deve formatar corretamento a data e hora 2016-09-24 08:05:45 => 24/09/2016 08:05:45', function() {
      var dataHoraBr = kzDataHoraBrPipe.transform('2016-09-24 08:05:45');        
      expect(dataHoraBr).toEqual('24/09/2016 08:05:45');
  });
});