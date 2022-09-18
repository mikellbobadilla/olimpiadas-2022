const { findByUsername } = require('../../db/user-querys')
const { decode } = require('../../util/pass')
const { createToken } = require('../../util/jwt')

const loginUser = async (req, res) => {
  const { username, password } = req.body
  const user = await findByUsername(username)
  if (user === null) {
    res.render('layout/form', {
      accion: '/users/login',
      error: true,
      error_message: 'Usuario y contraseña incorrecto',
      title: 'Registro',
      url: '/users/retgister',
      status: 'text-danger fw-bold',
      message: 'ya tenes cuenta? singin'
    })

  } else {
    if (username === user.username && decode(password, user.password)) {
      const token = createToken({
        id: user.id,
        name: user.username
      })
      res.cookie('Authorization', `bearer ${token}`)
      res
        .status(200)
        .redirect('/')
    } else {
      res.render('layout/form', {
        accion: '/users/login',
        error: true,
        error_message: 'Usuario y contraseña incorrecto',
        title: 'Registro',
        url: '/users/retgister',
        status: 'text-danger fw-bold',
        message: 'ya tenes cuenta? singin'
      })
    }
  }
}


const renderLogin = async (req, res) => {
  res.render('layout/form', {
    accion: '/users/login',
    error: false,
    error_message: '',
    title: 'Incicio de Sesion',
    url: '/users/register',
    message: 'no tenes cuenta? registrate'
  })
}

module.exports = {
  loginUser,
  renderLogin
}