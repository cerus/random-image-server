const _config = require('./config')
const imgLoader = require('./imageLoader')
const http = require('http')

_config.load()
const config = _config.getConfig();

imgLoader.indexImages();

const server = http.createServer((req, res) => {
    imgLoader.getRandomImage().pipe(res)
})
server.listen(config['port'])

console.log('Loaded ' + imgLoader.count() + ' images')
console.log('Server is listening to port ' + config['port'])