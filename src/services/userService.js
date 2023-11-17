import { Users } from '../models/UserModel.js'

const findUserByQuery = async (query, projection) => {
  return await Users.findOne(query, projection ?? {}).lean()
}
const findallUserByQuery = async (query, projection) => {
  return await Users.find(query, projection ?? {})
}
const newUser = async (data) => {
  const resuser = await new Users(data).save()
  return resuser
}
const saveOrUpdateUser = async (data) => {
  const checkUser = await findUserByQuery({ Email: data.Email })

  if (checkUser === null) {
    const newUser = await new Users(data).save()
    return newUser
  } else {
    return await Users.findOneAndUpdate({ _id: checkUser._id }, data)
  }
}
const findOneupdate = async (query, data) => {
  return await Users.findOneAndUpdate(query, data)
}
export { newUser, findallUserByQuery, findUserByQuery, saveOrUpdateUser, findOneupdate }
