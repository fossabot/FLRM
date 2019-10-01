var { resolve, parse } = require("path");
var { table } = require("table");
var ora = require("ora");
var { prompt, registerPrompt } = require("inquirer");
registerPrompt("dir", require("inquirer-directory"));
var nodep = require("no-deprecation");
var exe = require("fs").exists;
var exists = nodep(exe);
var uuidv4 = require("uuid/v4");
/**
* Modulator for the plugin modification
*@param {array} kwargs the argument array
*@example FLRM.modulator([null,["plugin code goes into the array here"], true])

*/
module.exports.modulator = kwargs => {
  if (Array_0_null(kwargs) === true)
    var dg8 = ora(
      `[${resolve(__filename)}]\ttesting for plugin function in package`
    ).start();
  var cont = true;
  if ((cont = true)) {
    var plugin = Array(1e5).fill(undefined);
    for (let i = 0; i < kwargs[1].size; i++) {
      if (kwargs[1][i].contains("module.exports")) {
        kwargs[1][i].replace("module.exports", "exports");
        plugin[i] = kwargs[1][i];
      }
      var $1 = kwargs[1];
      if ($1[i].contains("function plugin_enabled")) {
        plugin[i] = "var NULL_92856 () => {";
      }
      if ($1[i].contains("")) {
        $1[i].replace("", "");
      }
    }
  }
};

/**
 *@function  Array_0_null
 *@returns {boolean} true
 *@param {any} input should be null
 *@throws {Error} stacked Error
 */
function Array_0_null(input) {
  if (input[0] !== null) {
    throw new Error(input[(0, 1)] + "\n ^\nshould be null").stack;
  } else {
    return true;
  }
}
/**
 *@package
 *@param {array} input the input -- available throughout the package, nowhere else as stated
 */
module.exports.Array_checkr = Array_0_null;

global.entry = {
  hx: function(d) {
    this.hex = function() {
      return d.toString("hex");
    };
    this.base64 = function() {
      return d.toString("base64");
    };
    this.bclh = function() {
      this.nospace = d.split(" ").join("");
      return this.nospace.length;
    };
    /**
     *@function export-env
     *@package
     * reminder that this can cause issues with server connection for online hosts like the following:
     * https://www.glitch.com
     * https://codesandbox.io
     * https://repl.it
     *
     * this will be changed with 2 seperate uuid's when a proper way to do so is made
     * the uuid sources for each domain will be listed when the plugin manager is absolutely COMPLETE
     */
  },
  export_env() {
    console.warn(
      `[${resolve(
        __filename
      )}]: installing global enviroment variables, these variables can possibly overwrite online code editor service envs`
    );
    process.env.forge_uuid = uuidv4(process.env.NODE_PATH);
  }
};
/**
*@function download-global-plugins
*@returns null
*@example require('forge-remote-manager').download_global_plugins() //sets default data, and exports all file paths
* the download global plugins function does not actually download all plugins that FLRM is compatible with, it just sets the defaults and paths to all files the plugin is used in 
* the defaults are set as listed and are set in the exact order listed:
* forge_uuid
* plugin_list_uuid *
* tarball_ignore *
* tarball_uuid *
* plugin_path *
*
* what each env specifies:
*
* forge_uuid:
*  the uuid customized to be used in your project
*
* plugin_list_uuid:
*  the uuid based on the plugins installed
*
* tarball_ignore:
*  tarball path to move the tarball to for deletion
*
* tarball_uuid:
*  the uuid based on the tarball ignore path, your forge uuid, and your plugin list uuid
*
* plugin_path:
*  the path to all of your plugin folders in node_modules, will be specified when it is set 
*
* * env not yet implemented due to no need at the moment
*/
module.exports.download_global_plugins = function() {
  global.entry.export_env();
};