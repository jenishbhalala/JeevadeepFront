import { cilGroup } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import React, { useEffect, useState } from "react";
import err404 from "../../../errors/svg/noData.jpg";
import err500 from "../../../errors/svg/err500.svg";

import bckSvg from "../../../User/assets/svg/backArrow.svg";
import frtSvg from "../../../User/assets/svg/frontArrow.svg";
import adminAxiosInstance from "../../../config";
import {
  CButton,
  CCol,
  CFormInput,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import moment from "moment";


const UserSupport = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [error, setError] = useState();
  const [ttlCount, setTtlCount] = useState(0);
  const [searchData, setSearchData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  let limit = 10;

  const fetchData = async (currentPage, searchData) => {
    setLoading(true);
    try {
      // const response = await adminAxiosInstance.get(
      //   `blog/getAll?page=1&limit=${limit}`
      // );
      const response = await adminAxiosInstance.get(
        `support/getAll?page=${currentPage}&limit=${limit}&type=user&str=${searchData ? searchData : ""
        }`
      );
      response?.data?.data.result?.forEach((element) => {
        element.momentDate = moment(element.createdAt).format(
          "DD-MM-YYYY h:mm:ss"
        );
      });
      // console.log("cpresult", response.data?.data.result);
      // response?.data?.data.result.forEach((element) => {
      // element.url = element.urlTitle.replaceAll(/\s/g, "-").toLowerCase();
      // });
      console.log("status", response);
      const totalData = response?.data.data.total_count;
      setTtlCount(totalData);
      setPageCount(Math.ceil(totalData / limit));
      if (response?.status === 200) {
        setData(response.data.data.result);
        setError(200);
        setLoading(false);
      }
    } catch (error) {
      // console.log("erorpwr==.===>>", error);
      if (error.response.status === 404) {
        setError(404);
        setLoading(false);
      } else {
        setError(500);
        setLoading(false);
      }
    }
  };

  // const handlePageClick = (data) => {
  //   console.log(data.selected);
  //   // const currentPage = data.selected + 1;
  //   setCurrentPage(data.selected + 1)
  //   const pageData = async (currentPage) => {
  //     const response = await adminAxiosInstance.get(
  //       `support/getAll?page=${currentPage}&limit=${limit}&type=user&str=${
  //         searchData ? searchData : ""
  //       }`
  //     );
  //     setData(response.data.data.result);
  //   };
  //   pageData(currentPage);
  // };

  const handlePageClick = (data) => {
    // console.log(data.selected);
    setCurrentPage(data.selected + 1);
    // console.log(currentPage);
  };
  const pageData = async (currentPage) => {
    fetchData(currentPage, searchData);
  };

  useEffect(() => {
    fetchData(currentPage, searchData);
  }, [searchData]);

  useEffect(() => {
    pageData(currentPage);
  }, [currentPage]);
  useEffect(() => {
    fetchData(1, "");
  }, []);

  return (
    <>
      <div className="d-flex">
        <CIcon icon={cilGroup} size="xxl" />
        <h3>User</h3>
      </div>

      <CRow>
        <CCol sm={12} className="mt-4">
          <h5>Search Data</h5>
        </CCol>

        <div className="admin-topp">
          <CCol lg={3} md={4} sm={5}>
            <CFormInput
              type="search"
              id="exampleFormControlInput1"
              placeholder="Search Text"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
          </CCol>

          {data ? (
            <>
              {" "}
              <a
                target="_blank"
                href={
                  searchData
                    ? `https://tradeunlisting.herokuapp.com/v1/admin/userManage/exportData?str=${searchData}`
                    : `https://tradeunlisting.herokuapp.com/v1/admin/userManage/exportData`
                }
                rel="noreferrer"
              >
                <CButton color="info" className={`text-white `}>
                  Export Data
                </CButton>
              </a>
            </>
          ) : (
            <>
              {" "}
              <CButton color="info" className={`text-white `} disabled>
                Export Data
              </CButton>
            </>
          )}
          {/* </CCol> */}
        </div>
      </CRow>
      <CCol>
        <CRow className="bg-white border-top border-info border-3 mt-2"></CRow>
      </CCol>

      {loading ? (
        <div className="loader-content">
          <div className="spinner-border text-secondary"></div>
        </div>
      ) : (
        <>
          <div className="bg-white mt-3 ps-3 pe-3 pb-1 mb-3">
            <CTable caption="top" responsive>
              <CTableCaption className="fs-3 text-dark">
                User Support
              </CTableCaption>
              {error === 200 ? (
                <>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Sr.No.</CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="mw-title">
                        User Name
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="mw-title">
                        User Code
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="mw-title">
                        Title
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="mw-title">
                        Message
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="mw-title">Date</CTableHeaderCell>

                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {data?.map((item, index) => (
                      <CTableRow key={index}>
                        <CTableHeaderCell scope="row">
                          {item?.index}
                        </CTableHeaderCell>
                        <CTableDataCell>
                          {item?.userName ? item?.userName : "-"}
                        </CTableDataCell>
                        <CTableDataCell>
                          {item?.userUniqueCode ? item?.userUniqueCode : "-"}
                        </CTableDataCell>
                        <CTableDataCell>{item?.subject}</CTableDataCell>
                        <CTableDataCell>{item?.message}</CTableDataCell>
                        <CTableDataCell> {item?.momentDate}</CTableDataCell>
                      </CTableRow>
                    ))}
                    {/* <CTableRow>
                      <CTableHeaderCell colSpan="12" scope="row">
                        Total Results : {data?.length}
                      </CTableHeaderCell>
                    </CTableRow> */}
                  </CTableBody>
                </>
              ) : error === 404 ? (
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell className="d-flex justify-content-center">
                      <img
                        src={err404}
                        alt=""
                        style={{ height: "400px", width: "400px" }}
                      />
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              ) : (
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell className="d-flex justify-content-center">
                      <img
                        src={err500}
                        alt=""
                        style={{ height: "400px", width: "400px" }}
                      />
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              )}
            </CTable>
          </div>
        </>
      )}
      {error === 200 ? (
        pageCount && pageCount > 1 ? (
          <>
            <div className="myPaginationBottom">
              <span>Total Result : {ttlCount}</span>
              <ReactPaginate
                previousLabel={
                  <>
                    <img src={bckSvg} alt="backButton" />
                  </>
                }
                nextLabel={
                  <>
                    <img src={frtSvg} alt="frtButton" />
                  </>
                }
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
              />
            </div>
          </>
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </>
  );
};

export default UserSupport;
