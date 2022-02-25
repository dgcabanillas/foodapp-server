import { Request, Response } from "express"
import { FoodModel } from "../model"


export const addNewFood= async(req:Request, res:Response)=>{
    
    try {
        const newFoodInfo = req.body
        const newFood = await FoodModel.create(newFoodInfo);
        res.status(200).json({data: newFood})
        
    } catch (error:any) {
        res.status(400).json({error:error.message})
        console.log(error);
    } 
}