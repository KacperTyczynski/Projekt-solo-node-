//const express = require('express')
//const app = express()
//app.get('/', (req, res) => {
//    res.status(200).send("Hello World!!!!!!")
//});

//app.listen(8080, () => console.log(`server is running at 8080`))

//app.get('/ja', (req,res) => {
//    res.status(200).send('Hi Kacper')
//})




//const port = process.env.PORT || config.get('port')
//app.listen(port, () => console.log(`server is running at ${port}`))  Na AZURE

const config = require('config')
const app = require('./src/app')

const port = process.env.PORT || config.get('port')

app.listen(port, () => console.log(`server is running at ${port}`))





