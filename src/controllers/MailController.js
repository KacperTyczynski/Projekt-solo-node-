const config = require('config')

class MailController {
    constructor(db,feedParser,mailSender,mailBuilder){
        this.db = db
        this.feedparser = feedParser
        this.mailSender = mailSender
        this.mailBuilder = mailBuilder
    }

    async build(mail){
        const urls = await this.db.find(config.name, mail)
        const feeds =  await this.feedparser.parse(urls.rss)
        const content = await this.mailBuilder(feeds)
        return content.html
    }

    async send(email,content){
        if (!email) {
            throw new Error('wpisz email')
        }
        
        return this.mailSender.send(email, content)
    }    
}

module.exports = MailController

