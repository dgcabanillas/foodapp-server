import { Router } from "express";
import { addNewUser } from "./controllers/addUsers";
import { deleteUser } from "./controllers/deleteUser";
import { getUsers } from "./controllers/getUsers";
import { updateUser } from "./controllers/updateUser";

const routerUser:Router = Router();

routerUser.get('/users',getUsers);

routerUser.post('/users',addNewUser);

routerUser.put('/users/:id',updateUser);

routerUser.delete('/users/:id', deleteUser);

export default routerUser;