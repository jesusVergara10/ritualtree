import express from "express"
import AlbumController from "../controllers/AlbumController.js"
import isAdmin from "../midleware/isAdmin.js"
import authMe from "../midleware/authMe.js"
import multer from "multer"
import path from "path" 


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) 
    }
  })

  const upload = multer({storage:storage})

export const albumRoutes = express.Router()

albumRoutes.get("/", AlbumController.getAllAlbum)
albumRoutes.get("/search", AlbumController.getAlbumsSearch)
albumRoutes.get("/:id", AlbumController.getAlbumById)
albumRoutes.get("/:id/image", AlbumController.dowloadAlbumImage)
albumRoutes.use(authMe)
albumRoutes.use(isAdmin)
albumRoutes.post("/",upload.single("image"), AlbumController.createAlbums)
albumRoutes.put("/:id", AlbumController.updateAlbum)
albumRoutes.delete("/:id", AlbumController.deleteAlbum)

