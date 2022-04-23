import { Router } from "express";
import { addNewUserRole } from "./controllers/addUserRole";
import { deleteUserRole } from "./controllers/deleteUserRole";
import { getUsersRole } from "./controllers/getUserRole";
import { updateUserRole } from "./controllers/updateUserRole";


const routerUserRole:Router = Router();

routerUserRole.get('/usersRole',getUsersRole);

routerUserRole.post('/usersRole',addNewUserRole);

routerUserRole.put('/usersRole/:id',updateUserRole);

routerUserRole.delete('/usersRole/:id',deleteUserRole);

export default routerUserRole;