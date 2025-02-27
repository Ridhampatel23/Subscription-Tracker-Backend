import { Router } from 'express';
import {getUserById, getUsers} from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id',authorize, getUserById);
userRouter.post('/', (req, res) => res.send({title: 'Create a new user'}));
userRouter.put('/:id', (req, res) => res.send({title: 'Update user'}));
userRouter.delete('/:id', (req, res) => res.send({title: 'Delete the User'}));

export default userRouter;