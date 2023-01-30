import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { SignUpSchema } from "../../common/Validation";
import { CCol, CContainer, CRow } from "@coreui/react";
import adminAxiosInstance from "../../config";
import signupSvg from "../assets/svg/signup.svg";
import { Link, useNavigate } from "react-router-dom";
import "./scss/signup.scss";

const SignupForm = () => {
  const [imageData, setImageData] = useState();
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(
    "https://www.sandsindia.com/ems/wp-content/uploads/2016/04/dummy-post-horisontal.jpg"
  );
  const navigate = useNavigate();

  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin");
    }
  };
  const uploadFile = async (e) => {
    let file = e.target.files[0];
    if (file !== undefined) {
      // console.log(file);
      setLoading(true);
      var formdata = new FormData();
      formdata.append("img", file);
      // console.log(formdata);
      // const response = await imageAxiosInstance.post("/upload", formdata, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
      // setImageData(response.data?.data);
    }
  };

  useEffect(() => {
    if (imageData?.mediaLink !== undefined) {
      setUrl(imageData?.mediaLink);
      setLoading(false);
    }
  }, [imageData]);

  const handleFormSubmit = (values, { setSubmitting }) => {
    // console.log("values", values);
    setTimeout(async () => {
      // alert(JSON.stringify(values, null, 2));
      const response = await adminAxiosInstance.post("/auth/register", {
        ...values,
      });
      // console.log("response", response?.data);
      setSubmitting(false);
      navigate("/admin/login");
    }, 400);
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <CContainer className="container-custom">
      <div className="mt-auto d-flex justify-content-center align-items-center center-form">
        <CRow className="bg-white rounded p-3 inner-form shadow">
          <CCol
            className="text-center text-white fw-bolder py-3 bg-secondary"
            xl={12}
          >
            Sign Up
          </CCol>
          <CCol xl={6} className="py-2">
            <Formik
              initialValues={{
                fullName: "",
                mobile: "",
                email: "",
                country: "",
                state: "",
                city: "",
                password: "",
                profileImage: "",
              }}
              validationSchema={SignUpSchema}
              onSubmit={handleFormSubmit}
            >
              {({
                values,
                errors,
                handleChange,
                isSubmitting,
                handleBlur,
                touched,
                handleSubmit,
              }) => (
                <>
                  <Form>
                    <div className="form-group mb-3">
                      <label htmlFor="Full Name">Full Name</label>
                      <input
                        type="text"
                        // className="form-control"
                        id="name"
                        placeholder="Name"
                        name="fullName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control${
                          errors.fullName && touched.fullName
                            ? " is-invalid"
                            : ""
                        }`}
                      />
                      <div className="text-danger">
                        <ErrorMessage name="fullName" />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="mobile">Mobile</label>
                      <input
                        type="text"
                        id="mobile"
                        placeholder="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control${
                          errors.mobile && touched.mobile ? " is-invalid" : ""
                        }`}
                      />
                      <div className="text-danger">
                        <ErrorMessage name="mobile" />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control${
                          errors.email && touched.email ? " is-invalid" : ""
                        }`}
                      />
                      <div className="text-danger">
                        <ErrorMessage name="email" />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="country">Country</label>
                      <input
                        type="text"
                        id="country"
                        placeholder="Country"
                        name="country"
                        value={values.country}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control${
                          errors.country && touched.country ? " is-invalid" : ""
                        }`}
                      />
                      <div className="text-danger">
                        <ErrorMessage name="country" />
                      </div>
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        id="state"
                        placeholder="State"
                        name="state"
                        value={values.state}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control${
                          errors.state && touched.state ? " is-invalid" : ""
                        }`}
                      />
                      <div className="text-danger">
                        <ErrorMessage name="state" />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        id="city"
                        placeholder="City"
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control${
                          errors.city && touched.city ? " is-invalid" : ""
                        }`}
                      />
                      <div className="text-danger">
                        <ErrorMessage name="city" />
                      </div>
                    </div>
                    {loading ? (
                      <div className="text-center">
                        <img
                          className="img-fluid max_img_view_admin"
                          src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
                          alt="blog"
                        />
                      </div>
                    ) : (
                      <div className="text-center">
                        <img
                          className="img-fluid max_img_view_admin"
                          src={url}
                          alt="pImage"
                        />
                      </div>
                    )}
                    <div className="form-group mt-3">
                      <label htmlFor="profileImage" className="fw-bold mb-2">
                        Profile Image
                      </label>
                      <input
                        type="file"
                        name="profileImage"
                        className="form-control"
                        id="profileImage"
                        accept="image/*"
                        value={values.profileImage}
                        onChange={(e) => {
                          uploadFile(e);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="password">Password</label>
                      <input
                        type="text"
                        id="password"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control${
                          errors.password && touched.password
                            ? " is-invalid"
                            : ""
                        }`}
                      />
                      <div className="text-danger">
                        <ErrorMessage name="password" />
                      </div>
                    </div>

                    <button
                      className="btn btn-primary fw-bolder"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Please wait..." : "Submit"}
                    </button>
                    <div className="mb-2 mt-3 fw-bold">
                      Already have an account?
                      <Link className="text-decoration-none" to="/admin/login">
                        {" "}
                        Login here
                      </Link>
                    </div>
                    {/* <button type="reset"> Reset</button> */}
                  </Form>
                </>
              )}
            </Formik>
          </CCol>
          <CCol xl={6}>
            <div className="h-100 d-flex align-items-center justify-content-center signup-svg">
              <img src={signupSvg} alt="" className="resp-img" />
            </div>
          </CCol>
        </CRow>
      </div>
    </CContainer>
  );
};

export default SignupForm;
