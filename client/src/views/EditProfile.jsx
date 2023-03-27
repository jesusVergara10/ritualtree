import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  useMeQuery,
  useUpdateCurrentUserMutation,
  useDeleteUserMutation,
  useLogoutMutation
} from "../store/service/userService";
import { Unstable_Grid2 as Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { PrimaryMainTheme } from "./PrimaryMainTheme";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";


const EditProfile = () => {
  const [updateUser, result] = useUpdateCurrentUserMutation();

  const { data: profileData, isLoading } = useMeQuery();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (profileData) {
      reset({
        name: profileData.result.name,
        lastName: profileData.result.lastName,
        email: profileData.result.email,
      });
    }
  }, [profileData, reset]);

  const submit = (formData) => {
    if (!formData.password || formData.password === "") {
      formData = {
        name: formData.name,
        lastName: formData.lastName,
        email: formData.email,
      };
    }
    updateUser(formData);
  };
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const[deleteUser, deleteUserResults]=useDeleteUserMutation()
  const deleteUserHandle =()=>{
    const userIdToDelete = profileData.result.id
    deleteUser(userIdToDelete)
    logout()
    navigate("/")
  }

  return (
    <>
      <Header></Header>
      <ThemeProvider theme={PrimaryMainTheme}>
        <Grid
          container
          sx={{
            display: "flex",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignContent: "flex-end",
          }}
        >
          <Grid sx={{ ml: 2, mb: 39 }}>
            <form onSubmit={handleSubmit(submit)}>
              <Grid container direction="column" spacing={2}>
                <Grid>
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name")}
                    className="bg-transparent border-solid border-rtgreen font-work-sans border-b-2 w-[25vw] text-rtgreen uppercase"
                  />
                </Grid>
                <Grid>
                  <input
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName")}
                    className="bg-transparent border-solid border-rtgreen border-b-2 font-work-sans w-[25vw] text-rtgreen uppercase"
                  />
                </Grid>
                <Grid>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                    className="bg-transparent border-solid border-rtgreen font-work-sans border-b-2 w-[25vw] text-rtgreen uppercase"
                  />
                </Grid>
                <Grid>
                  <input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                    className="bg-transparent border-solid border-rtgreen font-work-sans border-b-2 w-[25vw] text-rtgreen uppercase"
                  />
                </Grid>
                <Grid
                  sx={{
                    display: "flex",
                    width: 105,
                    height: 35,
                    justifyContent: "center",
                    alignContent: "center",
                    backgroundColor: "primary.main",
                    ml: 1,
                    mt: 3,
                  }}
                >
                  <button className="text-white font-archivo-black text-sm font-work-sans font-bold uppercase">
                    Submit
                  </button>
                </Grid>
              </Grid>
            </form>
            <Grid container sx={{display: "flex", justifyContent: "flex-start", alignContent: "center"}}>
              <Grid sx={{
                    display: "flex",
                    width: 110,
                    height: 45,
                    justifyContent: "center",
                    alignContent: "center",
                    mt: 1,
                  }}>
                <button className="text-rtgreen text-[1vw] underline" 
                onClick={()=>deleteUserHandle()}
                >Eliminar mi cuenta</button>
              </Grid>
            </Grid>
            {result.isSuccess && <p className="mt-2">{result.data.message}</p>}
            {result.isError && <p className="mt-2">{result.error.message}</p>}
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default EditProfile;
