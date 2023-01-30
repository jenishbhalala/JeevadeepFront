import React, { useEffect, useState } from "react";
import CIcon from "@coreui/icons-react";
import { cilGroup } from "@coreui/icons";
import { ErrorMessage, Form, Formik } from "formik";
import { CCol, CRow, CButton } from "@coreui/react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import  { adminAxiosInstance1 } from "../../../config";
import swal from "sweetalert";
import {DonationValllidation} from "../../../common/Validation"
import "./donation.scss"

const EditDonation = () => {
  const [donationValue, setDonationValue] = useState();
  const [loading, setLoading] = useState(false);
  let { id } = useParams();
  id = id.replace(/-/g, " ");

  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await adminAxiosInstance1.get(`/make-donation/${id}/`);
    setDonationValue(response.data);
  };

  const handleFormSubmit = async (values) => {
    const response = await adminAxiosInstance1.put(`/make-donation/${donationValue?.id}/`, {
      ...values,
    });
    console.log("responseresponse",response)
    if (response.status === 200) {
      swal({
        title: "Donation Updated Successfully",
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


  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // console.log("One Blog Data is Here ===> ", data);
    if (donationValue === undefined) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [donationValue]);

  return (
    <>
      {loading ? (
        <div className="loader-content">
          <div className="spinner-border text-secondary"></div>
        </div>
      ) : (
        <>
          {/* <div dangerouslySetInnerHTML={{ __html: data?.content }}></div> */}
          <div className="d-flex">
            <CIcon icon={cilGroup} size="xxl" />
            <h3>Donation Details</h3>
          </div>
          <div>
            <Link className="text-decoration-none text-white" to="/admin/donation">
              <button className="text-white btn btn-info">Go Back</button>
            </Link>
          </div>
          <div>
            <Formik
              enableReinitialize={true}
              initialValues={{
                comment: donationValue?.comment ?? "",
                full_name: donationValue?.full_name?? "",
                email: donationValue?.email ?? "",
                value: donationValue?.value ?? "",
                location: donationValue?.location ?? "",
              }}
              validationSchema={DonationValllidation}
              onSubmit={handleFormSubmit}>
              {({ values, handleChange, handleBlur,errors,touched }) => (
                <div className="border-top border-info border-3 bg-white mt-3 p-2">
                  <Form>
                    <CRow>
                      <CCol sm={5}>

                        <div className="form-group mt-3">
                          <label htmlFor="full_name" className="fw-bold mb-2">
                            Fullname
                          </label>
                          <input
                            type="text"
                            className={'form-control' + (errors.full_name && touched.full_name ? ' is-invalid' : '')}
                            name="full_name"
                            id="full_name"
                            value={values?.full_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage name="full_name" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group mt-3">
                          <label htmlFor="heading" className="fw-bold mb-2">
                            Email
                          </label>
                          <input
                            type="text"
                            className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
                            name="email"
                            id="email"
                            value={values?.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group mt-3">
                          <label htmlFor="comment" className="fw-bold mb-2">
                            Comment
                          </label>
                          <input
                            type="text"
                            className={'form-control' + (errors.comment && touched.comment ? ' is-invalid' : '')}
                            name="comment"
                            id="comment"
                            value={values?.comment}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage name="comment" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group mt-3">
                          <label htmlFor="value" className="fw-bold mb-2">
                            Value
                          </label>
                          <input
                            type="text"
                            className={'form-control' + (errors.value && touched.value ? ' is-invalid' : '')}
                            name="value"
                            id="value"
                            value={values?.value}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage name="value" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group mt-3">
                          <label htmlFor="location" className="fw-bold mb-2">
                            location
                          </label>
                          <input
                            type="text"
                            className={'form-control' + (errors.location && touched.location ? ' is-invalid' : '')}
                            name="location"
                            id="location"
                            value={values?.location}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        <ErrorMessage name="location" component="div" className="invalid-feedback" />
                      </CCol>

                      <CCol sm={12}>
                      </CCol>
                      <CCol>
                        <div>
                          <CButton
                            type="submit"
                            className="btn btn-info text-white mt-3">
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
      )}
    </>
  );
};

export default EditDonation;
