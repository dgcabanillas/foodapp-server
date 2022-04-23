
import { Request, Response } from "express"
import { UserModel } from "../entity/models/model"


export const addNewUser= async(req:Request, res:Response)=>{
    
    try {
        const newUserInfo = req.body
        const newUser = await UserModel.create(newUserInfo);
        res.status(200).json({data: newUser})
        
    } catch (error:any) {
        res.status(400).json({error:error.message})
        console.log(error);
    } 
}