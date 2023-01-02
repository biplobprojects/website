import React, { useState } from "react";
import "./Contact.css";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import InputField from "../../components/Inputfields/InputField";
import { useFormik } from "formik";
import { contactSchema } from "../../schemas";
import TextArea from "../../components/Inputfields/TextArea";
import Title from "../../components/titles/Title";
import Button from "../../components/Inputfields/Button";
import { RiErrorWarningFill } from "react-icons/ri";
import success from "../../assets/images/check.png";
const initialValues = {
  name: "",
  email: "",
  number: "",
  comment: "",
};

export default function Contact() {
  const [submitData, setSubmitData] = useState(false);
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: contactSchema,
      onSubmit: (values, action) => {
        console.log(values);
        setSubmitData(true);
        action.resetForm();
      },
    });

  console.log(errors);
  return (
    <div className="contact-container">
      <div className="container">
        <Title class="mb-4" heading="Contact" />
        <form  onSubmit={handleSubmit}>
          {submitData && (
            <h5 className="mb-4">
              <img src={success} alt="Success" className="me-1" />
              Thanks for contacting us. We'll get back to you as soon as
              possible.
            </h5>
          )}
          <Row className="mb-3">
            <Col md={6} className="mb-3 mb-md-0 ">
              <InputField
                htmlFor="name"
                type="text"
                id="name"
                label="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="mt-1 mb-0">
                  <RiErrorWarningFill /> {errors.name}
                </p>
              ) : (
                ""
              )}
            </Col>{" "}
            <Col md={6}>
              <InputField
                htmlFor="email"
                type="email"
                id="email"
                label="Email*"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="mt-1 mb-0">
                  <RiErrorWarningFill /> {errors.email}
                </p>
              ) : (
                ""
              )}
            </Col>
          </Row>
          <div className="mb-3">
            <InputField
              htmlFor="number"
              type="number"
              id="number"
              label="Phone Number"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.number && touched.number ? (
              <p className="mt-1 mb-0">
                <RiErrorWarningFill />
                {errors.number}
              </p>
            ) : (
              ""
            )}
          </div>

          <TextArea
            htmlFor="comment"
            type="text"
            id="comment"
            label="Comment"
            value={values.comment}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* <button type="submit" /> */}
          <Button buttonText="Send" type="submit" />
        </form>
      </div>
    </div>
  );
}
