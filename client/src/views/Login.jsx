import { useEffect } from "react";
import { useLoginMutation } from "../store/service/userService";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "../Components/Header";


const Login = () => {
  const [login, { error, data: loginResponseData }] = useLoginMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (formData) => {
    login(formData);
  };

  useEffect(() => {
    if (loginResponseData) {
      navigate("/");
    }
  }, [loginResponseData]);

  return (
    <div className="flex h-[100%] w-[100%]content-center justify-center">
      <Header></Header>
      <form
        onSubmit={handleSubmit(submit)}
        className="w-3/6 flex flex-col w-full h-full justify-center items-center gap-7"
      >
        <input
          type="text"
          defaultValue=""
          {...register("authName", {
            required: true,
            minLength: 4,
            maxLength: 50,
          })}
          placeholder="Username or Email"
          className="bg-transparent border-solid border-rtgreen font-work-sans border-b-2 w-[50vw] text-rtgreen uppercase"
        />
        {errors?.email?.type === "pattern" && <p>Pone un email con onda</p>}
        {errors?.email?.type === "required" && (
          <p>El campo nombre no puede estar vacio</p>
        )}
        {errors?.email?.type === "maxLength" && (
          <p>Ponete un email mas corto</p>
        )}
        {errors?.email?.type === "minLength" && (
          <p>Ponete un email mas largo</p>
        )}
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
          className="bg-transparent border-solid border-rtgreen font-work-sans border-b-2 w-[50vw] text-rtgreen uppercase"
        />
        <div className="flex bg-rtgreen h-8 w-20 justify-center">
        <button className="text-white font-archivo-black text-sm font-work-sans font-bold uppercase">
          enviar
        </button>
        </div>
      </form>
      {error && <p>{error.data.message}</p>}
    </div>
  );
};

export default Login;
