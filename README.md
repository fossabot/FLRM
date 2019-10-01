# Forge-Lance-Remote-Manager

---

## the nodejs package to connect to absolutly anything extended or produced by jtech

the Forge Lance Remote Manager (FLRM) is a multipurpose dynamic library that connects to all products/plugins produced by jtech, allowing remote configuring without all the sloppy work the plugins make

note, all examples are not the wanted result, and the examples will change over time

here is an example of our **IN BETA** webpack plugin using FLRM, note this will not work until the plugin is released:

package.json:

```json
{
  "dependencies": {
    "jtech-webpack-plugin": "2.x",
    "forge-remote-manager": "5.x",
    "webpack": "*",
    "webpack-cli": "*"
  },
  "scripts": {
    "build": "node forge-remote -y cli_installation.js",
    "start": "node index.js"
  }
}
```

webpack.production.js:

```js
module.exports.plugins = [ require("jtech-webpack-plugin") ]
module.exports.other = {
  entry:<path to entry file(s)>,
  output:"dist||[name].js"
}
```

index.js:

```js
//must be on top
function plugin_enabled() {}
```

cli_installation.js:

```js
require('forge-remote-manager').syncPlugin('webpack').CliInstalled(true).config({ production:'webpack.production.js', dev:'webpack.dev.js', srvr:false })"
```
