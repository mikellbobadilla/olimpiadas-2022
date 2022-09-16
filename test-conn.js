const express = require('express')
require('dotenv').config()
const { sequelize } = require('./db/sequelize')
const app = express()
const PORT = process.env.PORT || 3000

const { Museo } = require('./models/museo')

app.use(express.json())

app.get('/', async (req, res) => {
  res.send('Hola Mundo')
  await sequelize.sync({ force: true })
  console.log('connected');
  const museo = await Museo.create({
    nombre: "juanita",
    ubicacion: "avenida oceano",
    descripcion: "museo para hacer la meme",
    customer_name: "lola"
  })
  console.log(museo.toJSON())
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
})