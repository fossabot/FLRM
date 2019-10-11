var sfload = require("js-yaml").safeLoad;
/**
 *@function translator
 *@param {string} file to translate
 * each jtech package will have this to translate jtech js files
 *@package
 */
function set_input(code) {}
function translator(input) {
  var x = "";
  require("fs").readFile(input, function(e, d) {
    if (e) throw e;
    else x = d.toString();
  });
  x.split("IF_NULL[");
  x.join("if(");
  x.split("]>>");
  x.join("){");
  x.split("<<[]");
  x.join("}");
  x.split("[**");
  x.join("(");
  x.split("**[]");
  x.join(")");
  x.split("]<<");
  x.join("[");
  x.split(">>[]");
  x.join("]");
  x.split("{\n");
  x.join('{"IF-STATEMENT"; ');
  x.split("NULL_EXIT");
  x.join("process.exit");
  return x;
}
module.exports = translator;
