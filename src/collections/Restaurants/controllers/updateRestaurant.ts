import { Request, Response } from "express"
import { RestaurantModel } from "../model"



export const updateRestaurant = async (req: Request, res: Response)=>{
    try {
        const restaurantId =req.params.id;
        const newRestaurantInfo = req.body;
        const restaurant = await RestaurantModel.findOneAndUpdate({_id: restaurantId}, newRestaurantInfo);
        res.status(200).json({ newRestaurantInfo })
    } catch (error:any) {
        res.status(400).json({error:error.message})
    }
}