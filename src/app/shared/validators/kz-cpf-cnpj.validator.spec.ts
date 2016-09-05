/**
 * Arquivo de teste do validador de CPF/CNPJ.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { Control } from '@angular/common';

import { KzCpfCnpjValidator } from './kz-cpf-cnpj.validator';

describe('KzCpfCnpjValidator', () => {

	beforeEach(() => {
	});

    it('deve validar corretamento o CPF 54512089306 => 545.120.893-06', function() {
        var cpf = KzCpfCnpjValidator.validate(new Control('54512089306'));
        expect(cpf).toBeNull();
    });
    
    it('deve validar corretamento o CNPJ 82494674000154 => 82.494.674/0001-54', function() {
        var cnpj = KzCpfCnpjValidator.validate(new Control('82494674000154'));
        expect(cnpj).toBeNull();
    });
    
    it('deve retornar inválido para o CPF/CNPJ 824sd6740015a', function() {
        var valor = KzCpfCnpjValidator.validate(new Control('824sd6740015a'));        
        expect(valor).toEqual({ 'cpfCnpj': true });
    });
    
    it('deve retornar inválido pois o CPF/CNPJ não contém valor', function() {
        var valor = KzCpfCnpjValidator.validate(new Control(''));
        expect(valor).toEqual({ 'cpfCnpj': true });
    });
    
    it('deve validar o CPF/CNPJ passado como inválido (8249467400015)', function() {
        var valor = KzCpfCnpjValidator.validate(new Control('8249467400015'));        
        expect(valor).toEqual({ 'cpfCnpj': true });
    });
    
    it('deve retornar √ pois o CPF/CNPJ é undefined', function() {
        var valor = KzCpfCnpjValidator.validate(new Control(undefined));
        expect(valor).toEqual({ 'cpfCnpj': true });
    });

});