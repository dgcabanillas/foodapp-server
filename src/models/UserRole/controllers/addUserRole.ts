import { Request, Response } from "express"
import { UserRoleModel } from "../model"


export const addNewUserRole= async(req:Request, res:Response)=>{
    
    try {
        const newUserRoleInfo = req.body
        const newUserRole = await UserRoleModel.create(newUserRoleInfo);
        res.status(200).json({data: newUserRole})
        
    } catch (error:any) {
        res.status(400).json({error:error.message})
        console.log(error);
    } 
}