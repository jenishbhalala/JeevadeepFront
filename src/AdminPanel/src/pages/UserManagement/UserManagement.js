import { cilGroup } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CButton, CCol, CRow } from "@coreui/react";
import { ErrorMessage, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { addUserSchema } from "../../../common/Validation";
import adminAxiosInstance, { imageAxiosInstance } from "../../../config";

const UserManagement = () => {
  const [imageData, setImageData] = useState();
  const [isFileChanged, setIsFileChanged] = useState(false);
  const [isAdfChanged, setIsAdfChanged] = useState(false);
  const [isAdbChanged, setIsAdbChanged] = useState(false);
  const [isPciChanged, setIsPciChanged] = useState(false);
  const [isBciChanged, setIsBciChanged] = useState(false);
  const [isCmlChanged, setIsCmlChanged] = useState(false);
  const [url, setUrl] = useState(
    "https://www.sandsindia.com/ems/wp-content/uploads/2016/04/dummy-post-horisontal.jpg"
  );
  const [adf, setAdf] = useState(
    "https://www.sandsindia.com/ems/wp-content/uploads/2016/04/dummy-post-horisontal.jpg"
  );
  const [adb, setAdb] = useState(
    "https://www.sandsindia.com/ems/wp-content/uploads/2016/04/dummy-post-horisontal.jpg"
  );
  const [pci, setPci] = useState(
    "https://www.sandsindia.com/ems/wp-content/uploads/2016/04/dummy-post-horisontal.jpg"
  );
  const [bci, setBci] = useState(
    "https://www.sandsindia.com/ems/wp-content/uploads/2016/04/dummy-post-horisontal.jpg"
  );
  const [cml, setCml] = useState(
    "https://www.sandsindia.com/ems/wp-content/uploads/2016/04/dummy-post-horisontal.jpg"
  );
  const [loading, setLoading] = useState(false);
  const [adfLoading, setAdfLoading] = useState(false);
  const [adbLoading, setAdbLoading] = useState(false);
  const [pciLoading, setPciLoading] = useState(false);
  const [bciLoading, setBciLoading] = useState(false);
  const [cmlLoading, setCmlLoading] = useState(false);

  const navigate = useNavigate();

  const uploadFile = async (e) => {
    let file = e.target.files[0];
    setIsFileChanged(true);
    setLoading(true);
    var formdata = new FormData();
    formdata.append("img", file);
    try {
      const response = await imageAxiosInstance.post("/upload", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // console.log(response.data.data);
      setImageData(response?.data.data.mediaLink);
      setLoading(false);
    } catch (error) {
      // console.log(error);
      setLoading(false);
    }
  };

  const uploadAdf = async (e) => {
    let file = e.target.files[0];
    setIsFileChanged(true);
    setAdfLoading(true);
    var formdata = new FormData();
    formdata.append("img", file);
    try {
      const response = await imageAxiosInstance.post("/upload", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // console.log(response.data.data);
      setAdf(response?.data.data.mediaLink);
      setAdfLoading(false);
    } catch (error) {
      // console.log(error);
      setAdfLoading(false);
    }
  };

  const uploadAdb = async (e) => {
    let file = e.target.files[0];
    setIsFileChanged(true);
    setAdbLoading(true);
    var formdata = new FormData();
    formdata.append("img", file);
    try {
      const response = await imageAxiosInstance.post("/upload", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // console.log(response.data.data);
      setAdb(response?.data?.data?.mediaLink);
      setAdbLoading(false);
    } catch (error) {
      // console.log(error);
      setAdbLoading(false);
    }
  };

  const uploadPci = async (e) => {
    let file = e.target.files[0];
    setIsFileChanged(true);
    setPciLoading(true);
    var formdata = new FormData();
    formdata.append("img", file);
    try {
      const response = await imageAxiosInstance.post("/upload", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // console.log(response.data.data);
      setPciLoading(response?.data?.data?.mediaLink);
      setPciLoading(false);
    } catch (error) {
      // console.log(error);
      setPciLoading(false);
    }
  };

  const uploadBci = async (e) => {
    let file = e.target.files[0];
    setIsFileChanged(true);
    setBciLoading(true);
    var formdata = new FormData();
    formdata.append("img", file);
    try {
      const response = await imageAxiosInstance.post("/upload", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // console.log(response.data.data);
      setBciLoading(response?.data.data.mediaLink);
      setBciLoading(false);
    } catch (error) {
      // console.log(error);
      setBciLoading(false);
    }
  };

  const uploadCml = async (e) => {
    let file = e.target.files[0];
    setIsFileChanged(true);
    setCmlLoading(true);
    var formdata = new FormData();
    formdata.append("img", file);
    try {
      const response = await imageAxiosInstance.post("/upload", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // console.log(response.data.data);
      setCml(response?.data?.data?.mediaLink);
      setCmlLoading(false);
    } catch (error) {
      // console.log(error);
      setCmlLoading(false);
    }
  };

  const handleFormSubmit = async (values) => {
    if (isFileChanged) {
      values.profileImage = imageData;
    } else {
      values.profileImage = "";
    }
    if (isAdfChanged) {
      values.kycDetails.aadhaarFrontImage = adf;
    } else {
      values.kycDetails.aadhaarFrontImage = "";
    }
    if (isAdbChanged) {
      values.kycDetails.aadhaarBackImage = adb;
    } else {
      values.kycDetails.aadhaarBackImage = "";
    }
    if (isBciChanged) {
      values.kycDetails.bankCheckImage = bci;
    } else {
      values.kycDetails.bankCheckImage = "";
    }
    if (isPciChanged) {
      values.kycDetails.panCardImage = pci;
    } else {
      values.kycDetails.panCardImage = "";
    }
    if (isCmlChanged) {
      values.kycDetails.cmlUpload = cml;
    } else {
      values.kycDetails.cmlUpload = "";
    }
    values.mobile = `91${values.mobile}`;
    try {
      const response = await adminAxiosInstance.post(`/userManage/add`, {
        ...values,
      });
      // console.log("VVVVVAAAAAAAA", values);
      // console.log("VVVVVAAAAAAAALLLLL", response);

      if (response) {
        swal({
          title: "User uccessfully Added",
          icon: "success",
          button: false,
          timer: 1000,
        }).then(() => {
          navigate("/admin/userlist");
        });
      }
    } catch (error) {
      // console.log("error");
      swal({
        title: error.response.data.message || "Something went wrong!",
        icon: "error",
      });
    }
  };

  useEffect(() => {
    if (imageData !== undefined) {
      setUrl(imageData);
      setLoading(false);
    }
  }, [imageData]);

  return (
    <>
      <div className="d-flex">
        <CIcon icon={cilGroup} size="xxl" />
        <h3>User Details</h3>
      </div>
      <div>
        <Link className="text-decoration-none text-white" to="/admin/userlist">
          <button className="text-white btn btn-info">Go Back</button>
        </Link>
      </div>
      <div>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            mobile: "",
            country: "",
            state: "",
            city: "",
            // isKycUpload: "",
            // isKycCheck: "",
            profileImage: "",
            dpId: "",
            dpName: "",
            clientId: "",
            clientName: "",
            kycDetails: {
              aadhaarFrontImage: "",
              aadhaarBackImage: "",
              panCardImage: "",
              bankCheckImage: "",
              cmlUpload: "",
            },
          }}
          onSubmit={handleFormSubmit}
          validationSchema={addUserSchema}
        >
          {({ values, handleChange, handleBlur }) => (
            <div className="border-top border-info border-3 bg-white mt-3 p-2">
              <h4 className="fw-normal">Enter User Details</h4>
              <Form>
                <CRow>
                  <CCol sm={5}>
                    <div>
                      <div className="form-group mt-3">
                        <label htmlFor="name" className="fw-bold mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="fullName"
                          id="fullName"
                          value={values.fullName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="text-danger">
                        <ErrorMessage name="fullName" />
                      </div>
                      <div className="form-group mt-5">
                        <label htmlFor="mobile" className="fw-bold mb-2">
                          Mobile No.
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="mobile"
                          id="mobile"
                          value={values.mobile}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="text-danger">
                        <ErrorMessage name="mobile" />
                      </div>
                      <div className="form-group mt-5">
                        <label htmlFor="email" className="fw-bold mb-2">
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="text-danger">
                        <ErrorMessage name="email" />
                      </div>
                      <div className="form-group mt-5">
                        <label htmlFor="city" className="fw-bold mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="city"
                          name="city"
                          value={values.city}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="form-group mt-5">
                        <label htmlFor="state" className="fw-bold mb-2">
                          State
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="state"
                          name="state"
                          value={values.state}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="form-group mt-5">
                        <label htmlFor="country" className="fw-bold mb-2">
                          Country
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="country"
                          name="country"
                          value={values.country}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div>
                        {/* <div className="form-group mt-5">
                          <label htmlFor="isKycUpload" className="fw-bold mb-2">
                            KYC Uploaded
                          </label>
                          <select
                            className="form-control"
                            id="isKycUpload"
                            name="isKycUpload"
                            value={values.isKycUpload}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option>Choose</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div> */}
                        {/* <div className="form-group mt-5">
                          <label htmlFor="isKycCheck" className="fw-bold mb-2">
                            KYC Checked
                          </label>
                          <select
                            name="isKycCheck"
                            id="isKycCheck"
                            value={values.isKycCheck}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control"
                          >
                            <option>Choose</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div> */}
                      </div>
                    </div>
                  </CCol>
                  <CCol sm={5} className="mt-5">
                    {loading ? (
                      <div>
                        <img
                          className="img-fluid"
                          src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
                          alt="blog"
                        />
                      </div>
                    ) : (
                      <div className="text-center">
                        <img
                          className="img-fluid max_img_view_admin"
                          src={url}
                          alt="blog"
                        />
                      </div>
                    )}
                    <div className="form-group mt-3">
                      <label htmlFor="featured_image" className="fw-bold mb-2">
                        Profile Image
                      </label>
                      <input
                        type="file"
                        name="featured_image"
                        className="form-control"
                        id="featured_image"
                        accept="image/*"
                        onChange={(e) => {
                          uploadFile(e);
                        }}
                      />
                    </div>

                    <div className="form-group mt-5">
                      <label htmlFor="city" className="fw-bold mb-2">
                        Dp ID
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="dpId"
                        name="dpId"
                        value={values.dpId}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="form-group mt-5">
                      <label htmlFor="city" className="fw-bold mb-2">
                        Dp Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="dpName"
                        name="dpName"
                        value={values.dpName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="form-group mt-5">
                      <label htmlFor="city" className="fw-bold mb-2">
                        Client Id
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="clientId"
                        name="clientId"
                        value={values.clientId}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="form-group mt-5">
                      <label htmlFor="city" className="fw-bold mb-2">
                        Client Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="clientName"
                        name="clientName"
                        value={values.clientName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </CCol>
                  <CRow>
                    <CCol className="mt-5">
                      {adfLoading ? (
                        <div>
                          <img
                            className="img-fluid"
                            src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
                            alt="blog"
                          />
                        </div>
                      ) : (
                        <div className="text-center">
                          <img
                            className="img-fluid max_img_view_admin"
                            src={adf}
                            alt="blog"
                          />
                        </div>
                      )}
                      <div className="form-group mt-3">
                        <label
                          htmlFor="featured_image"
                          className="fw-bold mb-2"
                        >
                          Aadhaar Front Image
                        </label>
                        <input
                          type="file"
                          name="featured_image"
                          className="form-control"
                          id="featured_image"
                          accept="image/*"
                          onChange={(e) => {
                            uploadAdf(e);
                          }}
                        />
                      </div>
                    </CCol>
                    <CCol className="mt-5">
                      {adbLoading ? (
                        <div>
                          <img
                            className="img-fluid"
                            src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
                            alt="blog"
                          />
                        </div>
                      ) : (
                        <div className="text-center">
                          <img
                            className="img-fluid max_img_view_admin"
                            src={adb}
                            alt="blog"
                          />
                        </div>
                      )}
                      <div className="form-group mt-3">
                        <label
                          htmlFor="featured_image"
                          className="fw-bold mb-2"
                        >
                          Aadhaar Back Image
                        </label>
                        <input
                          type="file"
                          name="featured_image"
                          className="form-control"
                          id="featured_image"
                          accept="image/*"
                          onChange={(e) => {
                            uploadAdb(e);
                          }}
                        />
                      </div>
                    </CCol>
                    <CCol className="mt-5">
                      {pciLoading ? (
                        <div>
                          <img
                            className="img-fluid"
                            src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
                            alt="blog"
                          />
                        </div>
                      ) : (
                        <div className="text-center">
                          <img
                            className="img-fluid max_img_view_admin"
                            src={pci}
                            alt="blog"
                          />
                        </div>
                      )}
                      <div className="form-group mt-3">
                        <label
                          htmlFor="featured_image"
                          className="fw-bold mb-2"
                        >
                          Pan Card Image
                        </label>
                        <input
                          type="file"
                          name="featured_image"
                          className="form-control"
                          id="featured_image"
                          accept="image/*"
                          onChange={(e) => {
                            uploadPci(e);
                          }}
                        />
                      </div>
                    </CCol>
                    <CRow className="mt-5">
                      <CCol>
                        {bciLoading ? (
                          <div>
                            <img
                              className="img-fluid"
                              src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
                              alt="blog"
                            />
                          </div>
                        ) : (
                          <div className="text-center">
                            <img
                              className="img-fluid max_img_view_admin"
                              src={bci}
                              alt="blog"
                            />
                          </div>
                        )}
                        <div className="form-group mt-3">
                          <label
                            htmlFor="featured_image"
                            className="fw-bold mb-2"
                          >
                            Bank Check Image
                          </label>
                          <input
                            type="file"
                            name="featured_image"
                            className="form-control"
                            id="featured_image"
                            accept="image/*"
                            onChange={(e) => {
                              uploadBci(e);
                            }}
                          />
                        </div>
                      </CCol>
                      <CCol>
                        {cmlLoading ? (
                          <div>
                            <img
                              className="img-fluid"
                              src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
                              alt="blog"
                            />
                          </div>
                        ) : (
                          <div className="text-center">
                            <img
                              className="img-fluid max_img_view_admin"
                              src={cml}
                              alt="blog"
                            />
                          </div>
                        )}
                        <div className="form-group mt-3">
                          <label
                            htmlFor="featured_image"
                            className="fw-bold mb-2"
                          >
                            CML Upload
                          </label>
                          <input
                            type="file"
                            name="featured_image"
                            className="form-control"
                            id="featured_image"
                            accept="image/*"
                            onChange={(e) => {
                              uploadCml(e);
                            }}
                          />
                        </div>
                      </CCol>
                    </CRow>
                  </CRow>
                </CRow>
                <CCol>
                  <div>
                    <CButton
                      type="submit"
                      className="btn btn-info text-white mt-3"
                    >
                      Submit
                    </CButton>
                    <CButton
                      type="reset"
                      className="btn btn-light text-dark mt-3 ms-3"
                    >
                      Reset
                    </CButton>
                  </div>
                </CCol>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default UserManagement;
