import { Request, Response } from "express"
import { FoodModel } from "../entity/model/model"

/* let mongoos = require('mongoose');
const parseId = (id:any)=>{
    return mongoos.Types.ObjectId(id);
} */

export const updateFood = async (req: Request, res: Response)=>{
    try {
        const FoodId =req.params.id;
        const newFoodInfo = req.body;
        const userRole = await FoodModel.findOneAndUpdate({_id: FoodId}, newFoodInfo);
        res.status(200).json({ newFoodInfo })
    } catch (error:any) {
        res.status(400).json({error:error.message})
    }
}