/**
 * Arquivo utilitário de paths e diretórios.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

var path = require('path');
var _root = path.resolve(__dirname, '..');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

exports.root = root;