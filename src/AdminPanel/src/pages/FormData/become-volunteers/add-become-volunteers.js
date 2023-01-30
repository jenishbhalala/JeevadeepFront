import React, { useState, useEffect } from "react";
import CIcon from "@coreui/icons-react";
import { cilGroup } from "@coreui/icons";
import { ErrorMessage, Form, Formik, useFormik } from "formik";
import { CButton, CCol, CRow } from "@coreui/react";
import { Link, useNavigate } from "react-router-dom";
import { adminAxiosInstance1 } from "../../../config";
import * as Yup from "yup"
import swal from "sweetalert";
// import { SourceEditing } from "@ckeditor/ckeditor5-source-editing";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { BecomeVlounteersValidation } from "../../../common/Validation";
const Add_become_volunteers = () => {
  const navigate = useNavigate();



  const handleFormSubmit = async (values) => {
    try{
    const response = await adminAxiosInstance1.post(`/become-volunteer/`, {
      ...values,
    });
    console.log("response-------------", response.error)
    console.log("response", response)
    if (response.status === 201) {
      swal({
        title: "Become volunteer added Successfully",
        icon: "success",
        button: false,
        timer: 1500,
      }).then(() => {
        navigate("/admin/become-volunteers");
      })
      navigate("/admin/become-volunteers");
    } else {
      swal({
        title: "Something went wrong!!",
        icon: "error",
        button: false,
        timer: 1500,
      })
    }
  }catch(err){
    console.log("err=========",err.response.data[values])
    swal({
      title: err.response.email || err.response.number ||"Something went wrong !!",
      icon: "error",
      button: false,
      timer: 1500,
    })
  }
  };

  return (
    <>
      <div className="d-flex">
        <CIcon icon={cilGroup} size="xxl" />
        <h3>Become volunteer Details</h3>
      </div>
      <div>
        <Link className="text-decoration-none text-white" to="/admin/become-volunteers">
          <button className="text-white btn btn-color">Go Back</button>
        </Link>
      </div>
      <div>
        <Formik
          initialValues={{
            full_name: "",
            address: "",
            birth_date: "",
            email: "",
            number: "",
            occupation: "",
            message: ""
          }}
          onSubmit={handleFormSubmit}
          validationSchema={BecomeVlounteersValidation}
        >
          {({ values, handleChange, handleBlur, errors, touched, isSubmitting, setFieldValue }) => (
            <div className="border-top border-info border-3 bg-white mt-3 p-2">
              <Form>
                <CRow>
                  {console.log("errors", errors)}
                  <CCol sm={5}>
                    <div>
                      {console.log("values", values)}
                      <div className="form-group mt-5">
                        <label htmlFor="heading" className="fw-bold mb-2">
                          Fullname
                        </label>
                        <input
                          type="text"
                          className={'form-control' + (errors.full_name && touched.full_name ? ' is-invalid' : '')}
                          name="full_name"
                          id="full_name"
                          value={values.full_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage name="full_name" component="div" className="invalid-feedback" />
                      </div>
                    </div>
                    <div>
                      <div className="form-group mt-5">
                        <label htmlFor="Email" className="fw-bold mb-2">
                          Email
                        </label>
                        <input
                          type="text"
                          className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
                          name="email"
                          id="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                      </div>
                    </div>
                    <div>
                      <div className="form-group mt-5">
                        <label htmlFor="Email" className="fw-bold mb-2">
                          Occupation
                        </label>
                        <input
                          type="text"
                          className={'form-control' + (errors.occupation && touched.occupation ? ' is-invalid' : '')}
                          name="occupation"
                          id="occupation"
                          value={values.occupation}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage name="occupation" component="div" className="invalid-feedback" />
                      </div>
                    </div>
                    <div>
                      <div className="form-group mt-5">
                        <label htmlFor="Email" className="fw-bold mb-2">
                          Number
                        </label>
                        <PhoneInput
                          country={"us"}
                          value="1425652"
                          onChange={phone =>  setFieldValue('number', "+"+ phone)}
                        />

                        <ErrorMessage name="number" component="div" className="invalid-feedback" />
                      </div>
                    </div>
                    <div>
                      <div className="form-group mt-5">
                        <label htmlFor="address" className="fw-bold mb-2">
                          Address
                        </label>
                        <input
                          type="text"
                          className={'form-control' + (errors.address && touched.address ? ' is-invalid' : '')}
                          name="address"
                          id="address"
                          value={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage name="address" component="div" className="invalid-feedback" />
                      </div>
                    </div>
                    <div>
                      <div className="form-group mt-5">
                        <label htmlFor="birth_date" className="fw-bold mb-2">
                          Birthdate
                        </label>
                        <input
                          type="date"
                          dateFormat="YYYY-MM-DD"
                          className={'form-control' + (errors.birth_date && touched.birth_date ? ' is-invalid' : '')}
                          name="birth_date"
                          id="birth_date"
                          value={values.birth_date}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage name="birth_date" component="div" className="invalid-feedback" />
                      </div>
                    </div>
                    <div>
                      <div className="form-group mt-5">
                        <label htmlFor="Message" className="fw-bold mb-2">
                          Message
                        </label>
                        <input
                          type="text"
                          className={'form-control' + (errors.message && touched.message ? ' is-invalid' : '')}
                          name="message"
                          id="message"
                          value={values.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                       <ErrorMessage name="message" component="div" className="invalid-feedback" />
                      </div>
                    </div>
                    <div>
                      <CButton
                        disabled={isSubmitting}
                        type="submit"
                        className="btn btn-color text-white mt-3">
                        Submit
                      </CButton>
                    </div>
                  </CCol>
                </CRow>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Add_become_volunteers;
