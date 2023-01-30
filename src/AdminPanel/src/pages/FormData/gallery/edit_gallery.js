import React, { useEffect, useState } from "react";
import CIcon from "@coreui/icons-react";
import { cilGroup } from "@coreui/icons";
import { Form, Formik } from "formik";
import { CCol, CRow, CButton } from "@coreui/react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { adminAxiosInstance1 } from "../../../config";
import * as Yup from "yup"

const Editgallery = () => {
  const [data, setData] = useState();
  const [imageData, setImageData] = useState();
  const [url, setUrl] = useState();
  const [isFileChanged, setIsFileChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  let { id } = useParams();
  id = id.replace(/-/g, " ");
  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await adminAxiosInstance1.get(`/gallery/${id}/`);
    setData(response.data);
    setUrl(response?.data?.image);
  };
  const uploadFile = async (e) => {
    let file = e.target?.files[0];
    setIsFileChanged(true);
    setImageLoading(true);
    setImageData(file)
  };

  const DisplayErrorMessage = Yup.object().shape({
    image: Yup
      .mixed()
      .required("You need to provide a file")
      .test("type", "Only the following formats are accepted: .jpeg, .jpg, .bmp, .pdf and .doc", (value) => {
        return value && (
          value.type === "image/jpeg" ||
          value.type === "image/bmp" ||
          value.type === "image/png"
        );
      }),
  });

  const handleFormSubmit = async (values) => {
    var formdata = new FormData();
    if (isFileChanged) {
      // values?.image = imageData.mediaLink;
    }
    const response = await adminAxiosInstance1.put(`gallery/${data?.id}/`,
      formdata
      , {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });
    if (response?.status === 200) {
      swal({
        title: "gallery  edited Successfully",
        icon: "success",
        button: false,
        timer: 1500,
      }).then(() => {
        navigate("/admin/gallery");
      })
      navigate("/admin/gallery");
    } else {
      swal({
        title: "Something went wrong!!",
        icon: "error",
        button: false,
        timer: 1500,
      })
    }
    navigate("/admin/gallery");
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
          <div className="d-flex">
            <CIcon icon={cilGroup} size="xxl" />
            <h3>Gallery Details</h3>
            <p className="ms-2 mt-2">Add/Edit Blog</p>
          </div>
          <div>
            <Link className="text-decoration-none text-white" to="/admin/gallery">
              <button className="text-white btn btn-color">Go Back</button>
            </Link>
          </div>
          <div>
            <Formik
              enableReinitialize={true}
              initialValues={{
                image: imageData,
              }}
              onSubmit={handleFormSubmit}
              validationSchema={DisplayErrorMessage}>

              {({ values, setFieldValue, errors }) => (
                <div className="border-top border-info border-3 bg-white mt-3 p-2">
                  {console.log("values", values)}
                  <Form>
                    <CRow>
                      <CCol sm={5}>
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
                        <div>{errors.image}</div>
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

export default Editgallery;
