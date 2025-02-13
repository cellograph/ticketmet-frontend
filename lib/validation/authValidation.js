import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Need a valid email.")
    .trim()
    .lowercase(),
  password: yup.string().required("password is required"),
});
