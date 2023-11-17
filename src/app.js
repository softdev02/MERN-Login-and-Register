import express from 'express'
import compression from 'compression'
import morgan from 'morgan'
import cors from 'cors'
import router from './routes/index.js'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(compression())
app.use('/uploads', express.static('uploads'))
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}))
app.use('/', router)
app.get('/app', (req, res) => res.send('Welcome to EMS APP'))
export default app
