const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const {
  hasAuthenticate
} = require('./src/util/jwt')

const PORT = process.env.PORT || 3000

// Mapping Routes
const user = require('./src/routes/router-user')

// instances
const app = express()

// dev log
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.use(cors())

// return middleware parsed and only looks the request where the "Content-Type"
// at the req.header matches the type option
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/', hasAuthenticate, (req, res) => {
  res.render('index')
})

app.use('/users', user)

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost${PORT}`);
})