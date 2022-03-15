import { Request, Response } from "express"
import { CoordinateModel } from "../model"


export const deleteCoordinate = async (req: Request, res: Response)=>{
    try {
        const coordinateId =req.params.id;
        const coordinate = await CoordinateModel.deleteOne({_id: coordinateId});
        res.status(200).json('coordinate successfully deleted');
    } catch (error:any) {
        res.status(400).json({error:error.message})
    }
}