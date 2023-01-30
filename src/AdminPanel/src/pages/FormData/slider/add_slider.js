import React, { useState, useEffect } from "react";
import CIcon from "@coreui/icons-react";
import { cilGroup } from "@coreui/icons";
import { Form, Formik } from "formik";
import { CButton, CCol, CRow } from "@coreui/react";
import { Link, useNavigate } from "react-router-dom";
import {adminAxiosInstance1} from "../../../config";
import swal from "sweetalert";

const AddSlider = () => {
  const [imageData, setImageData] = useState();
  const [url, setUrl] = useState(
    "https://www.sandsindia.com/ems/wp-content/uploads/2016/04/dummy-post-horisontal.jpg"
  );
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const uploadFile = async (e) => {
    let file = e.target.files[0];
    setImageData(file);
    if (file !== undefined) {
      setUrl(URL.createObjectURL(file));
      setLoading(true);
    }
  };

  const handleFormSubmit = async (values) => {
    var formdata = new FormData();
    formdata.append("image", imageData);
    formdata.append("name", values.name);
    formdata.append("desc", values.desc);
    const response = await adminAxiosInstance1.post(`/slider/`, 
    formdata,
    {headers: {
      "Content-Type": "multipart/form-data",
    }});
    if (response.status === 201) {
      swal({
        title: "slider added Successfully",
        icon: "success",
        button: false,
        timer: 1500,
      }).then(() => {
        navigate("/admin/slider");
      })
      navigate("/admin/slider");
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
    if (imageData?.name !== undefined) {
      setLoading(false);
    }
  }, [imageData]);
  return (
    <>
      <div className="d-flex">
        <CIcon icon={cilGroup} size="xxl" />
        <h3>Slider Details</h3>
        <Link className="text-decoration-none text-white" to="/admin/slider">
        <CButton className="btn-color">Go back</CButton>
        </Link>
      </div>
      <div>
        <Formik
          initialValues={{
            name: "",
            desc: "",
            image: "",
          }}
          onSubmit={handleFormSubmit}>
          {({ values, handleChange, handleBlur,setFieldValue }) => (
            <div className="border-top border-info border-3 bg-white mt-3 p-2">
              <Form>
                <CRow>
                  <CCol sm={5}>
                    <div>
                      <div className="form-group mt-5">
                        <label htmlFor="name" className="fw-bold mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-3">
                      <label
                        htmlFor="desc"
                        className="form-label fw-bold mb-2">
                        Description
                      </label>
                      <textarea
                        rows="4"
                        cols="50"
                        type="text"
                        id="desc"
                        name="desc"
                        placeholder="desc"
                        value={values.desc}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control `}></textarea>
                    </div>
                  </CCol>
                  <CCol sm={5}>
                     {loading ? ( 
                      <div>
                        <img
                          className="img-fluid"
                          src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
                          alt="slider"
                        />
                      </div>
                    ) : ( 
                       <div className="col-12 mb-3">
                      <div className="text-center">
                        <img
                          className="img-fluid max_img_view_admin"
                          src={url}
                          alt="slider"
                        />
                      </div>
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
                        onChange={(e) =>{
                          uploadFile(e)
                          setFieldValue('image', e.currentTarget.files[0])}
                        }
                      />
                      </div>
                    <div className="text-center">
                      <CButton
                        type="submit"
                        className="btn btn-color text-white mt-3">
                        Submit
                      </CButton>
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

export default AddSlider;
