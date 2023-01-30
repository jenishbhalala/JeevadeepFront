import React, { useState, useEffect } from "react";
import { cilGroup} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {  CCol, CFormInput, CRow } from "@coreui/react";
import {  useNavigate } from "react-router-dom";
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from "@coreui/react";
import  { adminAxiosInstance1 } from "../../../config";
import "../scss/admin-contact.scss";
import { Paginations } from "../../components/pagination";
import { Error404 } from "../../components/Error404";
import { Error500 } from "../../components/Error500";

const Contact = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchData, setSearchData] = useState("");
  const [error, setError] = useState(200);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  let limit = 10;
  let totalCount;
  const navigate = useNavigate();

  const fetchData = async (currentPage, searchData) => {
    setLoading(true);
    try {
      const response = await adminAxiosInstance1.get(
        `contact-us/?page=${currentPage}&limit=${limit}&search=${searchData}`
      );
   console.log("response",response)
      if (response.status === 200) {
        // console.log(response.data.data);
        totalCount = parseInt(response?.data?.count);
        setPageCount(Math.ceil(totalCount / limit));
        setData(response?.data?.results);
        setError(200);
      }
      setLoading(false);
    } catch (error) {
      if (error?.response?.status === 404) {
        setError(404);
        setLoading(false);
        setData();
      } else {
        setError(500);
        setLoading(false);
        setData();
      }
    }
  };

  const handleReset = () => {
    setFromDate("");
    setToDate("");
    document.getElementById("datez").value = "";
    document.getElementById("dates").value = "";
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
    fetchData(data.selected + 1,searchData)
  };
  const pageData = async (currentPage) => {
    fetchData(currentPage, searchData);
  };
  useEffect(() => {
    pageData(currentPage);
  }, [currentPage]);


  useEffect(() => {
    fetchData(1, searchData);
  }, [fromDate, toDate]);

  useEffect(() => {
    fetchData(currentPage, searchData);
  }, [searchData]);

  useEffect(() => {
    fetchData(1, "");
  }, []);

  return (
    <>
      <CRow>
        <div className="d-flex">
          <CIcon icon={cilGroup} size="xxl" />
          <h3>Contact Details</h3>
        </div>
        <div className="admin-topp">
          <CCol lg={3} md={4} sm={5}>
            <CFormInput
              type="search"
              id="exampleFormControlInput1"
              placeholder="Search Text"
              value={searchData}
              onChange={(e) => {
                setSearchData(e.target.value);
              }}
            />
          </CCol>
        </div>
   
      </CRow>
      {loading ? (
        <div className="loader-content">
          <div className="spinner-border text-secondary"></div>
        </div>
      ) : (
        <>
          <div className="bg-white mt-3 ps-3 pe-3 pb-1 mb-3">
            <div></div>
            <CTable caption="top" responsive>
              {error === 200 ? (
                <>
                  <CTableHead >
                                      <CTableRow className="head">
                    {/* <div className="head">     */}
                      <CTableHeaderCell scope="col">Sr.No.</CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="cc-name">
                        Full Name
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col">Mobile</CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="cc-email">
                        Email
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="cc-number">
                        Number
                      </CTableHeaderCell>
                      {/* <CTableHeaderCell scope="col" className="cc-message">
                        Message
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="cc-date">
                        Date
                      </CTableHeaderCell> */}
                    {/* </div>  */}
                    </CTableRow>

                  </CTableHead>
                  <CTableBody>
                    {data && data?.map((item, index) => (
                        <CTableRow key={index}>
                          <CTableHeaderCell scope="row">
                            {index+1}
                          </CTableHeaderCell>
                          <CTableDataCell>{item?.full_name}</CTableDataCell>
                          <CTableDataCell>{item?.email}</CTableDataCell>
                          <CTableDataCell>{item?.number}</CTableDataCell>
                          <CTableDataCell>{item?.message}</CTableDataCell>
                          <CTableDataCell>{item?.momentDate}</CTableDataCell>
                        </CTableRow>
                      ))}
                  </CTableBody>
                </>
              ) : error === 404 ? (
                <Error404 />
              ) : (
                <Error500 />
              )}
            </CTable>
          </div>
        </>
      )}
      {error === 200 ? (
        pageCount && pageCount > 1 ? (
          <>
            <div className="myPaginationBottom">
              <span>Total Results : {data?.result?.length}</span>
              <Paginations handlePageClick={handlePageClick} pageCount={pageCount}/>
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

export default Contact;
