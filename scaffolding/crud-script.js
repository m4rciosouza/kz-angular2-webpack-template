/**
 * Script de scaffoldind de CRUD.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

var prompt = require('prompt');
var copydir = require('copy-dir');
var fs = require('fs');
var replace = require('replace-in-file');
var path = require('path');

var modulo;
var moduloCap;
var moduloCapPlural;
var moduloPlural;

function capitalize(texto, sufixo) {
	sufixo = sufixo || '';
	var arrTexto = texto.split('-');
	var textoCap = '';

	for (var i=0; i<arrTexto.length; i++) {
		textoCap += arrTexto[i].charAt(0).toUpperCase() + 
			arrTexto[i].slice(1) + sufixo;
	}

    return textoCap;
}

// Obtém o nome do módulo CRUD a ser criado
var schema = {
    properties: {
      modulo: {
        pattern: /^[a-z\s\-]+$/,
        message: 'Módulo deve conter somente caracteres de a-z',
        required: true
      }
    }
};

prompt.start();
console.log('############################################################');
console.log('##                                                        ##');
console.log('##            #  # ####   #### ###  #  # ###              ##');
console.log('##            # #    #    #    #  # #  # #   #            ##');
console.log('##            ##    #  ## #    ###  #  # #   #            ##');
console.log('##            # #  #      #    # #  #  # #   #            ##');
console.log('##            #  # ####   #### #  # #### ###              ##');
console.log('##                                                        ##');
console.log('##    Seja bem vindo ao gerador de CRUD da Kazale.com     ##');
console.log('############################################################');
console.log('');
console.log('Digite o nome do módulo a ser criado (ex.: pessoa):');


prompt.get(schema, function (err, input) {
	modulo = input.modulo;
	moduloPlural = modulo + 's';
	moduloCap = capitalize(modulo);
	moduloCapPlural = capitalize(modulo, 's');

	console.log('Copiando os arquivos...');
	var pathOrigem = path.join(__dirname,'source');
	var pathDestino = pathOrigem.replace(path.join('scaffolding/source'), 
		path.join('src/app/' + modulo));
	//copia os arquivos para o projeto
	copydir.sync(pathOrigem, pathDestino);
	//renomeia os arquivos
	fs.renameSync(path.join(pathDestino, '/usuario-routing.module.ts'), 
		path.join(pathDestino, modulo + '-routing.module.ts'));
	fs.renameSync(path.join(pathDestino, '/usuario.module.ts'), 
		path.join(pathDestino, modulo + '.module.ts'));
	//cadastrar
	fs.renameSync(path.join(pathDestino, '/cadastrar/usuario-cadastrar.component.css'), 
		path.join(pathDestino, '/cadastrar/' + modulo + '-cadastrar.component.css'));
	fs.renameSync(path.join(pathDestino, '/cadastrar/usuario-cadastrar.component.html'), 
		path.join(pathDestino, '/cadastrar/' + modulo + '-cadastrar.component.html'));
	fs.renameSync(path.join(pathDestino, '/cadastrar/usuario-cadastrar.component.ts'), 
		path.join(pathDestino, '/cadastrar/' + modulo + '-cadastrar.component.ts'));
	fs.renameSync(path.join(pathDestino, '/cadastrar/usuario-cadastrar.component.spec.ts'), 
		path.join(pathDestino, '/cadastrar/' + modulo + '-cadastrar.component.spec.ts'));
	//editar
	fs.renameSync(path.join(pathDestino, '/editar/usuario-editar.component.css'), 
		path.join(pathDestino, '/editar/' + modulo + '-editar.component.css'));
	fs.renameSync(path.join(pathDestino, '/editar/usuario-editar.component.html'), 
		path.join(pathDestino, '/editar/' + modulo + '-editar.component.html'));
	fs.renameSync(path.join(pathDestino, '/editar/usuario-editar.component.ts'), 
		path.join(pathDestino, '/editar/' + modulo + '-editar.component.ts'));
	fs.renameSync(path.join(pathDestino, '/editar/usuario-editar.component.spec.ts'), 
		path.join(pathDestino, '/editar/' + modulo + '-editar.component.spec.ts'));
	//listar
	fs.renameSync(path.join(pathDestino, '/listar/usuario-listar.component.css'), 
		path.join(pathDestino, '/listar/' + modulo + '-listar.component.css'));
	fs.renameSync(path.join(pathDestino, '/listar/usuario-listar.component.html'), 
		path.join(pathDestino, '/listar/' + modulo + '-listar.component.html'));
	fs.renameSync(path.join(pathDestino, '/listar/usuario-listar.component.ts'), 
		path.join(pathDestino, '/listar/' + modulo + '-listar.component.ts'));
	fs.renameSync(path.join(pathDestino, '/listar/usuario-listar.component.spec.ts'), 
		path.join(pathDestino, '/listar/' + modulo + '-listar.component.spec.ts'));
	//visualizar
	fs.renameSync(path.join(pathDestino, '/visualizar/usuario-visualizar.component.css'), 
		path.join(pathDestino, '/visualizar/' + modulo + '-visualizar.component.css'));
	fs.renameSync(path.join(pathDestino, '/visualizar/usuario-visualizar.component.html'), 
		path.join(pathDestino, '/visualizar/' + modulo + '-visualizar.component.html'));
	fs.renameSync(path.join(pathDestino, '/visualizar/usuario-visualizar.component.ts'), 
		path.join(pathDestino, '/visualizar/' + modulo + '-visualizar.component.ts'));
	fs.renameSync(path.join(pathDestino, '/visualizar/usuario-visualizar.component.spec.ts'), 
		path.join(pathDestino, '/visualizar/' + modulo + '-visualizar.component.spec.ts'));
	//shared
	fs.renameSync(path.join(pathDestino, '/shared/usuario.model.ts'), 
		path.join(pathDestino, '/shared/' + modulo + '.model.ts'));
	fs.renameSync(path.join(pathDestino, '/shared/usuario.service.ts'), 
		path.join(pathDestino, '/shared/' + modulo + '.service.ts'));
	fs.renameSync(path.join(pathDestino, '/shared/usuario.service.spec.ts'), 
		path.join(pathDestino, '/shared/' + modulo + '.service.spec.ts'));

	//replace
	var arqModificados = '';

	// #MODULO_CAP_PLURAL#
	var optModuloCapPlural = {
	  files: [
	  	pathDestino + '/*.ts',
	  	pathDestino + '/**/*.ts',
	  	pathDestino + '/**/*.html'
	  ],
	  replace: /#MODULO_CAP_PLURAL#/g,
	  with: moduloCapPlural
	};

	try {
	  arqModificados = replace.sync(optModuloCapPlural);
	}
	catch (error) {
	  console.error('Erro:', error);
	}

	// #MODULO_PLURAL#
	var optModuloPlural = {
	  files: [
	  	pathDestino + '/*.ts',
	  	pathDestino + '/**/*.ts',
	  	pathDestino + '/**/*.html'
	  ],
	  replace: /#MODULO_PLURAL#/g,
	  with: moduloPlural
	};

	try {
	  arqModificados = replace.sync(optModuloPlural);
	}
	catch (error) {
	  console.error('Erro:', error);
	}

	// #MODULO_CAP#
	var optModuloCap = {
	  files: [
	  	pathDestino + '/*.ts',
	  	pathDestino + '/**/*.ts',
	  	pathDestino + '/**/*.html'
	  ],
	  replace: /#MODULO_CAP#/g,
	  with: moduloCap
	};

	try {
	  arqModificados = replace.sync(optModuloCap);
	}
	catch (error) {
	  console.error('Erro:', error);
	}

	// #MODULO#
	var optModulo = {
	  files: [
	  	pathDestino + '/*.ts',
	  	pathDestino + '/**/*.ts',
	  	pathDestino + '/**/*.html'
	  ],
	  replace: /#MODULO#/g,
	  with: modulo
	};

	try {
	  arqModificados = replace.sync(optModulo);
	  //console.log('Arquivos modificados:', arqModificados.join(', '));
	}
	catch (error) {
	  console.error('Erro:', error);
	}

	// /*#
	var optComentarioIni = {
	  files: [
	  	pathDestino + '/*.ts',
	  	pathDestino + '/**/*.ts'
	  ],
	  replace: /\/\*#/g,
	  with: ''
	};

	try {
	  arqModificados = replace.sync(optComentarioIni);
	  //console.log('Arquivos modificados:', arqModificados.join(', '));
	}
	catch (error) {
	  console.error('Erro:', error);
	}

	// #*/
	var optComentarioFim = {
	  files: [
	  	pathDestino + '/*.ts',
	  	pathDestino + '/**/*.ts'
	  ],
	  replace: /#\*\//g,
	  with: ''
	};

	try {
	  arqModificados = replace.sync(optComentarioFim);
	}
	catch (error) {
	  console.error('Erro:', error);
	}

	console.log('############################################################');
	console.log('## CRUD ' + modulo + ' criado com sucesso!!!');
	console.log('## Execute as operações abaixo para registrar o novo módulo na aplicação:');
	console.log('#');
	console.log('## Adicione as seguintes linhas no arquivo src/app/app-routing.module.ts');
	console.log('#   import { ' + moduloCap + 'Routes } from \'./' + modulo + '\';');
	console.log('#   ...' + moduloCap + 'Routes');
	console.log('#');
	console.log('## Importe o módulo no arquivo src/app/app.module.ts');
	console.log('#   import { ' + moduloCap + 'Module } from \'./' + modulo + '\';');
	console.log('#   ' + moduloCap + 'Module' + ' (em @NgModule({ imports: [] })');
	console.log('#');
	console.log('## Acesse o CRUD em: http://localhost:8080/' + moduloPlural);
	console.log('############################################################');
	console.log('');
});
// Fim prompt para obter o nome do módulo