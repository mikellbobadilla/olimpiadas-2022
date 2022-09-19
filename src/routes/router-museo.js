const { Router } = require('express')
const router = Router()
const { createMuseo, renderFormMuseo } = require('../controllers/museo-controller/create-museo')

const { Museo } = require('../models/museo')
const { hasAuthenticate } = require('../util/jwt')

router.get('/all', hasAuthenticate, async (req, res) => {
  const museos = await Museo.findAll()
  res.render('layout/museo', {
    title_header: 'museos',
    title: 'Lista de museos',
    users: museos
  })
})

router.get('/create', hasAuthenticate, renderFormMuseo)

router.post('/create', hasAuthenticate, createMuseo)


module.exports = router