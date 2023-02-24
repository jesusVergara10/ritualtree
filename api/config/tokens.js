import jwt from "jsonwebtoken";
import "dotenv/config"

const secret=process.env.SECRET


export const generateToken = (payload)=>{
    const token=jwt.sign({payload}, secret,{expiresIn:`1h`});
    return token
}


export const verify = (token) => {
    return jwt.verify(token, secret)
}