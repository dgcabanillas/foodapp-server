import { Request, Response } from "express"
import { UserModel } from "../model"


export const getUsers=async(req:Request,res:Response)=>{
    const users=await UserModel.find({});
    res.status(200).json({users});
}