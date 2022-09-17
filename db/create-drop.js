const { sequelize } = require('./sequelize')

const { Museo } = require('../models/museo')
const { User } = require('../models/user')
const { Articulo } = require('../models/articulo')
const { ArticuloGaleria } = require('../models/articulo_galeria')
const { Horario } = require('../models/horarios')
const { Galeria } = require('../models/galeria')


sequelize.sync({ force: true })
    .then(() => { console.log('Connected') })
    .catch(err => { console.error(err) })
// sequelize.authenticate()
//    .then(() => console.log('connected'))
//    .catch(err => console.log('wrong\n' + err))