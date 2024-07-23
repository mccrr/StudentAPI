import { Request, Response, NextFunction } from "express";
import { classes } from "../data/classes";

export const getClassInfo = (req:Request, res:Response, next:NextFunction)=>{
    const code = req.params.code;
    for(let cclass of classes){
        if(cclass.code === code){
            return res.status(200).json({
                success: true,
                data: cclass
            });
        }
    }
    return res.status(404).json({
        success: false,
        message: 'Class not found'
    });
};