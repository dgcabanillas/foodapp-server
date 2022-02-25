import { Request, Response } from "express"
import { UserModel } from "../model"


export const deleteUser = async (req: Request, res: Response)=>{
    try {
        const userRoleId =req.params.id;
        const userRole = await UserModel.deleteOne({_id: userRoleId});
        res.status(200).json('user successfully deleted');
    } catch (error:any) {
        res.status(400).json({error:error.message})
    }
}