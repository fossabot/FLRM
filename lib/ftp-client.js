var { verbose } = require("sqlite3"),
    { Database } = verbose,
    __DAT = new Database(),
    { run, serialize } = __DAT,
    __dat_run = run,
    __dat_ser = serialize,
    run = undefined, //deletes variable
    serialize = undefined;
//------------------------
var debug = require('debug');