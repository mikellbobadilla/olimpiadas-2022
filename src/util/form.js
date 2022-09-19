const validate = (object) => {
  for (const [key, value] of Object.entries(object)) {
    if (value.length === 0) {
      return false
    }
  }
  return true
}

module.exports = {
  validate
}