import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import "./loginRegister.css";
import { contactSchema } from "../../schemas";
import Title from "../../components/titles/Title";
import InputField from "../../components/Inputfields/InputField";
import { RiErrorWarningFill } from "react-icons/ri";
import Button from "../../components/Inputfields/Button";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

const initialValues = {
  email: "",
  password: "",
};
export default function Login() {
  const navigate = useNavigate();

  const [loginSuccess, setLoginSucess] = useState();
  const { values, touched, handleChange, errors, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema,
    onSubmit: (values) => {
      if (
        values.email == "test@gmail.com" &&
        values.password == "Ganpatihanuman"
      ) {
        localStorage.setItem("email", "test@gmail.com");
        localStorage.setItem("id", "123");
        navigate("/");
      }
    },
  });
  useEffect(() => {
    let id = localStorage.getItem("id");
    setLoginSucess(id);
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("id", "123");
    navigate("/");
  };
  return (
    <div className="container loginregister-container">
      {!loginSuccess ? (
        <>
          <div className="loginForm-container">
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
                buttonText="Sign In "
                type="submit"
              />
              <Link className="text-center d-block" to="/account/register">
                Create account
              </Link>
            </form>
          </div>
        </>
      ) : (
        <div className="account-details ">
          <div className="d-flex justify-content-between align-items-baseline">
            <Title class="mb-0" heading="Account" />
            <p>
              <AiOutlineUser />
              <span
                onClick={logoutHandler}
                className="d-inline-block ms-1 link"
              >
                Log out
              </span>
            </p>
          </div>
          <div className="d-md-flex mt-5 detail-container">
            <div className="flex-grow-1 mb-md-0 mb-5">
              <Title class="headings mb-3" heading="Order history" />
              <p>You haven't placed any orders yet.</p>
            </div>
            <div>
              <Title class="headings mb-3" heading="Account details" />
              <p className="mb-2">test test</p>
              <p className="mb-2">India</p>
              <Link to="/account/addressess" className="mt-3 d-inline-block">
                <p>View addresses (1)</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
