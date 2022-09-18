const { Router } = require('express')
const router = Router()

const { renderRegister, createUser } = require('../controllers/user-controller/create-user')
const { getUsers } = require('../controllers/user-controller/get-users')
const { renderLogin, loginUser } = require('../controllers/user-controller/login-user')
const { logoutUser } = require('../controllers/user-controller/logout-user')
const { hasAuthenticate } = require('../util/jwt')


router.get('/register', renderRegister)

router.post('/register', createUser)
// more crud comming

// ------------------------ Login --------------------------------------------
router.get('/login', renderLogin)


router.post('/login', loginUser)

router.get('/logout', logoutUser)

router.get('/all', hasAuthenticate, getUsers)



module.exports = router