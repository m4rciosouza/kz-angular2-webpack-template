/**
 * Arquivo de teste do filtro/pipe de CEP.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { KzCepPipe } from './';

describe('KzCepPipe', () => {

  let kzCepPipe: KzCepPipe;

  beforeEach(() => {
    kzCepPipe = new KzCepPipe();
  });

  it('deve formatar corretamento o CEP 00146523 => 00146-523', function() {
      var cep = kzCepPipe.transform('00146523');        
      expect(cep).toEqual('00146-523');
  });

  it('deve formatar corretamento o CEP 09530300 => 09530-300', function() {
      var cep = kzCepPipe.transform('09530300');        
      expect(cep).toEqual('09530-300');
  });
  
  it('deve retornar o CEP passado por ser inválido (0953032a)', function() {
      var cep = kzCepPipe.transform('0953032a');        
      expect(cep).toEqual('0953032a');
  });
  
  it('deve retornar vazio pois o CEP não contém valor', function() {
      var cep = kzCepPipe.transform('');        
      expect(cep).toEqual('');
  });
  
  it('deve retornar o CEP passado por ser inválido (1234567)', function() {
      var cep = kzCepPipe.transform('1234567');        
      expect(cep).toEqual('1234567');
  });
  
  it('deve retornar vazio pois o CEP é undefined', function() {
      var cep = kzCepPipe.transform(undefined);        
      expect(cep).toEqual('');
  });
});
