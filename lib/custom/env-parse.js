/**
*@function module.exports
* env parser
*@param {array} $1 the lines of the file to parse
*@returns {array} array of declarations
*@package
*/
module.exports = function ($1 = [ 'NULL' ]){ 
  if ($1[0] === 'NULL'){
    return [null];
  }
  var $3 = Array(1e2).fill('__')
  for (let i = 0; i < $1.length; i++){
    if($1[i].startsWith('#')){
      $3[i] = '';
    }else{
      $3[i] = `declare -x ${$1[i]}\n`;
    }
  }
  $3.push("-END-")
  return $3
}