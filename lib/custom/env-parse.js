/**
*@function module.exports
*@package
* env parser
*@param {array} $1 the lines of the file to parse
*@returns {array} array of declarations
*/
module.exports = function ($1 = [ 'NULL' ]){ 
  if ($1[0] === 'NULL'){
    return [null];
  }
  var $3 = Array.fill(1e2)
  for (let i = 0; i < $1.length; i++){
    if($1[i].startsWith('#')){
      $3[i] = '';
    }else{
      $3[i] = `declare -x ${$1[i]}\n`;
    }
  }
  return $3
}