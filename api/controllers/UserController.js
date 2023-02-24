import { generateToken, verify } from "../config/tokens.js";
import { User } from "../models/index.js";

class UserController {
    static async createUser(req, res) {
        try {
            const {name, lastName, password, email} = rec.body
            const results = await User.create(name, lastName, password, email)
            res.status(200).send({ succes: true, message: "Usuario creado con exito", results })
        } catch (error) {
            res.status(400).send({ success: false, message: error })
            
        }
    }
    static async getAllUsers(req, res) {
        try {
            const results = await User.findAll({
                attributes: ["id", "name", "lastName", "role"],
            })
            if (results.length === 0) throw "No hay usuarios"
            res.status(200).send({ succes: true, message: "Usuarios encontrados", results })
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }
    static async getUserById(req, res) {
        try {
            const results = await User.findOne({
                where: {
                    id: req.params.id
                },
                attributes: ["id", "name", "lastName", "role"]
            })
            if (!results) throw "No se encontro el usuario"
            res.status(200).send({ success: true, message: "Usuarios encontrados", results })

        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }
    static async updateUser(req, res) {
        try {
            const results = await User.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            if (results[0] == 0) throw "No se pudo actualizar"
            res.status(200).send({ success: true, message: "Usuario actualizado con exito", results })

        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }
    static async deleteUser(req, res) {
        try {
            const results = await User.destroy({
                where: {
                    id: req.params.id
                }
            })
            if (results == 0) throw "No se pudo eliminar el usuario"
            res.status(200).send({ success: true, message: "Usuario eliminado  con exito", results })

        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }

    static async login(req, res) {
        try {
            const {email, password} =req.body
            const results = await User.findOne({
                where:{
                    email
                }
            })

            if (!results) throw "No se encontró al usuario"
            const isEqual = await results.validatePassword(password)
            if(!isEqual) throw "contraseña incorrecta"
            
            const payload={
                email:results.email,
                role: results.role
            }

            const token = generateToken(payload)
            res.cookie("token",token)
            res.status(200).send({succes:true, message:"Usuario Loggeado"})

        } catch (error) {
            res.status(400).send({success:false, message: error})

        }
    }
    static async me(req, res) {
        res.status(200).send({ success: true, message: "Usuario logueado", result: req.user })
    }
    static async logOut(req, res) {
        res.clearCookie("token");
        res.send(204)
    }
}



export default UserController