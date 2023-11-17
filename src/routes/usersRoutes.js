import express from 'express'
import { getallUsers } from '../controllers/users/userController.js'
import authMiddleware from '../middlewares/authMiddleware.js'
const usersRouter = express.Router()
//
usersRouter.get('/apigetallusers', authMiddleware(['User', 'Admin']), getallUsers)
export default usersRouter
