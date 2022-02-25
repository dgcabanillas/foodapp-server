import { Router } from "express";
import { addNewFood } from "./controllers/addFood";
import { deleteFood } from "./controllers/deleteFood";
import { getFoods } from "./controllers/getFood";
import { updateFood } from "./controllers/updateFood";



const routerFood:Router = Router();

routerFood.get('/foods',getFoods);

routerFood.post('/foods',addNewFood);

routerFood.put('/foods/:id',updateFood);

routerFood.delete('/foods/:id',deleteFood);

export default routerFood;