const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
require('dotenv').config()
const { jwt_secret } = require('./config/config')

const PORT = process.env.PORT || 3000

// Mapping Routes
const login = require('./routes/login')

const app = express()

app.set('view engine', 'ejs')
app.use(cors())
app.use(logger('dev'))

// return middleware parsed and only looks the request where the "Content-Type"
// at the req.header matches the type option
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public'))) // Views html...
app.set()

app.get('/', (req, res) => {
  res.render('index')
  const token = req.cookies.Authorization
  const has = token.split(' ')
  console.log(has[1])
})

app.use('/', login)


app.listen(PORT, () => {
  console.log(`Server listening on http://localhost${PORT}`);
})