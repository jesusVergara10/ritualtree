import { Router } from "express";
import GenreController from "../controllers/GenreController.js";
import isAdmin from "../midleware/isAdmin.js"
import authMe from "../midleware/authMe.js"

const genreRoutes = Router()

genreRoutes.get("/", GenreController.getAllGenres)
genreRoutes.get("/:id", GenreController.getGenreById)
genreRoutes.use(authMe)
genreRoutes.use(isAdmin)
genreRoutes.post("/", GenreController.createGenre)
genreRoutes.put("/:id", GenreController.updateGenre)
genreRoutes.delete("/:id", GenreController.deleteGenre)

export default genreRoutes


