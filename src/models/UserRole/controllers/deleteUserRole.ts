import { Request, Response } from "express"
import { UserRoleModel } from "../model"


export const deleteUserRole = async (req: Request, res: Response)=>{
    try {
        const userRoleId =req.params.id;
        const userRole = await UserRoleModel.deleteOne({_id: userRoleId});
        res.status(200).json('userRole successfully deleted');
    } catch (error:any) {
        res.status(400).json({error:error.message})
    }
}