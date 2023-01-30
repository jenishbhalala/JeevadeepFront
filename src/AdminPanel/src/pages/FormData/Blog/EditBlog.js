import React, { useEffect, useState } from "react";
import CIcon from "@coreui/icons-react";
import { cilGroup } from "@coreui/icons";
import { ErrorMessage, Form, Formik } from "formik";
import { CCol, CRow, CButton } from "@coreui/react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { adminAxiosInstance1 } from "../../../config/index";
import swal from "sweetalert";
import { blogValidation } from "../../../common/Validation";

const EditBlog = () => {
  const [data, setData] = useState();
  const [imageData, setImageData] = useState();
  const [url, setUrl] = useState();
  const [isFileChanged, setIsFileChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [description, setDescription] = useState();

  let { id } = useParams();
  id = id.replace(/-/g, " ");
  console.log("edit")
  // console.log(id);
  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await adminAxiosInstance1.get(`/blog/${id}/`);
    // console.log(response.data.data[0]);
    setData(response.data);
    setUrl(response?.data?.image);
  };
  const uploadFile = async (e) => {
    let file = e.target?.files[0];
    setIsFileChanged(true);
    setImageLoading(true);
    setImageData(file)
  };
  const handleFormSubmit = async (values) => {
    var formdata = new FormData();
    formdata.append("image", imageData);
    formdata.append("heading", values.heading);
    formdata.append("description", values.description);
    formdata.append("location", values.location);
    if (isFileChanged) {
      // values?.image = imageData;
    }
    const response = await adminAxiosInstance1.put(`blog/${data?.id}/`,
      formdata
      , {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });
    if (response?.status === 200) {
      swal({ title: "Blog  edited Successfully", icon: "success", button: false, }).then(() => {
        navigate("/admin/blog");
      })
      navigate("/admin/blog");
    } else {
      swal({
        title: "Something went wrong!!", icon: "error", button: false,
      })
    }
    navigate("/admin/blog");
  };

  useEffect(() => {
    if (imageData?.mediaLink !== undefined) {
      setUrl(imageData?.mediaLink);
      setImageLoading(false);
    }
  }, [imageData]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data === undefined) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [data]);

  return (
    <>
      {loading ? (
        <div className="loader-content">
          <div className="spinner-border text-secondary"></div>
        </div>
      ) : (
        <>
          {/* <div dangerouslySetInnerHTML={{ __html: data?.content }}></div> */}
          <div className="d-flex">
            <CIcon icon={cilGroup} size="xxl" />
            <h3>Blog Details</h3>
          </div>
          <div>
            <Link className="text-decoration-none text-white" to="/admin/blog">
              <button className="text-white btn btn-info">Go Back</button>
            </Link>
          </div>
          <div>
            <Formik
              enableReinitialize={true}
              initialValues={{
                heading: data?.heading,
                image: imageData,
                description: data?.description,
                location: data?.location,
              }}
              validationSchema={blogValidation}
              onSubmit={handleFormSubmit}>
              {({ values, handleChange, handleBlur, setFieldValue,errors,touched }) => (
                <div className="border-top border-info border-3 bg-white mt-3 p-2">
                  <h4 className="fw-normal">Enter Blog Details</h4>
                  {console.log("values", values)}
                  <Form>
                    <CRow>
                      <CCol sm={5}>
                        <div className="form-group mt-3">
                          <label htmlFor="heading" className="fw-bold mb-2">
                            Heading
                          </label>
                          <input
                            type="text"
                            className={'form-control' + (errors.heading && touched.heading ? ' is-invalid' : '')}
                            name="heading"
                            id="heading"
                            value={values?.heading}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage name="heading" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group mt-3">
                          <label htmlFor="location" className="fw-bold mb-2">
                            location
                          </label>
                          <input
                            type="text"
                            className={'form-control' + (errors.location && touched.location ? ' is-invalid' : '')}
                            name="location"
                            id="location"
                            value={values?.location}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                       <ErrorMessage name="location" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group mt-3">
                          <label htmlFor="description" className="fw-bold mb-2">
                            Description
                          </label>
                          <textarea
                            rows="4"
                            cols="50"
                            type="text"
                            className={'form-control' + (errors.description && touched.description ? ' is-invalid' : '')}
                            name="description"
                            id="location"
                            value={values?.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          ></textarea>
                          <ErrorMessage name="description" component="div" className="invalid-feedback" />

                        </div>
                        <div className="form-group mt-3">
                          <label htmlFor="image" className="fw-bold mb-2">
                            Image
                          </label>
                          <input
                            type='file'
                            name='image'
                            accept='image/*'
                            onChange={(e) => {
                              uploadFile(e)
                              setFieldValue('image', e?.currentTarget?.files[0])
                            }
                            }
                          />
                        </div>
                      </CCol>
                      <CCol sm={5}>
                        {imageLoading ? (
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
                          <label htmlFor="image" className="fw-bold mb-2">
                            Image
                          </label>
                          <input
                            type='file'
                            name='image'
                            accept='image/*'
                            onChange={(e) => {
                              uploadFile(e)
                              setFieldValue('image', e?.currentTarget?.files[0])
                            }
                            }
                          />
                          </div>

                      </CCol>
                      <CCol sm={12}>
                      </CCol>
                      <CCol>
                        <div>
                          <CButton
                            type="submit"
                            className="btn btn-info text-white mt-3">
                            Submit
                          </CButton>
                          {/* <CButton
                            type="reset"
                            className="btn btn-light text-dark mt-3 ms-3">
                            Reset
                          </CButton> */}
                        </div>
                      </CCol>
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

export default EditBlog;
