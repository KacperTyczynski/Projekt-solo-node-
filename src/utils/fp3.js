const Parser = require('rss-parser')
let parser = new Parser();

class Feedparser {
    constructor() {

    }

    async feedparser(urls) {
        let urls = Array.isArray(url) ? url: [url]
        const promieses = []

        for (let url of urls) {
            promieses.push(parser.parseUrl(url))
        }

        return Promise.all(promieses)        
        }

        
    async feedparserXML(url) {
        let urls = Array.isArray(url) ? url: [url]
        const promieses = []

        for (let url of urls) {
            promieses.push(parser.parseString(url))
        }

        return Promise.all(promieses)        
    }
}

const elo = new Feedparser()
const urls = ['https://www.reddit.com/.rss', 'http://blogs.nasa.gov/stationreport/feed/']
//const urls =  'https://www.reddit.com/.rss'
elo.feedparser(urls)

module.exports = Feedparser

