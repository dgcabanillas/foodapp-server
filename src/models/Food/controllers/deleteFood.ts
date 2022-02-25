import { Request, Response } from "express"
import { FoodModel } from "../model"


export const deleteFood = async (req: Request, res: Response)=>{
    try {
        const foodId =req.params.id;
        const food = await FoodModel.deleteOne({_id: foodId});
        res.status(200).json('food successfully deleted');
    } catch (error:any) {
        res.status(400).json({error:error.message})
    }
}