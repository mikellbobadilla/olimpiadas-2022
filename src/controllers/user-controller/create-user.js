const { existByUsername } = require('../../db/user-querys')
const { encode } = require('../../util/pass')
const { User } = require('../../models/user')

const createUser = async (req, res) => {
  const { username, password } = req.body
  const hasUser = await existByUsername(username)
  if (!hasUser) {
    const hashed = encode(password)
    await User.create({
      username: username,
      password: hashed
    })
    res.render('layout/form', {
      accion: '/users/login',
      error: true,
      error_message: 'User Created',
      title: 'Inicio de session',
      url: '/users/register',
      status: 'fw-bold text-success',
      message: 'no tenes cuenta? registrate'
    })
  } else {
    res.render('layout/form', {
      accion: '/users/register',
      error: true,
      error_message: 'User exists',
      title: 'Registro',
      url: '/users/login',
      status: 'text-danger fw-bold',
      message: 'ya tenes cuenta? singin'
    })
  }
}

const renderRegister = (req, res) => {
  res.render('layout/form', {
    accion: '/users/register',
    error: false,
    error_message: '',
    title: 'Pagina de Resgistro',
    url: '/users/login',
    message: 'ya tenes cuenta? singin'
  })
}

module.exports = {
  createUser,
  renderRegister
}