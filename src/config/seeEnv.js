require('dotenv').config()
const envs = [
  process.env.JWT_SECRET,
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  process.env.HOST
]

envs.forEach((env) => console.log(env))