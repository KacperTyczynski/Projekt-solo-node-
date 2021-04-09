const express = require('express')

const config = require('config')
const path = require('path')
const ejs = require('ejs')

// Łączność z bazą
const DB = require('./storage/db')
const db = new DB()
db.connect(config.db)


//Pobranie zewnętrznych modułów
const ErrorHandler = require('./utils/errorHandler')
const MailSender = require('./utils/mailSender')
const MailBuilder = require('./utils/mailbuilder')
const FeedParser = require('./utils/fp3')
const MailController = require('./controllers/MailController')
const RssController = require('./controllers/RssController')

const feedParser = new FeedParser()
const mailSender = new MailSender()
const mailBuilder = new MailBuilder()
const mailController = new MailController(db,feedParser,mailSender,mailBuilder)
const rssController = new RssController(db)

const app = express()
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(ErrorHandler.notFound)
app.use(ErrorHandler.catchErrors)


app.get('/',function(req,res){
    res.status(200).sendFile('/index.html')
})

app.get('/api/v1/rss', async (req,res) =>{
    try{
        let content = await rssController.retrive(req.query.mail)
        res.send(content)
    }catch (e) {
        console.error(e.message)
        res.sendStatus(500)
    }
})

app.post('/api/v1/rss', async (req,res) =>{
    try{
        await rssController.store(req.body)
        res.sendStatus(200)
    }catch (e){
        console.error(e.message)
        res.sendStatus(500)
    }
})


app.get('/api/v1/mail', async (req,res) => {
    try{
        const htmlContent = await mailController.build(req.query.email) 
        res.send(htmlContent)
    }catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
})

app.post('/api/v1/mail', async (req,res) => {
    try{
        await mailController.send(req.query.email)
        res.sendStatus(200)
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
})


module.exports = app
