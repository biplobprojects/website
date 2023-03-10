import { useFormik } from "formik";
import React, { useState, useMemo } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { contactSchema } from "../../schemas";
import InputField from "../Inputfields/InputField";
import { RiErrorWarningFill } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";
import countryList from "react-select-country-list";
import Select from "react-select";
import Button from "../Inputfields/Button";
import "./AddressForm.css";

const initialValues = {
  name: "",
  number: "",
  company: "",
  select: "",
  postalcode: "",
  company: "",
  lastname: "",
  address1: "",
  address2: "",
  city: "",
};
export default function AddressForm() {
  const options1 = useMemo(() => countryList().getData(), []);
// const [FieldValue, setFieldValue] = useState()
const [options, setOptions] = useState(options1);
const defaultValue = (options, value) => {
  console.log("value here", value);
  return options ? options.find(option => option.value === value) : "";
};
  const [value, setValue] = useState("");
  const handleAddOption = () => {
    // this is where I can change the select value but nothing happens,
    // due to react-select does not have a name attribute I can`t find a way
    // change the defaultValue externaly
    // also tried to add an object
    setOptions([...options, { label: "test option", value: "test option" }]);
    return setFieldValue("select", "test option");
  };
  const [submitData, setSubmitData] = useState(false);
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, action) => {
      console.log(values);
      setSubmitData(true);
      action.resetForm();
    },
  });
  const changeHandler = (value) => {
    setValue(value);
  };

  console.log(values.select)
  return (
    <div className="address-form">
      <form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6} className="mb-3 mb-md-0 ">
            <InputField
              htmlFor="name"
              type="text"
              id="name"
              label="First Name"
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
              htmlFor="lastname"
              type="text"
              id="lastname"
              label="Last Name*"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastname && touched.lastname ? (
              <p className="mt-1 mb-0">
                <RiErrorWarningFill /> {errors.lastname}
              </p>
            ) : (
              ""
            )}
          </Col>
        </Row>
        <div className="mb-3">
          <InputField
            htmlFor="company"
            type="text"
            id="company"
            label="Company"
            value={values.company}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="mb-3">
          <InputField
            htmlFor="address1"
            type="text"
            id="address1"
            label="Address 1"
            value={values.address1}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="mb-3">
          <InputField
            htmlFor="address2"
            type="text"
            id="address2"
            label="Address 2"
            value={values.address2}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="mb-3">
          <InputField
            htmlFor="city"
            type="text"
            id="city"
            label="City"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="mb-3">
          <Select
          value={defaultValue(options, values.select)}
          options={options}
            placeholder="Select Country/Region"
            id="select"
            onChange={newValue => setFieldValue("select", newValue.value)}  
                  />
        </div>
        <div className="mb-3">
          <InputField
            htmlFor="postalcode"
            type="number"
            id="postalcode"
            label="Postal/ZIP code"
            value={values.postalcode}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="mb-3">
          <InputField
            htmlFor="number"
            type="number"
            id="postalcode"
            label="Phone"
            value={values.number}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <label className="mb-4">
          <input
            type="checkbox"
            // name="filter"
            // onChange={() => setInStock(!InStock)}
            // checked={InStock}
          />
          Set as default address
        </label>
        <div className="address-button-container">
          <Button buttonText="Add Address" type="submit" />
          <Button
            classname="reset-btn ms-4 d-inline-block"
            buttonText="Cancel"
            type="reset"
            onClick={() => {
              resetForm();
              window.scrollTo(0, 0);
            }}
          />
        </div>
      </form>
    </div>
  );
}
