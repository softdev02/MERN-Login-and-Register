import { findUserByQuery, findallUserByQuery } from '../../services/userService.js'

const getallUsers = async (req, res, next) => {
  try {
    const checkrole = await findUserByQuery({ Email: req.user.Email })
    if (checkrole) {
      const resdata = await findallUserByQuery(checkrole.Role === 'Admin' ? { } : { Email: req.user.Email })
      res.send(resdata)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    console.error(err)
  }
}
export { getallUsers }
