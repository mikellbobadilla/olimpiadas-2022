const jwt = require('jsonwebtoken')
const { jwt_secret } = require('../config/config')

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
    return decocded
  }catch(err){
    console.error(err.message)
  }
}

// protect the endpoints
const hasAuthenticate = (req, res, next) => {

}


module.exports = {
  createToken,
  verifyToken
}