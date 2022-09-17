const { Router } = require('express')
const router = Router()


router.get('/register', (req, res) => {
  res.render('register')
})


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
  const token = createToken(user)
  res.cookie('Authorization', `bearer ${token}`)
  res.send('listo')
})

module.exports = router