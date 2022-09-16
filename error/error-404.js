 exports.notFound = (req, res, next) => {
  let error = new Error()
  const err = {
    title: 'ERROR 404 NOT FOUND',
    description: 'Resources not found',
    error
  }
  error.status = 404
  res.render('error')
  next()
}