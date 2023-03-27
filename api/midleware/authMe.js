import { verify } from "../config/tokens.js"

const authMe = (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) throw "no se encontro usuario"
        const { payload } = verify(token)
        if (!payload) throw "no se encontro usuario"
        // esto lo creamos nosotros
        req.user = payload
        next()
    } catch (error) {
        res.status(200).send({ success: false, message: error, result:null})
    }
}

export default authMe