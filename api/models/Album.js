import { DataTypes as Dt, Model } from "sequelize";
import db from "../db/db.js";

class Album extends Model { }

Album.init({
    name: {
        type: Dt.STRING(50),
        allowNull: false,
        validate: {
            is: ["[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$", 'i'],
            len: [2, 50],
        }
    },
    artist: {
        type: Dt.TEXT,
        validate: {
            is: ["[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$", 'i'],
        }
    },
    description: {
        type: Dt.TEXT,
        // validate: {
        //     is: ["[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$", 'i'],
        // }
    },
    price: {
        type: Dt.DECIMAL(10, 2),
        allowNull: false,
        validate:{
            isDecimal: true         
        }

    },
    stock: {
        type: Dt.INTEGER,
        allowNull: false,
        validate:{
            isNumeric:true
        }
    },
    imageLocation:{
        type: Dt.STRING(500)
    }

}, {
    sequelize: db,
    modelName: `Album`
})
export default Album