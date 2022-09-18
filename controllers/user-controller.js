const {
  existByUsername,
  findByUsername
} = require('../db/user-querys')
const { User } = require('../models/user')
const {
  decode,
  encode
} = require('../util/pass')

const {
  createToken,
  extractJWT,
  getUserFromToken
} = require('../util/jwt')

const createUser = async (req, res) => {
  const { username, password } = req.body
  const hasUser = await existByUsername(username)
  if (!hasUser) {
    const hashed = encode(password)
    await User.create({
      username: username,
      password: hashed
    })
    res.status(200)
    res.redirect('/users/login')
  } else {
    res.redirect('/users/register')
  }
}

const deleteUser = async (req, res) => {
  const token = extractJWT(req)
  const user = getUserFromToken(token)
  const result = await User.destroy({
    where: {
      username: user.username
    }
  })
  console.log(result);
}

const updateUser = (req, res) => { }

const getUsers = async (req, res) => {
  const users = await User.findAll({
    attributes: ['username']
  })
  res.json(users)
}

const loginUser = async (req, res) => {
  const { username, password } = req.body
  const user = await findByUsername(username)
  if (user === null) {
    res
      .status(404)
      .redirect('/users/login')
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
      res
        .status(400)
        .redirect('/users/login')
    }
  }
}

const logoutUser = (req, res) => {
  res.clearCookie('Authorization')
  res.redirect('/users/login')
}

module.exports = {
  createUser,
  deleteUser,
  updateUser,
  getUsers,
  loginUser,
  logoutUser
}