const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const jwt = require('jsonwebtoken')

// Mapping Routes


const app = express()

app.use(cors())
app.use(logger('dev'))

// return middleware parsed and only looks the request where the "Content-Type"
// at the req.header matches the type option
app.use(express.urlencoded({ extended: false })) 
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public'))) // Views html...