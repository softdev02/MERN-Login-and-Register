import express from 'express'
import apiRouter from './apiRoutes.js'
import usersRouter from './usersRoutes.js'
const router = express.Router()
router.use('/api', apiRouter)
router.use('/users', usersRouter)
export default router
