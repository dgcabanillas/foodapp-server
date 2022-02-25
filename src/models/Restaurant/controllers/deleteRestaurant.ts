import { Request, Response } from "express"
import { RestaurantModel } from "../model"


export const deleteRestaurant= async (req: Request, res: Response)=>{
    try {
        const restaurantId =req.params.id;
        const restaurant = await RestaurantModel.deleteOne({_id: restaurantId});
        res.status(200).json('restaurant successfully deleted');
    } catch (error:any) {
        res.status(400).json({error:error.message})
    }
}