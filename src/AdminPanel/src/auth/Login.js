import React, { useEffect } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { LoginSchema } from "../common/Validation";
import { CCol, CRow, CContainer } from "@coreui/react";
import { useNavigate } from "react-router-dom";
// import LogInSvg from "../assets/svg/LogIn.svg";
import "./scss/login.scss";
import { adminAxiosInstance1 } from "../config";
import swal from "sweetalert";

const Login = () => {
  const navigate = useNavigate();
  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin/donation");
    }
  };

  const handleFormSubmit = (values, { setSubmitting }) => {
    var token;
    setTimeout(async () => {
      try {
        const response = await adminAxiosInstance1.post("/login/", {
          ...values,
        });
        token =  response?.data.access;
        localStorage.setItem("token", token);
        setSubmitting(false);
      } catch (error) {
        setSubmitting()
        swal({
          title: error?.response?.data?.detail || "Something went wrong !!",
          icon: "error",
          button: false,
          timer: 1500,
        })
      }
      if (token) {
        navigate("/admin/donation");
      }
    }, 400);
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <>
      <CContainer className="container-custom">
        <div className="d-flex justify-content-center align-items-center center-form">
          <CRow className="bg-white rounded p-3 inner-form shadow">
            <CCol
              className="text-center text-white fw-bolder py-3 login-header"
              xl={12}>
              LogIn
            </CCol>
            <CCol
              xl={6}
              className="d-flex justify-content-center align-items-center form-fields">
              <Formik
                initialValues={{
                  password: "",
                  username:""
                }}
                validationSchema={LoginSchema}
                onSubmit={handleFormSubmit}>
                {({
                  values,
                  errors,
                  handleChange,
                  isSubmitting,
                  handleBlur,
                  touched,
                  handleSubmit,
                }) => (
                  <Form>
                    <div className="form-group mb-3">
                      <label htmlFor="mobile">Username</label>
                      <input
                        type="text"
                        id="username"
                        placeholder="Mobile"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="off"
                        className={`form-control ${
                          errors.username && touched.username ? " is-invalid" : ""
                        }`}
                      />
                      <div className="text-danger">
                        <ErrorMessage name="username" />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        // className="form-control"
                        id="password"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control ${
                          errors.password && touched.password
                            ? " is-invalid"
                            : ""
                        }`}
                      />
                      <div className="text-danger">
                        <ErrorMessage name="password" />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-primary fw-bolder "
                      type="submit"
                      disabled={isSubmitting && isSubmitting}>
                      {isSubmitting ? "Please wait..." : "Submit"}
                    </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </CCol>
            {/* <CCol xl={6}> */}
              {/* <div className="h-100 d-flex justify-content-center align-items-center">
                <img
                  src={LogInSvg}
                  className="img-fluid mt-1 resp-img"
                  alt="login"
                />
              </div> */}
            {/* </CCol> */}
          </CRow>
        </div>
      </CContainer>
    </>
  );
};

export default Login;
