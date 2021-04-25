const express = require('express')
const config = require('config')
const app = require('./src/app')
//const event = require('./public/javascript/events')

const port = process.env.PORT || config.get('rssparser.port')

app.listen(port, () => console.log(`server is running at ${port}`))





