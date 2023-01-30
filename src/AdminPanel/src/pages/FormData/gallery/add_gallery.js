import React, { useEffect, useState } from "react";
import CIcon from "@coreui/icons-react";
import { cilGroup } from "@coreui/icons";
import { Form, Formik } from "formik";
import { CButton, CCol, CRow } from "@coreui/react";
import { Link, useNavigate } from "react-router-dom";
import { adminAxiosInstance1 } from "../../../config";
import * as Yup from "yup"
import swal from "sweetalert";

const Addgallery = () => {

  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState();
  const [url, setUrl] = useState(
    "https://www.sandsindia.com/ems/wp-content/uploads/2016/04/dummy-post-horisontal.jpg"
  );
  const navigate = useNavigate();
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

  const uploadFile = async (e) => {
    let file = e.target.files[0];
    setImageData(file);
    if (file.name !== undefined) {
      setUrl(URL.createObjectURL(file));
      setLoading(false);
    }
  };

  const handleFormSubmit = async (values) => {
    try {
      var formdata = new FormData();
      formdata.append("image", imageData);
      console.log("imageData", imageData)
      const response = await adminAxiosInstance1.post(`/gallery/`,
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        });
      if (response.status === 201) {
        swal({
          title: "image added Successfully",
          icon: "success",
          button: false,
          timer: 1500,
        }).then(() => {
          navigate("/admin/gallery");
        })
        navigate("/admin/gallery");
      } else {
        console.log("else");
        swal({
          title: "Something went wrong!!",
          icon: "error",
          button: false,
          timer: 1500,
        })
      }
    } catch {
      swal({
        title: "Something went wrong!!",
        icon: "error",
        button: false,
        timer: 1500,
      })
    }
  }
  const resetFile = (e) => {
    e.preventDefault();
    setUrl("https://www.sandsindia.com/ems/wp-content/uploads/2016/04/dummy-post-horisontal.jpg");
    setImageData()
  }
  useEffect(() => {
    if (imageData?.name !== undefined) {
      setLoading(false);
    }
  }, [imageData, url])

  return (
    <>
      <div className="d-flex">
        <CIcon icon={cilGroup} size="xxl" />
        <h3>Gallery Details</h3>
      </div>
      <div>
        <Link className="text-decoration-none text-white" to="/admin/gallery">
          <CButton className="text-white btn btn-color">Go Back</CButton>
        </Link>
      </div>
      <div>
        <Formik
          initialValues={{
            image: "",
          }}
          onSubmit={handleFormSubmit}
          validationSchema={DisplayErrorMessage}
        >
          {({ errors, setFieldValue, isSubmitting }) => (
            <div className="border-top border-info border-3 bg-white mt-3 p-2">
              <Form>
                <CRow>
                  {console.log("errors", errors)}
                  <CCol sm={5}>

                    <div>
                      <div className="form-group mt-5">

                        {loading ? (
                          <div>
                            <img
                              className="img-fluid"
                              src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
                              alt="blog"
                              style={{ width: "50%", height: "50%" }}
                            />
                          </div>
                        ) : (
                          <div>
                            <img src={url} style={{ width: "50%", height: "50%" }} />
                            <div>{errors.image}</div></div>
                        )}
                        {imageData && (
                          <div style={{ textAlign: "center", width: "50%", height: "50%", marginTop: "5%",marginBottom: "5%" }}>
                            <CButton onClick={(e) => resetFile(e)}>Remove File</CButton>
                          </div>
                        )}
                        <label htmlFor="image" className="fw-bold mb-2">
                          Image
                        </label>
                        <input
                          type='file'
                          name='image'
                          accept='image/*'
                          onChange={(e) => {
                            uploadFile(e)
                            setFieldValue('image', e.currentTarget.files[0])
                          }
                          }
                        />

                      </div>
                    </div>

                    <div>
                      <CButton
                        disabled={isSubmitting}
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

export default Addgallery;
