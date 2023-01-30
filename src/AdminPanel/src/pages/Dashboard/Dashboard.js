import React, { useEffect, useState } from "react";
import { CCard, CCardBody, CCardFooter, CCol, CRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilSpeedometer, cilArrowCircleRight } from "@coreui/icons";
import "./dashboard.scss";
import adminAxiosInstance from "../../config/index";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      // const response = await adminAxiosInstance.get("dashboard/get");
      // console.log(response.data.data);
      // setData(response.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    
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
          <div className="bg-background">
            <CRow>
              <CCol>
                <div className="header-view">
                  <div className="logo">
                    <CIcon icon={cilSpeedometer}></CIcon>
                  </div>
                  <div className="header-title">
                    <h3>Dashboard</h3>
                  </div>
                  <div className="header-sub-title">
                    <h4>Control panel</h4>
                  </div>
                </div>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs>
                <CCard className="mb-4 bg-transparent border-0 border-bottom">
                  <CCardBody>
                    <CRow xs={{ gutterX: 5 }}>
                      <CCol sm={12} lg={6} md={12} xl={6}>
                        <CRow>
                          <CCol sm={6}>
                            <CCard className="bg-info mb-3">
                              <CCardBody>
                                <div className="card-count dashboard-cards  text-white rounded py-1 px-3">
                                  <div className="fs-5 fw-semibold text-center">
                                    {data?.total_company_listed ||
                                      "No Data Found"}
                                  </div>
                                  <h5 className=" txt-white text-center">
                                    Company Listed
                                  </h5>
                                </div>
                              </CCardBody>
                              <Link
                                to="/admin/company/indian-unlisted-companies"
                                className="text-decoration-none"
                              >
                                <CCardFooter className="fw-bolder text-white text-center">
                                  More Info{" "}
                                  <CIcon icon={cilArrowCircleRight}></CIcon>
                                </CCardFooter>
                              </Link>
                            </CCard>
                          </CCol>
                        </CRow>
                      </CCol>

                    </CRow>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
