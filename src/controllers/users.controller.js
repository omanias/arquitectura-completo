import User from '../dao/classes/user.dao.js'

const usersService = new User()

export const getUsers = async (req, res) => {
    let result = await usersService.getUsers()
    res.send({ status: "success", result })
}

export const getUserById = async (req, res) => {
    const { uid } = req.params
    let user = await usersService.getUserById(uid)
    res.send({ status: "success", result: user })
}

export const saveUser = async (req, res) => {
    const user = req.body
    let result = await usersService.saveUser(user)
    res.send({ status: "success", result })
}