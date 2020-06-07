const fs = require('fs')
let _cfg;

module.exports = {
    load: function () {
        _cfg = JSON.parse(fs.readFileSync('config.json', 'utf8'))
    },
    getConfig: function () {
        return _cfg
    },
    cfg: _cfg
}