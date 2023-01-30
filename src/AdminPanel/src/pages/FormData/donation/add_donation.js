import React, { useState } from "react";
import CIcon from "@coreui/icons-react";
import { cilGroup } from "@coreui/icons";
import { ErrorMessage, Form, Formik } from "formik";
import { CButton, CCol, CRow } from "@coreui/react";
import { Link, useNavigate } from "react-router-dom";
import { adminAxiosInstance1 } from "../../../config";
import swal from "sweetalert";
import { DonationValllidation } from "../../../common/Validation";
import "./donation.scss"

const AddDonation = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (values) => {
    const response = await adminAxiosInstance1.post(`/make-donation/`, {
      ...values,
    });
    if (response.status === 201) {
      swal({
        title: "Donation added Successfully",
        icon: "success",
        button: false,
        timer: 1500,
      }).then(() => {
        navigate("/admin/donation");
      })
      navigate("/admin/donation");
    } else {
      swal({
        title: "Something went wrong!!",
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
        <h3>Donation Details</h3>
      </div>
      <div>
        <Link className="text-decoration-none text-white" to="/admin/donation">
          <CButton className="btn btn-color text-white mt-3">Go Back</CButton>
        </Link>
      </div>
      <div>
        <Formik
          initialValues={{
            comment: "",
            full_name: "",
            email: "",
            value: "",
            location: "",
          }}
          onSubmit={handleFormSubmit}
          validationSchema={DonationValllidation}
        >
          {({ values, handleChange, handleBlur, errors, touched, isSubmitting }) => (
            <div className="bg-white mt-3 p-2" style={{borderTop:"2px solid #622cc4"}}>
              {console.log("errors",errors)}
              <Form>
                <CRow>
                  {console.log("errors", errors)}
                  <CCol sm={5} className="px-4">
                    <div>
                      {console.log("values", values)}
                      <div className="form-group mt-2">
                        <label htmlFor="heading" className="fw-bold mb-2 text-purpal">
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
                      <div className="form-group mt-2">
                        <label htmlFor="Email" className="fw-bold mb-2 text-purpal">
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
                      <div className="form-group mt-2">
                        <label htmlFor="location" className="fw-bold mb-2 text-purpal">
                          Location
                        </label>
                        <input
                          type="text"
                          className={'form-control' + (errors.location && touched.location ? ' is-invalid' : '')}
                          name="location"
                          id="location"
                          value={values.location}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                          <ErrorMessage name="location" component="div" className="invalid-feedback" />
                      </div>
                    </div>
                    <div>
                      <div className="form-group mt-2">
                        <label htmlFor="Comment" className="fw-bold mb-2 text-purpal">
                          Comment
                        </label>
                        <input
                          type="text"
                          className={'form-control' + (errors.comment && touched.comment ? ' is-invalid' : '')}
                          name="comment"
                          id="comment"
                          value={values.comment}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                          <ErrorMessage name="comment" component="div" className="invalid-feedback" />
                      </div>
                    </div>
                    <div>
                      <div className="form-group mt-2">
                        <label htmlFor="Value" className=" text-purpal fw-bold mb-2">
                          Value
                        </label>
                        <input
                          type="number"
                          className={'form-control' + (errors.value && touched.value ? ' is-invalid' : '')}
                          name="value"
                          id="value"
                          value={values.value || ""}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      <ErrorMessage name="value" component="div" className="invalid-feedback" />
                      </div>
                    </div>

                    <div>
                      <CButton
                        disabled={isSubmitting && isSubmitting}
                        type="submit"
                        className="btn btn-color text-white mt-3">
                        Submit
                      </CButton>
                      {/* <CButton
                        type="reset"
                        className="btn btn-light text-dark mt-3 ms-3">
                        Reset
                      </CButton> */}
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

export default AddDonation;
