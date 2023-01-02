import * as Yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const contactSchema = Yup.object({
  name: Yup.string().min(4).max(40),
  lastname: Yup.string().min(1).max(40),
  email: Yup.string().email().required("Please enter your email"),
  number: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  Comment: Yup.string(),
  password: Yup.string().min(10).max(20).required("Password is required"),
});
