const fs = require('fs')
const config = require('./config')
const images = []

module.exports = {
    indexImages: function () {
        indexImages()
    },
    getRandomImage: function () {
        return getRandomImage()
    },
    count: function () {
        return images.length
    }
}

function indexImages() {
    config.load()

    let dir = config.getConfig()['imageDir'];
    let files = fs.readdirSync(dir)
    files.forEach(value => images.push(dir + '\\' + value))
}

function getRandomImage() {
    return fs.createReadStream(images[rnd(0, images.length)])
}

function rnd(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}