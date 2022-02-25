import { Router } from "express";
import { addNewCoordinate } from "./controllers/addCoordinate";
import { deleteCoordinate } from "./controllers/deleteCoordinate";
import { getCoordinates } from "./controllers/getCoordinates";
import { updateCoordinate } from "./controllers/updateCoordinate";




const routerCoordinate:Router = Router();

routerCoordinate.get('/coordinates',getCoordinates);

routerCoordinate.post('/coordinates',addNewCoordinate);

routerCoordinate.put('/coordinates/:id',updateCoordinate);

routerCoordinate.delete('/coordinates/:id',deleteCoordinate);

export default routerCoordinate;