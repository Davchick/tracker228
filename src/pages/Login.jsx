import { ValidationSchema } from "../utils/formValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { logIn } from "../redux/user/userSlice";
import FormInput from "../components/FormInput";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ky from "ky";
import Checkbox from "../components/Checkbox";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(ValidationSchema),
  });

  const BASE_URL = ky.create({
    prefixUrl: import.meta.env.VITE_BASE_URL,
  });

  const onRegister = async (data) => {
    const loading = toast.loading("Please wait...");
    try {
      const res = await BASE_URL.post("auth/register", {
        json: data,
      }).json();
      console.log(res);

      dispatch(logIn(res));

      toast.update(loading, {
        render: "Account created successfully",
        type: "success",
        isLoading: false,
        pauseOnFocusLoss: false,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
      navigate("/");
    } catch (err) {
      console.log(err.message);
      toast.update(loading, {
        render: "Something went wrong",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    }
  };
  return (
    <div className="px-5 md:px-0 flex flex-row-reverse lg:space-x-7 h-screen items-center justify-center lg:justify-between">
      <div className="relative hidden h-screen w-1/2 bg-bg-secondary lg:flex items-center justify-center">
        <div className="z-10 absolute bg-primary top-1/2 w-64 h-32 rounded-b-full"></div>
        <div className="absolute bg-primary size-64 rounded-full blur-md"></div>
        <div className="bg-bg-secondary/60 h-1/2 w-full absolute top-0 blur "></div>
      </div>

      <div className="lg:w-1/2">
        <div className="max-w-[532px] lg:pr-8 m-auto min-w-[305px]">
          <h1 className="title mb-4">Войти</h1>
          <p className="mb-6">
            Новый пользователь?{" "}
            <Link to="/register" className="text-text/50 hover:underline">
              Создать учетную запись
            </Link>
          </p>
          <form onSubmit={handleSubmit(onRegister)} className="space-y-6">
            <FormInput
              label="Телефон"
              type="text"
              name="number"
              error={errors.number ? errors.number.message : ""}
              register={register("number", {
                required: "Телефон - это обязательное поле",
              })}
            />
            <FormInput
              label="Пароль"
              type="password"
              name="password"
              error={errors.password ? errors.password.message : ""}
              register={register("password", {
                required: "Пароль - это обязательное поле",
              })}
            />

            <div className="flex items-center justify-between">
              <Checkbox label="Оставаться в системе" />
              <button
                className="btn font-bold text-xs w-min self-end px-9"
                type="submit"
              >
                Войти
              </button>
            </div>
            <div className="h-[1px] w-full bg-text/20 space-y-9"></div>
          </form>
          <p className="text-start mt-2 text-sm">
            <Link to="" className="hover:underline text-primary pl-1">
              Войдите
            </Link>{" "}
            с другой учетной записью
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
