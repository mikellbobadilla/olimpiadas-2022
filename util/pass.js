const bcrypt = require('bcrypt')

const encode = (password) => {
  const hashed = bcrypt.hashSync(password, 10)
  return hashed
}

const decode = (password, passEncoded) => {
  const decoded = bcrypt.compareSync(password, passEncoded)
  return decoded
}

module.exports = {
  encode,
  decode
}