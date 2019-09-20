const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const allowCrossDomain = require('./core/allow_cross_domain')
const router = require('./core/router')
const config = require('./core/config')

app.use(express.static('static', { extensions: config.extensions }))
app.use(allowCrossDomain)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
