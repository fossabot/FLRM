/*
 **just fancy!
 */
let root = __dirname;
const parse_env = require("./env-parse.js");
const { readFileSync } = require("fs");
/**
 *@function __env
 *@package
 */
function __env() {
  /**
   *@function __env.custom
   *@package
   */
  this.custom = function(path) {
    var z = readFileSync(path);
    var x = parse_env(z);
    x = x.forEach(value => {
      if (value !== "") {
        return value;
      } else return;
    });
  };
}
