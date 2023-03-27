import {Router} from "express"
import userRoutes from "./userRoutes.js"
import { albumRoutes } from "./albumRoutes.js"
import genreRoutes from "./genreRoutes.js"



const routes=Router()

routes.use("/user",userRoutes)
routes.use("/album",albumRoutes)
routes.use("/genre",genreRoutes)


export default routes
