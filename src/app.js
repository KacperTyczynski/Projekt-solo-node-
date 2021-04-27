const express = require('express')
const config = require('config')
const path = require('path')

// Łączność z bazą
const DB = require('./storage/db')
const db = new DB()
db.connect(config.rssparser.db)

//Pobranie zewnętrznych modułów
// const ErrorHandler = require('./utils/errorHandler')
const MailSender = require('./utils/mailSender')
const MailBuilder = require('./utils/mailbuilder')
const FeedParser = require('./utils/fp3')

const MailController = require('./controllers/MailController')
const RssController = require('./controllers/RssController')

const mailgunConfig = config.get('rssparser.mailgun')


const feedParser = new FeedParser()
const mailSender = new MailSender()
const mailBuilder = new MailBuilder()
const mailController = new MailController(db,feedParser,mailSender,mailBuilder)
const rssController = new RssController(db)

const app = express()
// app.use(ErrorHandler.notFound)
// app.use(ErrorHandler.catchErrors)

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.post('/send', async (req,res) => {
    try {
        console.log(req.body)
        res.status(200).end()
    } catch (e) {
        res.status(400).send(e.message)
    }
})

app.get('/send', async (req,res) => {
    try {
        const user = await RssController.retrive('')
        res.send(JSON.stringify({ email: user.email, rss: user.rss }))
    } catch (e) {
        res.status(400).send(e.message)
    }
})



// app.get('/api/v1/mail', async (req,res) => {
//     try{
//         const htmlContent = await mailController.build(req.query.email) 
//         res.set('Content-Type', 'text/html').send(htmlContent.html)
//     }catch (e) {
//         console.log(e)
//         res.sendStatus(500)
//     }
// })

// app.post('/api/v1/mail', async (req,res) => {
//     try{
//         const htmlContent =  await mailController.build(req.query.email)
//         await mailController.send(req.query.email, htmlContent.html)
//         res.status(200).end()
//     } catch (e) {
//         console.log(e)
//         res.sendStatus(500)
//     }
// })


module.exports = app
