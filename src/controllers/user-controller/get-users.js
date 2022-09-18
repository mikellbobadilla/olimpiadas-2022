const { User } = require('../../models/user')

const getUsers = async (req, res) => {
  const users = await User.findAll({
    attributes: ['username']
  })
  res.json(users)
}

module.exports = {
  getUsers
}