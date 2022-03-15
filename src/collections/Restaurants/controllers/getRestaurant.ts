import { Request, Response } from "express"
import { RestaurantModel } from "../model"


export const getRestaurants=async(req:Request,res:Response)=>{
    const restaurants=await RestaurantModel.find({});
    res.status(200).json({restaurants});
}