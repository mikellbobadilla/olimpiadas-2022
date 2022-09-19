const { validate } = require("../../util/form")
const { Museo } = require('../../models/museo')

const renderFormMuseo = (req, res) => {
  res.render('layout/create-museo', {
    title_header: 'create',
    notification: false
  })
}

const createMuseo = async (req, res) => {
  const data = req.body

  if (validate(data)) {
    await Museo.create({
      nombre: data.nombre,
      direccion: data.direccion,
      telefono: data.telefono,
      email: data.email,
      descripcion: data.descripcion,
      horario: data.horario
    })
    res.render('layout/create-museo', {
      title_header: 'create',
      notification: true,
      status: 'text-center fw-bold text-success',
      noti_message: 'El museo se ha creado exitosamente!!'
    })
  } else {
    res.render('layout/create-museo', {
      title_header: 'create',
      notification: true,
      status: 'text-center fw-bold text-danger',
      noti_message: 'Todos los campos deben estar completos'
    })
  }
}

module.exports = {
  createMuseo,
  renderFormMuseo
}