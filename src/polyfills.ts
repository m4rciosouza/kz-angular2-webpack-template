/**
 * Arquivo responsável pela importação de recursos utilização para 
 * compatilibilidade entre navegadores.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import 'core-js/es6';
import 'core-js/es7/reflect';

require('zone.js/dist/zone');

if (process.env.ENV === 'production') {
  // Adicionar recursos utilizados em produção
} else {
  // Recursos utilizados em desenvolvimento
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}