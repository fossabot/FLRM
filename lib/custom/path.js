/*
 **just fancy!
 */
let root = __dirname;
const parse_env = require("./env-parse.js");
const { readFileSync } = require("fs");
const { getRemotePackages } = require("npm-node-utils");
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
      if (value === "-END-") {
        return true;
      } else eval(`require('child_process').ExecSync(${value})`);
      return;
    });
  };
  /**
  *@function __env.default()
  *@package
  */
  this.default = function() {
    var z = readFileSync(".env");
    var x = parse_env(z);
    x = x.forEach(value => {
      if (value === "-END-") {
        return true;
      } else eval(`require('child_process').ExecSync(${value})`);
      return;
    });
  };
}
//------------------------
var { exports } = module; //sets module exports, as it can get pretty ugly if not
exports = { env: __env };
