const jwt = require('jsonwebtoken')
const { jwt_secret } = require('../config/config')


// only use if the token exist, other wise the server died.
const extractJWT = (req) => {
  const bearer = req.cookies.Authorization
  const token = bearer.split(' ')[1]
  return token
}

const createToken = (user) => {
  const token = jwt.sign(user, jwt_secret,
    {
      algorithm: 'HS256',
      expiresIn: '2 days'
    }
  )
  return token
}

const verifyToken = (token) => {
  try {
    const decocded = jwt.verify(token, jwt_secret)
    if (decocded === undefined) {
      return false
    }
    return true
  } catch (err) {
    console.error(err.message)
  }
}

const getUserFromToken = (token) => {
  try {
    const decocded = jwt.verify(token, jwt_secret)
    if (decocded === undefined) {
      return null
    }
    return decocded
  } catch (err) {
    console.error(err.message)
  }
}


// protect the endpoints
const hasAuthenticate = (req, res, next) => {
  const token = req.cookies.Authorization
  if (token === undefined) {
    res
      .status(401)
      .redirect('/users/login')
  } else {
    const result = extractJWT(req)
    if (verifyToken(result)) {
      next()
    } else {
      res
        .status(401)
        .redirect('/users/login')
    }
  }


}


module.exports = {
  createToken,
  verifyToken,
  extractJWT,
  hasAuthenticate,
  getUserFromToken
}