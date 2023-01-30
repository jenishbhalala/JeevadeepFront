import { cilGroup } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CButton, CCol, CRow } from "@coreui/react";
import { ErrorMessage, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { adminAxiosInstance1 } from "../../../config";
import { BecomeVlounteersValidation } from "../../../common/Validation"

const Edit_become_volunteers = () => {
  const [responseData, setResponseData] = useState();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await adminAxiosInstance1.get(`/become-volunteer/${id}`);
      if (response?.status === 200) {
        setResponseData(response.data);
        setStatus(200);
        setLoading(false);
      }
    } catch (error) {
      swal({
        title: error.response.data.message,
        icpn: "error",
      });
    }
  };

  const handleFormSubmit = async (values) => {
    try {
      const response = await adminAxiosInstance1.put(`/become-volunteer/${id}/`, {
        ...values,
      });
      console.log("response", response)
      if (response?.status === 200) {
        setResponseData(response.data)
        swal({
          title: "Become volunter  edited Successfully",
          icon: "success",
          button: false,
          timer: 1500,
        }).then(() => {
          navigate("/admin/become-volunteers");
        })
      } else {
        swal({
          title: "Something went wrong!!",
          icon: "error",
          button: false,
          timer: 1500,
        })
      }
      navigate("/admin/become-volunteers");
    } catch (error) {
      swal({
        title: error.response.data.message,
        icpn: "error",
      });
      // console.log("EERRR", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader-content">
          <div className="spinner-border text-secondary"></div>
        </div>
      ) : (
        <>
          <div className="d-flex">
            <CIcon icon={cilGroup} size="xxl" />
            <h3>Become volunteer Details</h3>
          </div>
          <div>
            <Link
              className="text-decoration-none text-white"
              to="/admin/our-volunteers">
              <button className="text-white btn btn-info">Go Back</button>
            </Link>
          </div>
          <div>
            <Formik
              enableReinitialize={true}
              initialValues={{
                full_name: responseData?.full_name ?? "",
                occupation: responseData?.occupation ?? "",
                birth_date: responseData?.birth_date ?? "",
                address: responseData?.address ?? "",
                message: responseData?.message ?? "",
                number: responseData?.number ?? "",
                email: responseData?.email ?? ""
              }}
              validationSchema={BecomeVlounteersValidation}
              onSubmit={handleFormSubmit}>

              {({ values, handleChange, handleBlur, touched,errors}) => (
                <div className="border-top border-info border-3 bg-white mt-3 p-2">
                  <Form>
                    <CRow>
                      <CCol sm={5}>
                        <div>
                          <div className="form-group mt-3">
                            <label htmlFor="shareName" className="fw-bold mb-2">
                              Name
                            </label>
                            <input
                              type="text"
                              className={'form-control' + (errors.full_name && touched.full_name ? ' is-invalid' : '')}
                              name="full_name"
                              id="name"
                              value={values.full_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          <ErrorMessage name="full_name" component="div" className="invalid-feedback" />
                          </div>

                          <div className="form-group mt-5">
                            <label htmlFor="issueSize" className="fw-bold mb-2">
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

                          <div className="form-group mt-5">
                            <label htmlFor="number" className="fw-bold mb-2">
                              Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="number"
                              id="number"
                              value={values.number}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          <ErrorMessage name="number" component="div" className="invalid-feedback" />
                          </div>

                          <div className="form-group mt-5">
                            <label htmlFor="message" className="fw-bold mb-2">
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

                          <div className="form-group mt-5">
                            <label htmlFor="email" className="fw-bold mb-2">
                              email
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
                          <div className="form-group mt-5">
                            <label htmlFor="birth_date" className="fw-bold mb-2">
                              Birth date
                            </label>
                            <input
                              type="date"
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
                      </CCol>

                      <CRow>
                        <CCol>
                          <div>
                            <CButton
                              type="submit"
                              className="btn btn-info text-white mt-3">
                              Submit
                            </CButton>
                            <CButton
                              type="reset"
                              className="btn btn-light text-dark mt-3 ms-3">
                              Reset
                            </CButton>
                          </div>
                        </CCol>
                      </CRow>
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

export default Edit_become_volunteers;
