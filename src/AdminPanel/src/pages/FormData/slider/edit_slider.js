import React, { useEffect, useState } from "react";
import CIcon from "@coreui/icons-react";
import { cilGroup } from "@coreui/icons";
import { Form, Formik } from "formik";
import { CCol, CRow, CButton } from "@coreui/react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import  { adminAxiosInstance1 } from "../../../config";
import swal from "sweetalert";

const Editslider = () => {
  const [data, setData] = useState();
  const [imageData, setImageData] = useState();
  const [url, setUrl] = useState();
  const [isFileChanged, setIsFileChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  
  let { id } = useParams();
  id = id.replace(/-/g, " ");
  console.log("edit")
  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await adminAxiosInstance1.get(`/slider/${id}/`);
    // console.log(response.data.data[0]);
    setData(response.data);
    setUrl(response?.data?.image);
  };
  console.log("(response?.data[0]?.image", data?.image);
  const uploadFile = async (e) => {
    let file = e.target?.files[0];
    setIsFileChanged(true);
    setImageLoading(true);
    setImageData(file)
  };
  console.log("data", data)
  console.log("imageData",imageData)
  const handleFormSubmit = async (values) => {
    var formdata = new FormData();
    formdata.append("image", imageData);
    formdata.append("name", values.name);
    formdata.append("desc", values.desc);
        console.log("formdata",formdata)
    if (isFileChanged) {
      // values?.image = imageData.mediaLink;
    }
    const response = await adminAxiosInstance1.put(`slider/${data?.id}/`,
      formdata
    , {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
    if (response?.status === 200) {
      swal({
        title: "Blog  edited Successfully",
        icon: "success",
        button: false,
        timer: 1500,
      }).then(() => {
        navigate("/admin/slider");
      })
      navigate("/admin/slider");
    } else {
      console.log("else------------------")
      swal({
        title: "Something went wrong!!",
        icon: "error",
        button: false,
        timer: 1500,
      })
    }
    console.log(response);
    navigate("/admin/slider");
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
            <h3>Slider Details</h3>
          </div>
          <div>
            <Link className="text-decoration-none text-white" to="/admin/slider">
              <CButton className="btn-color">Go Back</CButton>
            </Link>
          </div>
          <div>
            <Formik
              enableReinitialize={true}
              initialValues={{
                name: data?.name,
                image: imageData,
                desc: data?.desc,
              }}
              onSubmit={handleFormSubmit}>
              {({ values, handleChange, handleBlur, setFieldValue }) => (
                <div className="border-top border-info border-3 bg-white mt-3 p-2">
                  <h4 className="fw-normal">Enter Blog Details</h4>
                  {console.log("values",values)}
                  <Form>
                    <CRow>
                      <CCol sm={5}>
                        <div className="form-group mt-3">
                          <label htmlFor="name" className="fw-bold mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="heading"
                            id="heading"
                            value={values?.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        <div className="form-group mt-3">
                          <label htmlFor="description" className="fw-bold mb-2">
                            Description
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="desc"
                            id="location"
                            value={values?.desc}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
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
                        {/* <div className="form-group mt-3">
                          <label
                            htmlFor="featured_image"
                            className="fw-bold mb-2">
                            Image
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            name="image"
                            id="image"
                            value={values?.image}
                            onChange={(e) => {
                              uploadFile(e);
                              handleChange(e);
                            }}
                            onBlur={handleBlur}
                          />
                        </div> */}

                      </CCol>
                      <CCol sm={12}>
                      </CCol>
                      <CCol>
                        <div>
                          <CButton
                            type="submit"
                            className="btn btn-color text-white mt-3">
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

export default Editslider;
