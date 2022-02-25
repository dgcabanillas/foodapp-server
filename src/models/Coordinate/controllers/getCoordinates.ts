import { Request, Response } from "express"
import { CoordinateModel } from "../model"


export const getCoordinates=async(req:Request,res:Response)=>{
    const coordinates=await CoordinateModel.find({});
    res.status(200).json({coordinates});
}