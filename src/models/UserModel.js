import mongoose from 'mongoose'
import { conn } from '../config/db/db.js'

const Userschema = mongoose.Schema({
  Name: String,
  Email: String,
  Password: String,
  Role: { type: String, default: 'User' }, // define default register role based on application
  OTP: String,
  Status: { type: String, default: 'Inactive' }
})

const Users = conn.model('users', Userschema)
export { Users }
