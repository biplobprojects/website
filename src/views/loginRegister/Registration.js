import { useFormik } from "formik";
import React from "react";
import Title from "../../components/titles/Title";
import InputField from "../../components/Inputfields/InputField";
import { RiErrorWarningFill } from "react-icons/ri";
import Button from "../../components/Inputfields/Button";
import { contactSchema } from "../../schemas";
import "./loginRegister.css";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  lastname: "",
  email: "",
  password: "",
};
export default function Registration() {
  const navigate = useNavigate()
  const { values, touched, handleChange, errors, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema,
    onSubmit: (values, ) => {
      navigate('/')
    },
  });

  return (
    <div className="loginregister-container">
      <Title class="text-center mb-4" heading="Create account" />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <InputField
            htmlFor="name"
            type="text"
            id="name"
            label="First name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && touched.name ? (
            <p className="mt-1 mb-0">
              <RiErrorWarningFill /> {errors.name}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
        <InputField
            htmlFor="lastname"
            type="text"
            id="lastname"
            label="Last name"
            value={values.lastname}
            onChange={handleChange}
          />
            {errors.lastname && touched.lastname ? (
            <p className="mt-1 mb-0">
              <RiErrorWarningFill /> {errors.lastname}
            </p>
          ) : (
            ""
          )}
        </div>
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
        </div>

        <Button classname="mx-auto d-block" buttonText="Create " type="submit" />
      </form>
    </div>
  );
}
