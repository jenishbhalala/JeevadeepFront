import { cilGroup } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CButton, CCol, CRow } from "@coreui/react";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import adminAxiosInstance from "../../../config";

const EditUserManagement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const fetchData = async (values) => {
    try {
      const response = await adminAxiosInstance.get(`/userManage/byId/${id}`, {
        ...values,
      });
      // console.log("Edit response===>", response.data.data)
      setData(response.data.data);
    } catch (error) {
      // console.log(error.response.data.message)
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleFormSubmit = async (values) => {
    // console.log(values)
    try {
      const response = await adminAxiosInstance.put(
        `/userManage/update/${id}`,
        {
          ...values,
        }
      );
      // console.log("Edited  ;;;", response);
      swal({
        title: "Data Updated Successfully",
        icon: "success",
        button: false,
        timer: 1000,
      }).then(() => {
        navigate("/admin/userlist");
      });
    } catch (error) {
      // console.log(error.response.data.message)
      swal({
        title: error.response.data.message || "Something went wrong!",
        icon: "error",
      });
    }
  };

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
          enableReinitialize={true}
          initialValues={{
            fullName: data?.fullName,
            mobile: data?.mobile,
            email: data?.email,
            country: data?.country,
            state: data?.state,
            city: data?.city,
            dpId: data?.dpId,
            dpName: data?.dpName,
            clientId: data?.clientId,
            clientName: data?.clientName,
            watchList: data?.watchList,
            // isGoogle: data?.isGoogle,
            isAssign: data?.isAssign,
            isKycUpload: data?.isKycUpload,
            isKycCheck: data?.isKycCheck,
          }}
          onSubmit={handleFormSubmit}
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
                      <div className="form-group mt-5">
                        <label htmlFor="watchlist" className="fw-bold mb-2">
                          Watch List
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="watchlist"
                          name="watchlist"
                          value={values.watchlist}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                  </CCol>
                  <CCol sm={5}>
                    <div>
                      {/* <div className="form-group mt-5">
                        <label htmlFor="isGoogle" className="fw-bold mb-2">
                          Google Authenticated
                        </label>
                        <select
                          className="form-control"
                          id="isGoogle"
                          name="isGoogle"
                          value={values.isGoogle}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabled
                        >
                        <option>Choose</option>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                        </select>
                      </div> */}
                      <div className="form-group mt-3">
                        <label htmlFor="isAssign" className="fw-bold mb-2">
                          Assigned
                        </label>
                        <select
                          className="form-control"
                          id="isAssign"
                          name="isAssign"
                          value={values.isAssign}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabled
                        >
                          <option>Choose</option>
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                      </div>
                      <div className="form-group mt-5">
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
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                      </div>
                      <div className="form-group mt-5">
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
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
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
                    </div>
                  </CCol>
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

export default EditUserManagement;
