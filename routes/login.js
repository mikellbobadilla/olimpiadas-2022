const { Router } = require('express')
const router = Router()
const jwt = require('jsonwebtoken')
const { jwt_secret } = require('../config/config')


const createToken = (user) => {
  const token = jwt.sign(user, jwt_secret, { algorithm: 'HS256' })
  return token
}

// const validateToken = (req, res, next) => {
//   const auth = req.headers['Authorization']

// }

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res) => {
  // aqui tiene que iniciar el proceso de autenticacion
  console.log(req.body.username)
  console.log(req.body.password)
  const user = {
    id: 1,
    name: req.body.username
  }
  const token  = createToken(user)
  res.cookie('Authorization', `bearer ${token}`)
  res.send('listo')
})

module.exports = router