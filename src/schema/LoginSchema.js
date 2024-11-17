import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid Email").required("Full Name is required"),
    password: Yup.string().required("Full Name is required"),
});