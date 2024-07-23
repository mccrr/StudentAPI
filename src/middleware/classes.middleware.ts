import { Request, Response, NextFunction } from "express";

export const classMiddleware = (req:Request, res:Response, next:NextFunction) => {
  const code = req.params.code;
  let accessGranted = false;
  for(let course of req.validatedUser.classes_enrolled){
    if(code.toLowerCase() === course.toLowerCase()){
        accessGranted=true;
        return next();
    }
  }
  if(!accessGranted){
  return res.status(401).json({
    success: false,
    message: `Only students enrolled to class with code ${code} can access this route`
  });
}
};