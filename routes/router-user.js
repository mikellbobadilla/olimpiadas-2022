const { Router } = require('express')
const router = Router()

const {
  createUser,
  logoutUser,
  loginUser,
  deleteUser,
  getUsers
} = require('../controllers/user-controller')


router.get('/register', (req, res) => {
  res.render('register')
})
router.post('/register', createUser)
// more crud comming

// ------------------------ Login --------------------------------------------
router.get('/login', (req, res) => {
  res.render('login')
})
router.post('/login', loginUser)

router.get('/logout', logoutUser)

router.get('/all', getUsers)

router.delete('/delete', deleteUser)


module.exports = router