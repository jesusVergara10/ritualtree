import { Album, Genre } from "../models/index.js";
import path from "path"
import { Op } from "sequelize";


class AlbumController {
  static async dowloadAlbumImage(req, res) {
    try {
      const results = await AlbumController.getOneAlbum(req.params.id);
      if (!results) throw "No se encontro ningun Album";
      var fileName = "uploads/" + results.imageLocation;
      var options = {
        root: path.join("./")
    };
      res.sendFile(fileName, options, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Sent:", fileName);
        }
      });
    } catch (error) {
        console.log(error)
      res.status(400).send({ success: false, message: error });
    }
  }

  static async createAlbums(req, res) {
    try {
      const { genreName } = req.body;
      const genre = await Genre.findOrCreate({
        where: {
          name: genreName,
        },
      });
      const newAlbumToCreate = {
        ...req.body,
        imageLocation: req.file.filename,
        GenreId: genre[0].id,
      };
      const results = await Album.create(newAlbumToCreate);
      res
        .status(200)
        .send({ succes: true, message: "Album creado con exito", results });
    } catch (error) {
      console.log(error);
      res.status(400).send({ success: false, message: error });
    }
  }

  static async getAllAlbum(req, res) {
    try {
      const results = await Album.findAll({
        attributes: ["id", "artist", "name", "price", "stock"],
        include: [{ model: Genre, attributes: ["name", "id"] }],
      });
      if (results.length === 0) throw "No hay Albums";
      res
        .status(200)
        .send({ succes: true, message: "Albums encontrados", results });
    } catch (error) {
      console.log(error)
      res.status(400).send({ success: false, message: error });
    }
  }

  static async getOneAlbum(id) {
    const results = await Album.findOne({
      where: {
        id: id
      },
      attributes: ["id", "name", "artist", "imageLocation", "description", "price", "stock"],
      include: { model: Genre, attributes: ["name"] },
    });
    return results;
  }

  static async getAlbumsSearch(req, res){
    try {
      const search = req.query.query;
      const results = await Album.findAll({
        where:{
          [Op.or]:[
            {name: search},
            {artist: search}
          ]
        },
        attributes: ["id", "name", "artist", "imageLocation", "description", "price", "stock"],
        include: [{ model: Genre, attributes: ["name"] }],
      });
      res
        .status(200)
        .send({ succes: true, message: "Albums encontrados", results });
    } catch (error) {
      console.log(error)
      res.status(400).send({ success: false, message: error });
    }
  }

  static async getAlbumById(req, res) {
    try {
      const results = await AlbumController.getOneAlbum(req.params.id);
      if (!results) throw "No se encontro ningun Album";
      res
        .status(200)
        .send({ succes: true, message: "Album encontrado con exito", results });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }
  // static async getAlbumByUpdate(req, res) {
  //     try {
  //         const dataGenre = await Genre.findAll({
  //             attributes: ["id", "name"]
  //         })
  //         const results = await AlbumController.getOneAlbum(req)
  //         if (!results) throw "No se encontro ningun Album"
  //         res.status(200).send({
  //             succes: true, message: "Album encontrado para modificar", results: {
  //                 results, dataGenre
  //             }
  //         })
  //     } catch (error) {
  //         res.status(400).send({ success: false, message: error })
  //     }
  // }

  static async updateAlbum(req, res) {
    try {
      const results = await Album.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (results[0] === 0) throw "No se pudo modificar el album ";
      res
        .status(200)
        .send({ succes: true, message: "Album modificado con exito", results });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }

  static async deleteAlbum(req, res) {
    try {
      const results = await Album.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (results == 0) throw "No se pudo eliminar el Album";
      res
        .status(200)
        .send({ succes: true, message: "Album eliminado con exito", results });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }
}

export default AlbumController;
