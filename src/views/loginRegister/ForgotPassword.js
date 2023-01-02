import React from "react";
import { useFormik } from "formik";
import "./loginRegister.css";
import { contactSchema } from "../../schemas";
import Title from "../../components/titles/Title";
import InputField from "../../components/Inputfields/InputField";
import { RiErrorWarningFill } from "react-icons/ri";
import Button from "../../components/Inputfields/Button";
import { Link } from "react-router-dom";
const initialValues = {
  email: "",
};
export default function ForgotPassword() {
  const { values, touched, handleChange, errors, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema,
    onSubmit: (values) => {
      //   navigate('/')
      console.log(values);
    },
  });
  console.log(errors);

  return (
    <div className="loginregister-container">
      <Title class="text-center mb-4" heading="Reset your password" />
      <h4 className="text-center mb-5">
        We will send you an email to reset your password
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <InputField
            htmlFor="email"
            type="email"
            id="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && touched.email ? (
            <p className="mt-1 mb-0">
              <RiErrorWarningFill /> {errors.email}
            </p>
          ) : (
            ""
          )}
        </div>
        <Button
          classname="mx-auto d-block mb-4"
          buttonText="Submit "
          type="submit"
        />
      </form>

      <Link className="text-center d-block" to="/account/login">
        Cancel
      </Link>
    </div>
  );
}
