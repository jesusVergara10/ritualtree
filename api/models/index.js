import Genre from "./Genre.js";
import Album from "./Album.js";
import User from "./User.js";

Genre.hasMany(Album, {
    foreignKey: {
        allowNull: false
    },
    onDelete: "NO ACTION"
})
Album.belongsTo(Genre)

export { Genre, Album, User }