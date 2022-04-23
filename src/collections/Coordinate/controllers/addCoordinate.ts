import { Request, Response } from "express"
import { CoordinateModel } from "../model"


export const addNewCoordinate= async(req:Request, res:Response)=>{
    
    try {
        const newCoordinateInfo = req.body
        const newCoordinate = await CoordinateModel.create(newCoordinateInfo);
        res.status(200).json({data: newCoordinate})
        
    } catch (error:any) {
        res.status(400).json({error:error.message})
        console.log(error);
    } 
}