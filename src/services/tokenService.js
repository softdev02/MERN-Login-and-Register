import jwt from 'jsonwebtoken'
const Createtoken = (data) => {
  const token = jwt.sign(data, process.env.TOKENSECRET)
  return token
}

export { Createtoken }
