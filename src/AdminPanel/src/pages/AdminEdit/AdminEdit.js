import CIcon from "@coreui/icons-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cilGroup } from "@coreui/icons";
import { CButton, CCol, CRow } from "@coreui/react";
// import { number } from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import adminAxiosInstance from "../../config";
import { EditAdminSchema } from "./adminEditSchema";

// import errorImCOage from "../../assets/errorImage.jpg";

const AdminEdit = () => {
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("token");
  const [isFileChanged, setIsFileChanged] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [profileImg, setProfileImg] = useState("");

  const adminToken = localStorage.getItem("token");

  const navigate = useNavigate();

  const fetchProfileData = async () => {
    // setLoading(true);
    try {
      const response = await adminAxiosInstance.get(`/adminData/get`, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      // console.log(response.data.data);
      setData(response.data.data);
      setUrl(response.data?.data?.profileImage);
      // setLoading(false);
    } catch (error) {
      setData([]);
      // setLoading(false);
      setError(error.response.data.message);
    }
  };

  const uploadImg = async (e) => {
    setUrl(data?.profileImage);
    let file = e.target.files[0];
    setIsFileChanged(true);
    setImageLoading(true);
    var formdata = new FormData();
    formdata.append("img", file);
    try {
      // const response = await imageAxiosInstance.post("/upload", formdata, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
      // console.log("img link", response.data);
      // if (response.status === 200) {
      //   setProfileImg(response?.data.data?.mediaLink);
      //   setUrl(response?.data.data?.mediaLink);
      //   setImageLoading(false);
      // }
      // console.log(response.data.data.mediaLink);
    } catch (error) {
      alert("Please select the image");
      setProfileImg("");
      // console.log(error);
      setImageLoading(false);
    }
  };

  const handleFormSubmit = async (values, { resetForm }) => {
    // console.log("values ===>", values);
    values.profileImage = profileImg ? profileImg : data?.profileImage;
    try {
      const response = await adminAxiosInstance.put(
        `/adminData/update/`,
        {
          ...values,
        },
        {
          headers: { Authorization: `Bearer ${adminToken}` },
        }
      );
      // console.log("response ==>", response);
      if (response.status === 200) {
        // console.log("data submitted =>", response.data);
        alert("data submitted successfully");
        // resetForm({

        // })
        navigate("/admin/dashboard");
      }
    } catch (err) {
      // console.log("err =>", err);
      alert("something went wrong");
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  // useEffect(() => {
  //   if (profileImg !== undefined) {
  //     setUrl(profileImg);
  //     setLoading(false);
  //   }
  // }, [profileImg]);

  return (
    <>
      <div className="d-flex">
        <CIcon icon={cilGroup} size="xxl" />
        <h3>Edit Admin Profile</h3>
      </div>
      <div>
        <Link className="text-decoration-none text-white" to="/admin/dashboard">
          <button className="text-white btn btn-info">Go Back</button>
        </Link>
      </div>

      <Formik
        enableReinitialize={true}
        validationSchema={EditAdminSchema}
        initialValues={{
          fullName: data?.fullName || "",
          mobile: data?.mobile || "",
          email: data?.email || "",
          country: data?.country || "",
          state: data?.state || "",
          city: data?.city || "",
          profileImage: "",
        }}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          // errors,
          handleChange,
          // isSubmitting,
          handleBlur,
          // touched,
          // handleSubmit,
          // isValid,
          // setFieldValue,
        }) => (
          <Form>
            <div>
              <div className="border-top border-info border-3 bg-white mt-3 p-2">
                <h4 className="fw-normal">Enter Profile Details</h4>
                <CRow>
                  <CCol sm={6}>
                    <div>
                      <div className="form-group mt-3">
                        <label htmlFor="title" className="fw-bold mb-2">
                          Full Name
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          name="fullName"
                          placeholder="Full Name."
                          id="fname"
                        />
                        <div className="text-danger">
                          <ErrorMessage name="fullName" />
                        </div>
                      </div>
                      <div className="form-group mt-4">
                        <label htmlFor="link" className="fw-bold mb-2">
                          Mobile No.
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          name="mobile"
                          placeholder="Mobile No."
                          id="lname"
                        />
                        <div className="text-danger">
                          <ErrorMessage name="mobile" />
                        </div>
                      </div>
                      <div className="form-group mt-4">
                        <label htmlFor="description" className="fw-bold mb-2">
                          Email
                        </label>
                        <Field
                          className="form-control"
                          id="pnum"
                          name="email"
                          placeholder="Email."
                          rows={6}
                        />
                        <div className="text-danger">
                          <ErrorMessage name="email" />
                        </div>
                      </div>
                      <div className="form-group mt-4">
                        <label htmlFor="description" className="fw-bold mb-2">
                          Country
                        </label>
                        <Field
                          className="form-control"
                          id="ccountry"
                          name="country"
                          placeholder="Country."
                          rows={6}
                        />
                        <div className="text-danger">
                          <ErrorMessage name="country" />
                        </div>
                      </div>
                      <div className="form-group mt-4">
                        <label htmlFor="description" className="fw-bold mb-2">
                          State
                        </label>
                        <Field
                          className="form-control"
                          id="cstate"
                          name="state"
                          placeholder="State."
                          rows={6}
                        />
                        <div className="text-danger">
                          <ErrorMessage name="state" />
                        </div>
                      </div>
                      <div className="form-group mt-4">
                        <label htmlFor="description" className="fw-bold mb-2">
                          City
                        </label>
                        <Field
                          className="form-control"
                          id="ccity"
                          name="city"
                          placeholder="City."
                          rows={6}
                        />
                        <div className="text-danger">
                          <ErrorMessage name="city" />
                        </div>
                      </div>
                    </div>
                  </CCol>
                  <CCol sm={6} className="mt-3">
                    <div className="text-center">
                      {imageLoading ? (
                        <div>
                          <img
                            className="img-fluid"
                            src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
                            alt="blog"
                          />
                        </div>
                      ) : (
                        <img
                          draggable="false"
                          className="img-thumbnail max_img_view_admin"
                          src={url}
                          alt="default image"
                        />
                      )}
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="featured_image" className="fw-bold mb-2">
                        Edit Your profile Image
                      </label>
                      <input
                        type="file"
                        name="profileImage"
                        value={values.profileImage}
                        className="form-control"
                        onChange={(e) => {
                          uploadImg(e);
                          handleChange(e);
                        }}
                        onFocus={handleBlur}
                        id="featured_image"
                        accept="image/*"
                      />
                      <div className="text-danger">
                        <ErrorMessage name="profileImage" />
                      </div>
                    </div>
                  </CCol>
                  <CCol>
                    <div>
                      <CButton
                        type="submit"
                        className="btn btn-info text-white mt-3"
                      >
                        Submit
                      </CButton>
                    </div>
                  </CCol>
                </CRow>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AdminEdit;
