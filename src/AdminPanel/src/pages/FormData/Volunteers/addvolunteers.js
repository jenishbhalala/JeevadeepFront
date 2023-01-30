import { cilGroup } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CButton, CCol, CRow } from "@coreui/react";
import { ErrorMessage, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { SwalSuccess } from "../../../common/swal";
import { BlankImage, ourvoluntersValidation } from "../../../common/Validation";
import { adminAxiosInstance1 } from "../../../config";

const AddVolunteers = () => {
  const [imageData, setImageData] = useState();
  const [url, setUrl] = useState(BlankImage);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const uploadFile = async (e) => {
    let file = e.target.files[0];
    setImageData(file);
    if (file.name !== undefined) {
      setUrl(URL.createObjectURL(file));
      setLoading(false);
    }
  };

  const handleFormSubmit = async (values) => {
    // console.log(values);
    var formdata = new FormData();
    formdata.append("image", imageData);
    formdata.append("name", values.name);
    formdata.append("occupation", values.occupation);
    try {
      const response = await adminAxiosInstance1.post("/our-volunteers/",formdata, {headers: {
        "Content-Type": "multipart/form-data",
      }});
      if(response.status === 201){
        swal({ title: "Sucess", icon: "success", button: false,timer: 1500,  })
        navigate("/admin/our-volunteers");}
    } catch (error) {
      // console.log("EEE", error);
      swal({ title: "error", icon: "error", button: false,timer: 1500,  })
    }
  };
  const resetFile = (e) => {
    e?.preventDefault();
    setUrl(BlankImage)
  }
  useEffect(() => {
    
    if (imageData?.mediaLink !== undefined) {
      setLoading(false);
    }
  }, [imageData,url]);


console.log("urlurl",url)
  return (
    <>
      <div className="d-flex">
        <CIcon icon={cilGroup} size="xxl" />
        <h3>Our volunteers Details</h3>
      </div>
      <div>
        <Link
          className="text-decoration-none text-white"
          to="/admin/our-volunteers">
          <CButton className="btn btn-color" >Go Back</CButton>
        </Link>
      </div>
      <div>
        <Formik
          initialValues={{
            name: "",
            occupation: "",
            image: "",
          }}
          validationSchema={ourvoluntersValidation}
          onSubmit={handleFormSubmit}>
          {({ values, handleChange, handleBlur,setFieldValue ,errors,touched}) => (
            <div style={{borderTop:"2px solid #622cc4"}} className=" bg-white mt-3 p-2">
              <Form>
                <CRow>
                  <CCol sm={5}>
                    <div>
                      <div className="form-group mt-3">
                        <label htmlFor="name" className="fw-bold mb-2">
                          Name
                        </label>
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
                      <div className="form-group mt-3">
                        <label htmlFor="occupation" className="fw-bold mb-2">
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
                    <div className="form-group mt-3">
                      <label htmlFor="image" className="fw-bold mb-2">
                        Image
                      </label>
                      <input
                        type='file'
                        name='image'
                        accept='image/*'
                        style={{border:"2px solid #622cc4"}}
                        className={'form-control' + (errors.image && touched.image ? ' is-invalid' : '')}
                        onChange={(e) =>{
                          uploadFile(e)
                          setFieldValue('image', e.currentTarget.files[0])}
                        }
                      />
                    <ErrorMessage name="image" component="div" className="invalid-feedback" />
                    </div>
                  </CCol>
                  <CCol sm={5} className="mt-3">
                  {loading ? ( 
                      <div>
                        <img
                          className="img-fluid"
                          src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
                          alt="slider"
                        />
                      </div>
                    ) : ( 
                       <div className="col-12 mt-5">
                      <div className="text-center">
                        <img
                          className="img-fluid max_img_view_admin"
                          src={url}
                          alt="slider"
                        />
                      </div>
                      </div>
                     )}
                       {imageData && (
                        <div style={{ textAlign: "center" }}>
                          <button onClick={resetFile}>Remove File</button>
                        </div>
                      )}
                  
                  </CCol>
                  <CRow>
                    <CCol>
                      <div className="d-flex justify-content-center">
                        <CButton
                          type="submit"
                          className="btn btn-color">
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
  );
};

export default AddVolunteers;
