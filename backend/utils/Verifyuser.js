import JWt from 'jsonwebtoken'
import { errorHandler } from './Error.js';

export const VerifyToken = (req,res,next)=> {
    const token =req.cookies.access_token;

if(!token) return next(errorHandler(401,'Unauthorized'))

    JWt.verify(token,process.env.JWT_SECRET,(err,user) => {

        if(err) return next (errorHandler(403,'Forbidden'))

            req.user = user;
            next();
    });


}   