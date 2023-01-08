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
  password: "",
};

export default function Login() {
  const { values, touched, handleChange, errors, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema,
    onSubmit: (values) => {
      //   navigate('/')
    //   if(values.email == TEST ){
    //     localStorage.setItem('Name', 'TEST');
    //     localStrorage.setItem('id',"123");

    // }
    },
  });
  

  // let id = localStorage.getitem("id");
  // setloginsuccess(id);l

  return (
    <div className="loginregister-container">
      <Title class="text-center mb-4" heading="Login" />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
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
        <div className="mb-5">
          <InputField
            htmlFor="password"
            type="password"
            id="password"
            label="Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && touched.password ? (
            <p className="mt-1 mb-0">
              <RiErrorWarningFill /> {errors.password}
            </p>
          ) : (
            ""
          )}
          <Link to="/account/recover" className="d-block mt-2">
            Forgot your password?
          </Link>
        </div>

        <Button
          classname="mx-auto d-block mb-4"
          buttonText="Create "
          type="submit"
        />
        <Link className="text-center d-block" to="/account/register">
          Create account
        </Link>
      </form>
    </div>
  );
}
