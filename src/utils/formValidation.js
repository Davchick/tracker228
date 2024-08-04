import * as yup from "yup";

export const ValidationSchema = yup.object().shape({
  surname: yup
    .string()
    .min(2, "Фамилия должна быть не менее 2 символов")
    .max(45, "Фамилия должна быть менее 45 символов")
    .required("Фамилия - это обязательное поле"),
  password: yup
    .string()
    .min(6, "Пароль должен быть не менее 6 символов")
    .max(40, "Пароль должен быть менее 40 символов")
    .required("Пароль - это обязательное поле"),
  name: yup
    .string()
    .min(2, "Имя должно содержать хотя бы 2 символа")
    .max(40, "Имя должно быть менее 40 символов")
    .required("Имя - это обязательное поле"),
  number: yup
    .string()
    .required("Телефон - это обязательное поле")
});
