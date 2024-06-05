import { Router } from "express";

import appDataSource from "../infra/data-source";
import { User } from "../infra/entities/user.entity";
import UserService from "../services/user.service";
import UserController from "../controller/user.controller";

const userRouter = Router()

const service = new UserService(appDataSource.getRepository(User))
const controller = new UserController(service)

userRouter.post('/create', async (req, res) => {
    await controller.createUserController(req, res)
})

userRouter.post('/login', async (req, res) => {
    await controller.loginController(req, res)
})

export default userRouter