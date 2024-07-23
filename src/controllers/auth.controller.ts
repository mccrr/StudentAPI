import { Request, Response, NextFunction } from "express";
import { students } from "../data/students";

export const signin = (req:Request, res:Response, next:NextFunction) => {
    const {username, password} = req.body;
    let validatedUser = null;

    for(let student of students){
        if(student.username === username && student.password === password){
            validatedUser = student;
            return res.status(200).json({
                success: true,
                data: validatedUser
            });
        }
    }
    return res.status(403).json({
        success: false,
        message: "Invalid credentials"
    });

};
