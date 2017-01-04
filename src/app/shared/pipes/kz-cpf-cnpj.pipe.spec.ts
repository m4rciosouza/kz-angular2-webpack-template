/**
 * Arquivo de teste do filtro/pipe de CPF/CNPJ.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { KzCpfCnpjPipe } from './';

describe('KzCpfCnpjPipe', () => {

	let kzCpfCnpjPipe: KzCpfCnpjPipe;

	beforeEach(() => {
	    kzCpfCnpjPipe = new KzCpfCnpjPipe();
	});

	 it('deve formatar corretamento o CPF 35415322575 => 354.153.225-75', function() {
        var cpf = kzCpfCnpjPipe.transform('35415322575');
        expect(cpf).toEqual('354.153.225-75');
    });
    
    it('deve formatar corretamento o CNPJ 82494674000154 => 82.494.674/0001-54', function() {
        var cnpj = kzCpfCnpjPipe.transform('82494674000154');
        expect(cnpj).toEqual('82.494.674/0001-54');
    });
    
    it('deve retornar o CPF/CNPJ passado por ser inválido (824sd6740015a)', function() {
        var valor = kzCpfCnpjPipe.transform('824sd6740015a');        
        expect(valor).toEqual('824sd6740015a');
    });
    
    it('deve retornar vazio pois o CPF/CNPJ não contém valor', function() {
        var valor = kzCpfCnpjPipe.transform('');        
        expect(valor).toEqual('');
    });
    
    it('deve retornar o CPF/CNPJ passado por ser inválido (8249467400015)', function() {
        var valor = kzCpfCnpjPipe.transform('8249467400015');        
        expect(valor).toEqual('8249467400015');
    });
    
    it('deve retornar vazio pois o CPF/CNPJ é undefined', function() {
        var valor = kzCpfCnpjPipe.transform(undefined);        
        expect(valor).toEqual('');
    });

});
