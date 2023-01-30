import React, { useState, useEffect } from "react";
import CIcon from "@coreui/icons-react";
import { cilGroup } from "@coreui/icons";
import { ErrorMessage, Form, Formik } from "formik";
import { CButton, CCol, CRow } from "@coreui/react";
import { Link, useNavigate } from "react-router-dom";
import { adminAxiosInstance1 } from "../../../config";
import { BlankImage, blogValidation, ourvoluntersValidation } from "../../../common/Validation";
// import { SourceEditing } from "@ckeditor/ckeditor5-source-editing";
import swal from "sweetalert";

const BlogManagement = () => {
  const [imageData, setImageData] = useState();
  const [url, setUrl] = useState(BlankImage);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const uploadFile = async (e) => {
    let file = e.target.files[0];
    setImageData(file);
    if (file.name !== undefined) {
      setUrl(URL.createObjectURL(file));
      setLoading(true);
    }
  };
  const handleFormSubmit = async (values) => {
    var formdata = new FormData();
    formdata.append("image", imageData);
    formdata.append("heading", values.heading);
    formdata.append("description", values.description);
    formdata.append("location", values.location);
    console.log("formdata", formdata)
    const response = await adminAxiosInstance1.post(`/blog/`,
      formdata, { headers: {"Content-Type": "multipart/form-data"}
      });
    if (response.status === 201) {
      swal({
        title: "Blog  added Successfully",icon: "success", button: false, timer: 1500,
      }).then(() => {
        navigate("/admin/blog");
      })
      navigate("/admin/blog");
    } else {
      swal({
        title: "Something went wrong!!", icon: "error", button: false, timer: 1500,
      })
    }
  };
  useEffect(() => {
    if (imageData?.mediaLink !== undefined) {
      setLoading(false);
    }
  }, [imageData,url]);

  const resetFile = (e) => {
    e?.preventDefault();
    setUrl(BlankImage)
  }
  return (
    <>
      <div className="d-flex">
        <CIcon icon={cilGroup} size="xxl" />
        <h3>Blog Details</h3>
        <Link className="text-decoration-none text-white" to="/admin/blog">
          <CButton color="dark">Go back</CButton>
        </Link>
      </div>
      <div>
        <Formik
          initialValues={{
            heading: "",
            description: "",
            location: "",
            image: "",
          }}
          onSubmit={handleFormSubmit}
          validationSchema={blogValidation}>
          {({ values, handleChange, handleBlur, setFieldValue,errors,touched }) => (
            <div className="border-top border-info border-3 bg-white mt-3 p-2">
              <Form>
                <CRow>
                  <CCol sm={5}>
                    <div>
                      <div className="form-group mt-5">
                        <label htmlFor="heading" className="fw-bold mb-2">
                          Heading
                        </label>
                        <input
                          type="text"
                          className={'form-control' + (errors.heading && touched.heading ? ' is-invalid' : '')}
                          name="heading"
                          id="heading"
                          value={values.heading}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                       <ErrorMessage name="heading" component="div" className="invalid-feedback" />
                      </div>
                    </div>
                    <div className="col-12 mb-3">
                      <label
                        htmlFor="description"
                        className="form-label fw-label">
                        Description
                      </label>
                      <textarea
                        rows="4"
                        cols="50"
                        type="text"
                        id="description"
                        name="description"
                        placeholder="description"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={'form-control' + (errors.description && touched.description ? ' is-invalid' : '')}
                        ></textarea>
                       <ErrorMessage name="description" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group mt-5">
                      <label htmlFor="location" className="fw-bold mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        className={'form-control' + (errors.location && touched.location ? ' is-invalid' : '')}
                        name="location"
                        id="location"
                        value={values.location}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                       <ErrorMessage name="location" component="div" className="invalid-feedback" />
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
                       {imageData && (
                        <div style={{ textAlign: "center" }}>
                          <button onClick={resetFile}>Remove File</button>
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
                        className={'form-control' + (errors.image && touched.image ? ' is-invalid' : '')}
                        onChange={(e) =>{
                          uploadFile(e)
                          setFieldValue('image', e.currentTarget.files[0])}
                        }
                      />
                    </div>
                    <ErrorMessage name="image" component="div" className="invalid-feedback" />
                  </CCol>
                  <CCol>
                    <div>
                      <CButton
                        type="submit"
                        className="btn btn-info text-white mt-3">
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

export default BlogManagement;
