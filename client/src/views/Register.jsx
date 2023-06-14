import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  useMeQuery,
  useUpdateCurrentUserMutation,
  useDeleteUserMutation,
  useLogoutMutation,
  useCreateUserMutation
} from "../store/service/userService";
import { Unstable_Grid2 as Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { PrimaryMainTheme } from "./PrimaryMainTheme";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate();
  const [createUser, createUserResults]=useCreateUserMutation();
  const { data: profileData, isLoading } = useMeQuery();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submit = (formData) => {
    createUser(formData);
    navigate("/login")
  };
 
  const registerTheme = {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignContent: "flex-end",
    mt:{xs:"50%", md:"0%"}
  }
  

  return (
    <>
      <Header></Header>
      <ThemeProvider theme={PrimaryMainTheme}>
        <Grid
          container
          sx={registerTheme}
        >
          <Grid sx={{ ml: 2, mb: 39 }}>
            <form onSubmit={handleSubmit(submit)}>
              <Grid container direction="column" spacing={2}>
              <Grid>
                  <input
                    type="text"
                    placeholder="User Name"
                    {...register("userName")}
                    className="bg-transparent border-solid border-rtgreen font-work-sans border-b-2 md:w-[25vw] md:text-base text-sm text-rtgreen uppercase"
                  />
                </Grid>
                <Grid>
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name")}
                    className="bg-transparent border-solid border-rtgreen font-work-sans border-b-2 md:w-[25vw] md:text-base text-sm  text-rtgreen uppercase"
                  />
                </Grid>
                <Grid>
                  <input
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName")}
                    className="bg-transparent border-solid border-rtgreen border-b-2 font-work-sans md:w-[25vw] md:text-base text-sm  text-rtgreen uppercase"
                  />
                </Grid>
                <Grid>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                    className="bg-transparent border-solid border-rtgreen font-work-sans border-b-2 md:w-[25vw] md:text-base text-sm text-rtgreen uppercase"
                  />
                </Grid>
                <Grid>
                  <input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                    className="bg-transparent border-solid border-rtgreen font-work-sans border-b-2 md:w-[25vw] md:text-base text-sm  text-rtgreen uppercase"
                  />
                </Grid>
                <Grid
                  sx={{
                    display: "flex",
                    width: 90,
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
            {createUserResults.isSuccess && <p className="mt-2">{createUserResults.data.message}</p>}
            {createUserResults.isError && <p className="mt-2">{createUserResults.error.message}</p>}
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Register;
