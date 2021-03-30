//Express
const express = require('express')
const app = express()

const path = require('path')
const router = express.Router()


//pokazanie że strona główna aplikacji ma połączenie z serwerem
//app.get('/', (req,res) => {
//    res.status(200).send('Hello World');
//});
app.use('/', router)
router.get('/',function(req,res){
    res.status(200).sendFile(path.join(__dirname+'/public/index.html'))
})


module.exports = app