/**
 * Arquivo responsável pela importação dos recursos utilizados na 
 * execução dos testes.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

Error.stackTraceLimit = Infinity;

require('core-js/es6');
require('reflect-metadata');

require('zone.js/dist/zone');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');

var appContext = require.context('../src', true, /\.spec\.ts/);

appContext.keys().forEach(appContext);

var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(browser.BrowserDynamicTestingModule, browser.platformBrowserDynamicTesting());