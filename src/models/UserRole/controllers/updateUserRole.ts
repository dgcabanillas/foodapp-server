import { Request, Response } from "express"
import { UserRoleModel } from "../model"

/* let mongoos = require('mongoose');
const parseId = (id:any)=>{
    return mongoos.Types.ObjectId(id);
} */

export const updateUserRole = async (req: Request, res: Response)=>{
    try {
        const userRoleId =req.params.id;
        const newUserRoleInfo = req.body;
        const userRole = await UserRoleModel.findOneAndUpdate({_id: userRoleId}, newUserRoleInfo);
        res.status(200).json({ newUserRoleInfo })
    } catch (error:any) {
        res.status(400).json({error:error.message})
    }
}