/**
 * Arquivo de teste do filtro/pipe de CNPJ.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { KzCnpjPipe } from './';

describe('KzCnpjPipe', () => {

	let kzCnpjPipe: KzCnpjPipe;

	beforeEach(() => {
	    kzCnpjPipe = new KzCnpjPipe();
	});

	it('deve formatar corretamento o CNPJ 82494674000154 => 82.494.674/0001-54', function() {
        var cnpj = kzCnpjPipe.transform('82494674000154');
        expect(cnpj).toEqual('82.494.674/0001-54');
    });
    
    it('deve formatar corretamento o CNPJ 82.494.674/0001-54 => 82.494.674/0001-54', function() {
        var cnpj = kzCnpjPipe.transform('82.494.674/0001-54');
        expect(cnpj).toEqual('82.494.674/0001-54');
    });
    
    it('deve retornar o CNPJ passado por ser inválido (8249467400015a)', function() {
        var cnpj = kzCnpjPipe.transform('8249467400015a');        
        expect(cnpj).toEqual('8249467400015a');
    });
    
    it('deve retornar vazio pois o CNPJ não contém valor', function() {
        var cnpj = kzCnpjPipe.transform('');        
        expect(cnpj).toEqual('');
    });
    
    it('deve retornar o CNPJ passado por ser inválido (8249467400015)', function() {
        var cnpj = kzCnpjPipe.transform('8249467400015');        
        expect(cnpj).toEqual('8249467400015');
    });
    
    it('deve retornar vazio pois o CNPJ é undefined', function() {
        var cnpj = kzCnpjPipe.transform(undefined);
        expect(cnpj).toEqual('');
    });

});
