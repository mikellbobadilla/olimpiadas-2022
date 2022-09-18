const { User } = require('../models/user')

const existByUsername = async (username) => {
  const user = await User.findOne({
    where: {
      username: username
    }
  })
  if (user !== null) {
    return true
  }
  return false
}

const findByUsername = async (username) => {
  const user = await User.findOne({
    where: {
      username: username
    }
  })
  if (user !== null) {
    return user
  }
  return null
}


module.exports = {
  existByUsername,
  findByUsername
}