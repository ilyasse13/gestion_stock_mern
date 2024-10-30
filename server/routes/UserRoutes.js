import express from 'express'
import { addUser, changeUserType, deleteUser, fetchUsers, updateUserSelf } from '../controllers/UserController.js'

const UserRoutes = express.Router()

UserRoutes.get('/users/:stock_id',fetchUsers);
UserRoutes.post('/addUser',addUser);
UserRoutes.put('/updateUser/:userId',updateUserSelf);
UserRoutes.put('/changeType',changeUserType)
UserRoutes.delete('/deleteUser',deleteUser)

export default UserRoutes;