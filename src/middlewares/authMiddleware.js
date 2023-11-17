import jwt from 'jsonwebtoken'
const { verify } = jwt

const authMiddleware = (roles) => (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    if (authHeader) {
      const token = authHeader.split(' ')[1]
      verify(token, process.env.TOKENSECRET, (err, user) => {
        if (err) {
          return res.sendStatus(403)
        }

        req.user = user
        if (roles.includes(user.Role)) {
          next()
        } else {
          return res.sendStatus(403)
        }
      })
    } else {
      res.send('authentication to access')
    }
  } catch (err) {
    console.log(err)
  }
}
export default authMiddleware
