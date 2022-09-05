import * as Yup from "yup";

export const RegisterSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  gym_name:Yup.string().required("Please enter your gym name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  address:Yup.string().required("Please enter your address"),
  city:Yup.string().required("Please enter your city name"),
  pin_code:Yup.string().min(6).required("Please enter your pin code"),
  state_name:Yup.string().required("Please enter state name"),
});