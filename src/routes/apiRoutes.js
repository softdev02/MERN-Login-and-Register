import express from 'express'
import { Login } from '../controllers/auth/loginController.js'
import { sendotp, registerUser } from '../controllers/auth/registerContoller.js'
const apiRouter = express.Router()
// login
apiRouter.post('/apilogin', Login)
// register
apiRouter.post('/apisendotp', sendotp)
apiRouter.put('/apiregister', registerUser)
export default apiRouter
