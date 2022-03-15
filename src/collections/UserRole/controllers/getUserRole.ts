import { Request, Response } from "express"
import { UserRoleModel } from "../model"


export const getUsersRole=async(req:Request,res:Response)=>{
    const usersRole=await UserRoleModel.find({});
    res.status(200).json({usersRole});
}