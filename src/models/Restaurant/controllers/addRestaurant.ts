import { Request, Response } from "express"
import { RestaurantModel } from "../model"


export const addNewRestaurant= async(req:Request, res:Response)=>{
    
    try {
        const newRestaurantInfo = req.body
        const newRestaurant = await RestaurantModel.create(newRestaurantInfo);
        res.status(200).json({data: newRestaurant})
        
    } catch (error:any) {
        res.status(400).json({error:error.message})
        console.log(error);
    } 
}