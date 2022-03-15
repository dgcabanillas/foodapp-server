import { Request, Response } from "express"
import { CoordinateModel } from "../model"


export const updateCoordinate = async (req: Request, res: Response)=>{
    try {
        const coordinateId =req.params.id;
        const newCoodinateInfo = req.body;
        const coodinate = await CoordinateModel.findOneAndUpdate({_id: coordinateId}, newCoodinateInfo);
        res.status(200).json({ newCoodinateInfo })
    } catch (error:any) {
        res.status(400).json({error:error.message})
    }
}