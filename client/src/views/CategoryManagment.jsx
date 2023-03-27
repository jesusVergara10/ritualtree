import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {
  useGetAllCategoriesQuery,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
  useCreateCategoryMutation,
} from "../store/service/categoryService";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createTheme } from "@mui/material/styles";
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
  borderRadius: 0,
  boxShadow: 24,
  p: 4,
};

const ProductManagment = () => {
  const [open, setOpen] = useState(false);
  const [openAddCategoru, setOpenAddCategory] = useState(false);

  const [updateName, results] = useUpdateCategoryMutation();

  const [createCategory, catResults] = useCreateCategoryMutation();

  const [genreId, setGenreId] = useState("");

  const [updatedName, setUpdatedName] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const submitUpdateName = () => {
    updateName({
      id: genreId,
      name: updatedName,
    });
  };

  const submitNewCategory = () => {
    createCategory({
      name: newCategory,
    });
  };

  const handleUpdateName = (event) => {
    setUpdatedName(event.target.value);
  };

  const handleNewCategory = (event) => {
    setNewCategory(event.target.value)
  };

  const handleOpen = (genre) => {
    setGenreId(genre.id);
    setUpdatedName(genre.name);
    setOpen(true);
  };
  const handleOpenCategory = () => {
    setOpenAddCategory(true);
  };
  const handleClose = () => setOpen(false);
  const handleCloseCategory = () => setOpenAddCategory(false);

  const { data: allGenresGetResponse, isLoading } = useGetAllCategoriesQuery();
  const [deleteData] = useDeleteCategoryMutation();

  const handleClick = (clickData) => {
    deleteData(clickData);
  };

  return (
    <>
      <ThemeProvider theme={PrimaryMainTheme}>
        <Grid>
          <Button
            onClick={() => handleOpenCategory()}
            variant="contained"
            sx={{ color: "primary.light", mb: 4, boxShadow: 0 }}
          >
            Add New Category
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
                      }}
                    >
                      GENRE
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ backgroundColor: "primary.main" }}
                    ></TableCell>
                    <TableCell
                      align="right"
                      sx={{ backgroundColor: "primary.main" }}
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allGenresGetResponse &&
                    allGenresGetResponse.results.map((genre, i) => {
                      return (
                        <TableRow
                          key={genre.name}
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
                            {genre.name}
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{
                              backgroundColor: "primary.light",
                              color: "primary.main",
                              borderTop: 1,
                              borderBottom: 1,
                              borderColor: "primary.main",
                            }}
                          >
                            <button onClick={() => handleOpen(genre)}>
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
                            }}
                          >
                            <button onClick={() => handleClick(genre.id)}>
                              DELETE
                            </button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
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
          <TextField
            onChange={(event) => handleUpdateName(event)}
            value={updatedName}
            id="standard-basic"
            label="Genre Name"
            variant="standard"
          />
          <Button
            onClick={() => submitUpdateName()}
            size="small"
            variant="outlined"
          >
            Update
          </Button>
        </Box>
      </Modal>
      <Modal
        open={openAddCategoru}
        onClose={() => handleCloseCategory()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            onChange={(event) => handleNewCategory(event)}
            // value={updatedName}
            id="standard-basic"
            label="Genre Name"
            variant="standard"
          />
          <Button
            onClick={() => submitNewCategory()}
            size="small"
            variant="outlined"
          >
            Update
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ProductManagment;
