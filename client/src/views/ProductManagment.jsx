import { Grid } from "@mui/material";
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {
  useGetAllAlbumQuery,
  useDeleteAlbumMutation,
  useUpdateAlbumMutation,
  useCreateAlbumsMutation,
} from "../store/service/albumService";
import { useGetAllCategoriesQuery } from "../store/service/categoryService";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider } from "@mui/material/styles";
import { PrimaryMainTheme } from "./PrimaryMainTheme";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ProductManagment = () => {
  const { data: allGenres } = useGetAllCategoriesQuery();

  const [open, setOpen] = useState(false); //edit
  const [openAddNewAlbum, setopenAddNewAlbum] = useState(false); //create

  const [updateName, results] = useUpdateAlbumMutation();

  const [createNewAlbum, CreateAlbumresults] = useCreateAlbumsMutation();

  const [albumData, setAlbumData] = useState({});
  const [NewalbumData, setNewAlbumData] = useState({});

  const submitUpdateName = () => {
    //edit
    updateName(albumData);
    setOpen(false);
  };

  const submitNewAlbum = () => {
    //create
    const formData = new FormData()
    formData.append("name", NewalbumData.name);
    formData.append("artist", NewalbumData.artist);
    formData.append("price", NewalbumData.price);
    formData.append("stock", NewalbumData.stock);
    formData.append("genreName", NewalbumData.genreName);
    formData.append("description", NewalbumData.description);
    const imageFile = document.getElementById("create-new-album-image").files[0]
    formData.append("image", imageFile)
    createNewAlbum(formData);
    setopenAddNewAlbum(false);
  };

  const handleOpen = (album) => {
    //edit
    const genreId = album.Genre.id;
    const albumUpdateInfo = {
      GenreId: genreId,
      ...album,
    };
    setAlbumData(albumUpdateInfo);
    setOpen(true);
  };

  const handleAddNewAlbumOpen = (album) => {
    setopenAddNewAlbum(true);
  };

  const handleClose = () => setOpen(false); //edit

  const handleNewAlbumClose = () => setopenAddNewAlbum(false); //create

  const { data: allAlbumGetResponse, isLoading } = useGetAllAlbumQuery();
  const [deleteData] = useDeleteAlbumMutation();
  const handleClick = (clickData) => {
    deleteData(clickData);
  };

  const handleUpdate = (event, fieldName) => {
    //edit
    setAlbumData({
      ...albumData,
      [fieldName]: event.target.value,
    });
  };

  const handleAddNewAlbum = (event, fieldName) => {
    //create
    setNewAlbumData({
      ...NewalbumData,
      [fieldName]: event.target.value,
    });
  };
 

  return (
    <>
      <ThemeProvider theme={PrimaryMainTheme}>
        <Grid>
          <Button
            onClick={() => handleAddNewAlbumOpen()}
            variant="contained"
            sx={{ color: "primary.light", mb: 4, boxShadow: 0 }}
          >
            Add New Product
          </Button>
        </Grid>
        <Grid
          container
          direction="column"
          sx={{ border: 1, borderColor: "primary.main" }}
        >
          <Grid>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        backgroundColor: "primary.main",
                        color: "primary.light",
                        textTransform: "uppercase",
                      }}
                    >
                      Album Name
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "primary.main",
                        color: "primary.light",
                        textTransform: "uppercase",
                      }}
                      align="right"
                    >
                      Price
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "primary.main",
                        color: "primary.light",
                        textTransform: "uppercase",
                      }}
                      align="right"
                    >
                      Artist
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "primary.main",
                        color: "primary.light",
                        textTransform: "uppercase",
                      }}
                      align="right"
                    >
                      Stock
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "primary.main",
                        color: "primary.light",
                        textTransform: "uppercase",
                      }}
                      align="right"
                    >
                      Category
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "primary.main",
                        color: "primary.light",
                        textTransform: "uppercase",
                      }}
                      align="right"
                    ></TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "primary.main",
                        color: "primary.light",
                        textTransform: "uppercase",
                      }}
                      align="right"
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allAlbumGetResponse &&
                    allAlbumGetResponse.results.map((album, i) => (
                      <TableRow
                        key={album.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{
                            textTransform: "uppercase",
                            backgroundColor: "primary.light",
                            color: "primary.main",
                            borderTop: 1,
                            borderBottom: 1,
                            borderColor: "primary.main",
                          }}
                        >
                          {album.name}
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            backgroundColor: "primary.light",
                            color: "primary.main",
                            borderTop: 1,
                            borderBottom: 1,
                            borderColor: "primary.main",
                            textTransform: "uppercase",
                          }}
                        >
                          {album.artist}
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            backgroundColor: "primary.light",
                            color: "primary.main",
                            borderTop: 1,
                            borderBottom: 1,
                            borderColor: "primary.main",
                            textTransform: "uppercase",
                          }}
                        >
                          ${album.price}
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            backgroundColor: "primary.light",
                            color: "primary.main",
                            borderTop: 1,
                            borderBottom: 1,
                            borderColor: "primary.main",
                            textTransform: "uppercase",
                          }}
                        >
                          {album.stock}
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            backgroundColor: "primary.light",
                            color: "primary.main",
                            borderTop: 1,
                            borderBottom: 1,
                            borderColor: "primary.main",
                            textTransform: "uppercase",
                          }}
                        >
                          {album.Genre.name}
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            backgroundColor: "primary.light",
                            color: "primary.main",
                            borderTop: 1,
                            borderBottom: 1,
                            borderColor: "primary.main",
                            textTransform: "uppercase",
                          }}
                        >
                          <button onClick={() => handleOpen(album)}>
                            EDIT
                          </button>
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            backgroundColor: "primary.light",
                            color: "primary.main",
                            borderTop: 1,
                            borderBottom: 1,
                            borderColor: "primary.main",
                            textTransform: "uppercase",
                          }}
                        >
                          <button onClick={() => handleClick(album.id)}>
                            DELETE
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </ThemeProvider>
      <Modal
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="column">
            <Grid>
              <TextField
                onChange={(event) => handleUpdate(event, "name")}
                value={albumData.name}
                fullWidth
                label="Album Name"
                variant="standard"
              />
            </Grid>
            <Grid>
              <TextField
                fullWidth
                onChange={(event) => handleUpdate(event, "artist")}
                value={albumData.artist}
                label="Artist Name"
                variant="standard"
              />
            </Grid>
            <Grid>
              <TextField
                fullWidth
                onChange={(event) => handleUpdate(event, "price")}
                value={albumData.price}
                label="Price"
                variant="standard"
              />
            </Grid>
            <Grid>
              <TextField
                fullWidth
                onChange={(event) => handleUpdate(event, "stock")}
                value={albumData.stock}
                label="stock"
                variant="standard"
              />
            </Grid>
            <Grid>
              {albumData.Genre && (
                <Select
                  value={albumData.GenreId}
                  label="Age"
                  onChange={(event) => handleUpdate(event, "GenreId")}
                >
                  {allGenres &&
                    allGenres.results.map((genre, i) => (
                      <MenuItem key={genre.name} value={genre.id}>
                        {genre.name}
                      </MenuItem>
                    ))}
                </Select>
              )}
            </Grid>
            <Grid>
              <Button
                onClick={() => submitUpdateName()}
                size="small"
                variant="outlined"
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>

      <Modal
        open={openAddNewAlbum}
        onClose={() => handleNewAlbumClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="column">
            <Grid>
              <TextField
                onChange={(event) => handleAddNewAlbum(event, "name")}
                fullWidth
                label="Album Name"
                variant="standard"
              />
            </Grid>
            <Grid>
              <TextField
                fullWidth
                onChange={(event) => handleAddNewAlbum(event, "artist")}
                label="Artist Name"
                variant="standard"
              />
            </Grid>
            <Grid>
              <TextField
                fullWidth
                onChange={(event) => handleAddNewAlbum(event, "price")}
                label="Price"
                variant="standard"
              />
            </Grid>
            <Grid>
              <TextField
                fullWidth
                onChange={(event) => handleAddNewAlbum(event, "stock")}
                label="stock"
                variant="standard"
              />
            </Grid>
            <Grid>
              <TextField
                fullWidth
                onChange={(event) => handleAddNewAlbum(event, "description")}
                label="description"
                variant="standard"
              />
            </Grid>
            <Grid>
                <Select
                  label="Age"
                  value={NewalbumData.genreName}
                  onChange={(event) => handleAddNewAlbum(event, "genreName")}
                >
                  {allGenres &&
                    allGenres.results.map((genre, i) => (
                      <MenuItem key={genre.name} value={genre.name}>
                        {genre.name}
                      </MenuItem>
                    ))}
                </Select>
            </Grid>
            <Grid>
              <input
                accept="image/*"
                // style={{ display: "none" }}
                id="create-new-album-image"
                multiple
                type="file"
                className="m-1"
              />
            </Grid>
            <Grid>
              <Button
                onClick={() => submitNewAlbum()}
                size="small"
                variant="outlined"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default ProductManagment;
