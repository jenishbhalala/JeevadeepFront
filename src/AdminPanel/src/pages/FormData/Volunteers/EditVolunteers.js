import { cilGroup } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CButton, CCol, CRow } from "@coreui/react";
import { ErrorMessage, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import {  ourvoluntersValidation } from "../../../common/Validation";
import { adminAxiosInstance1 } from "../../../config";

const EditVolunteers = () => {
  const [responseData, setResponseData] = useState();
  const [imageData, setImageData] = useState();
  const [isFileChanged, setIsFileChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [url, setUrl] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await adminAxiosInstance1.get(
        `/our-volunteers/${id}/`
      );
      console.log("response", response)
      if (response.status === 200) {
        setResponseData(response.data);
      }
    } catch (error) {
      swal({ title: "something went wrong", icon: "success", button: false,timer: 1500,  })
      // console.log(error);
    }
  };

  const uploadFile = async (e) => {
    let file = e.target.files[0];
    setImageData(file);
    setIsFileChanged(true)
    console.log("imageeee", file)
    if (file.name !== undefined) {
      setUrl(URL.createObjectURL(file));
      setLoading(false);
    }
  };
  console.log("isFileChanged", isFileChanged)
  const handleFormSubmit = async (values) => {
    console.log("values------>",values)
    var formdata = new FormData();
    formdata.append("image", url);
    formdata.append("name", values.name);
    formdata.append("occupation", values.occupation);
    console.log("valuesss",values,imageData)
    console.log("formData---",formdata)
    try {
      const response = await adminAxiosInstance1.put(`/our-volunteers/${id}/`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });
      if(response.status === 204){
        swal({ title: "volunteers edited successfully", icon: "success", button: false,timer: 1500,  })
      }
      navigate("/admin/our-volunteers");
    } catch (error) {
      swal({ title: "Something went wrong", icon: "error", button: false,timer: 1500,  })
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
            <h3>Our volunteers Details</h3>
          </div>
          <div>
            <Link
              className="text-decoration-none text-white"
              to="/admin/our-volunteers">
              <button className="text-white btn btn-color">Go Back</button>
            </Link>
          </div>
          <div>
            <Formik
              enableReinitialize={true}
              initialValues={{
                name: responseData?.name,
                occupation: responseData?.occupation,
                image: responseData?.image ,
              }}
              validationSchema={ourvoluntersValidation}
              onSubmit={handleFormSubmit}>
              {({ values, handleChange, handleBlur, setFieldValue,errors,touched }) => (
                <div className=" bg-white mt-3 p-2" style={{borderTop:"2px solid #622ccd"}}>
                  <h4 className="fw-normal">Enter volunteers Details</h4>
                  <Form>
                    <CRow>
                      {console.log("valuesssss",isFileChanged && url ? url : values.image)}
                      <CCol sm={5}>
                        <div>
                          <div className="form-group mt-3">
                            <label htmlFor="shareName" className="fw-bold mb-2">
                              Name
                            </label>
                            {/* {console.log("valuessssssss",values)} */}
                            <input
                              type="text"
                              className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')}
                              name="name"
                              id="name"
                              value={values.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <ErrorMessage name="name" component="div" className="invalid-feedback" />

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
                        </div>
                      </CCol>
                      <CCol sm={5} className="mt-3">
                        {imageLoading ? (
                          <div>
                            <img
                              className="img-fluid"
                              src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
                              alt="blog"
                            />
                          </div>
                        ) : (
                          <div>
                            <img className="img-fluid" src={isFileChanged && url ? url : values.image} alt="blog" />
                          </div>
                        )}
                        <div className="form-group mt-3">
                          <label htmlFor="image" className="fw-bold mb-2">
                            Image
                          </label>
                          <input
                            type='file'
                            name='image'
                            accept='image/*'
                            className={'form-control'}
                            onChange={(e) => {
                              uploadFile(e)
                              setFieldValue('image', e.target.files[0])
                            }
                            }
                          />
                        </div>
                      </CCol>
                      <CRow>
                        <CCol>
                          <div className="d-flex justify-content-center">
                            <CButton
                              type="submit"
                              className="btn btn-color text-white mt-3">
                              Submit
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

export default EditVolunteers;
