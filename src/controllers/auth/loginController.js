import { findUserByQuery } from '../../services/userService.js'
import { Createtoken } from '../../services/tokenService.js'
import bcrypt from 'bcrypt'
export const Login = async (req, res, next) => {
  try {
    const { Email, Password } = req.body
    const resdata = await findUserByQuery({ Email, Status: 'Active' })
    if (!resdata) {
      return res.send({ status: 'Invalid email or password' })
    }
    const verifypassword = await bcrypt.compare(Password, resdata.Password)
    if (verifypassword === true) {
      const token = Createtoken({ _id: resdata._id, Name: resdata.Name, Email: resdata.Email, Role: resdata.Role })
      res.send({ status: 'Success', token })
    } else {
      res.send({ status: 'Invalid email or password' })
    }
  } catch (err) {
    console.error(err)
  }
}
