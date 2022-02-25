import { Request, Response } from "express"
import { FoodModel } from "../model"


export const getFoods=async(req:Request,res:Response)=>{
    const foods=await FoodModel.find({});
    res.status(200).json({foods});
}