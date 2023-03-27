import { Genre } from "../models/index.js"

class GenreController {
    static getAllGenres(req, res) {
        Genre.findAll({ attributes: ["name", "id"] })
            .then(results => {
                if (results.length === 0) throw "No hay categorias para mostrar"
                res.status(200).send({ success: true, message: "Categorias encontradas", results })
            }).catch(error => {
                res.status(400).send({ success: false, message: error })
            })
    }
    static async createGenre(req, res) {
        try {
            const results = await Genre.create(req.body)
            res.status(200).send({ success: true, message: "Categorias creada con exito", results })
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }
    static async getGenreById(req, res) {
        try {
            const results = await Genre.findOne({
                where: {
                    id: req.params.id
                },
                attributes: ["id", "name"]
            })
            if (!results) throw "No se encontro la categoria"
            res.status(200).send({ success: true, message: "Categorias encontradas", results })
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }
    static async updateGenre(req, res) {
        try {
            const results = await Genre.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            if (results[0] == 0) throw "No se pudo actualizar"
            res.status(200).send({ success: true, message: "Categoria actualizada con exito", results })

        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }
    static async deleteGenre(req, res) {
        try {
            const results = await Genre.destroy({
                where: {
                    id: req.params.id
                }
            })
            if (results == 0) throw "No se pudo eliminar la categoria"
            res.status(200).send({ success: true, message: "Categoria eliminada con exito", results })
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }

}



export default GenreController