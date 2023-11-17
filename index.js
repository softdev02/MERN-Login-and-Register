import app from './src/app.js'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 1004
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
