import { Router } from "express";
import { addNewRestaurant } from "./controllers/addRestaurant";
import { deleteRestaurant } from "./controllers/deleteRestaurant";
import { getRestaurants } from "./controllers/getRestaurant";
import { updateRestaurant } from "./controllers/updateRestaurant";



const routerRestaurant:Router = Router();

routerRestaurant.get('/restaurants',getRestaurants);

routerRestaurant.post('/restaurants',addNewRestaurant);

routerRestaurant.put('/restaurants/:id',updateRestaurant);

routerRestaurant.delete('/restaurants/:id',deleteRestaurant);

export default routerRestaurant;