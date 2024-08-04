import { ValidationSchema } from "../utils/formValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { logIn } from "../redux/user/userSlice";
import FormInput from "../components/FormInput";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ky from "ky";

const Register = () => {
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
    <div className="flex space-x-7 h-screen items-center justify-center lg:justify-between">
      <div className="relative hidden h-screen w-1/2 bg-bg-secondary lg:flex">
        <div className="absolute rounded-t-full left-1/2 top-[calc(50%-110px)] bg-primary w-64 h-32 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute rounded-b-full bg-primary top-[calc(50%)] w-[260px] h-[135px] blur-md left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="lg:w-1/2">
        <div className="max-w-[532px] lg:pr-8 m-auto">
          <h1 className="title mb-10">Создать учетную запись</h1>

          <form onSubmit={handleSubmit(onRegister)} className="space-y-6">
            <FormInput
              label="Имя"
              type="text"
              name="name"
              error={errors.name ? errors.name.message : ""}
              register={register("name", {
                required: "Имя - это обязательное поле",
              })}
            />
            <FormInput
              label="Фамилия"
              type="text"
              name="surname"
              error={errors.surname ? errors.surname.message : ""}
              register={register("surname", {
                required: "Фамилия - это обязательное поле",
              })}
            />
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

            <div className="flex flex-col  space-y-9">
              <button
                className="btn font-bold text-xs w-min self-end"
                type="submit"
              >
                Продолжить
              </button>
              <div className="h-[1px] w-full bg-text/20"></div>
            </div>
          </form>
          <p className="text-end mt-2 text-sm">
            Уже есть аккаунт?{" "}
            <Link to="/login" className="hover:underline text-primary pl-1">
              Войти
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
