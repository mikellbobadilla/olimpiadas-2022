const logoutUser = (req, res) => {
  res.clearCookie('Authorization')
  res.redirect('/users/login')
}

// add render to sending message to logout


module.exports = {
  logoutUser
}