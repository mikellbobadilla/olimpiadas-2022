const { sequelize } = require('../db/sequelize')

const connect = async () => {
  try {
    await sequelize.sync({ force: false })
    console.log('Connected');
    return true
  } catch (err) {
    console.error(err)
    return false
  }
}

const close = async () => {
  try {
    await sequelize.close()
    console.log('Connection to DB closed');
    return true
  } catch (err) {
    console.error(`Can't disconnect to DB`);
    return false
  }
}

module.exports = {
  connect,
  close
}

