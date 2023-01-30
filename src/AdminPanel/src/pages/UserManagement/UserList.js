import {
  cilGroup,
  cilPencil,
  cilReload,
  cilSearch,
  cilTrash,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CButton,
  CCol,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import adminAxiosInstance from "../../../config";
import ReactPaginate from "react-paginate";
import err404 from "../../../errors/svg/noData.jpg";
import err500 from "../../../errors/svg/err500.svg";
import moment from "moment";

import bckSvg from "../../../User/assets/svg/backArrow.svg";
import frtSvg from "../../../User/assets/svg/frontArrow.svg";

const UserList = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(200);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchData, setSearchData] = useState("");
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  const navigate = useNavigate();

  let limit = 10;
  let totalCount;

  const fetchData = async (currentPage, searchData) => {
    setLoading(true);
    try {
      const response = await adminAxiosInstance.get(
        `/userManage/getAll?page=${currentPage}&limit=${limit}&str=${searchData}&startDate=${
          fromDate ? fromDate : ""
        }&endDate=${toDate ? toDate : ""}`
      );
      response?.data?.data.result?.forEach((element) => {
        element.momentDate = moment(element.createdAt).format(
          "DD-MM-YYYY h:mm:ss"
        );
      });
      // console.log("response", response);
      totalCount = parseInt(response?.data?.data?.total_count);
      setPageCount(Math.ceil(totalCount / limit));
      if (response?.status === 200) {
        setData(response.data.data);
        setError(200);
        setLoading(false);
      }
    } catch (error) {
      if (error.response.status === 404) {
        setError(404);
        setLoading(false);
        setData([]);
      } else {
        setError(500);
        setLoading(false);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      const deleteData = await adminAxiosInstance.delete(
        `/userManage/delete/${id}`
      );
      if (deleteData.status === 200) {
        setVisible(false);
        fetchData(1, "");
      }
    } catch (error) {
      // console.log("Error===>", error.response.data.message);
    }
  };

  const handleReset = () => {
    setFromDate("");
    setToDate("");
    document.getElementById("datez").value = "dd/mm/yy";
    document.getElementById("dates").value = "dd/mm/yy";
  };

  const handleExport = async () => {
    navigate("/admin/userlist");
  };

  const handlePageClick = (data) => {
    // console.log(data.selected);
    setCurrentPage(data.selected + 1);
    // console.log(currentPage);
  };
  const pageData = async (currentPage) => {
    fetchData(currentPage, searchData);
  };

  useEffect(() => {
    fetchData(1, searchData);
  }, [fromDate, toDate]);

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
        <h3>User Management</h3>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <Link className="text-decoration-none text-white" to="usermanagement">
          <CButton color="dark">+Add New</CButton>
        </Link>
      </div>
      <CRow>
        <CCol sm={12} className="mt-3">
          <h5>Export Data</h5>
        </CCol>
        <div className="admin-topp">
          {/* <CCol lg={2} md={6} sm={5} className="mb-3"> */}
          <input
            onChange={(e) => setFromDate(e.target.value)}
            placeholdertext="dd/mm/yy"
            dateformat="dd/MM/yyyy"
            max={toDate}
            type="date"
            className="sellDate admin-sellDate"
            id="datez"
          />
          {/* </CCol> */}
          {/* <CCol lg={2} md={6} sm={5} className="mb-3"> */}
          <input
            onChange={(e) => setToDate(e.target.value)}
            placeholdertext="dd/mm/yy"
            dateformat="dd/MM/yyyy"
            min={fromDate}
            type="date"
            className="sellDate admin-sellDate"
            id="dates"
          />
          {/* </CCol> */}
          {/* <CCol lg={1} className=" mb-3"> */}
          <CButton
            color="info"
            className={`text-white reload-sell-btn admin-btn`}
            onClick={handleReset}
          >
            <CIcon icon={cilReload} />
          </CButton>
          {data ? (
            <>
              {" "}
              <a
                target="_blank"
                href={
                  fromDate && toDate
                    ? `https://tradeunlisting.herokuapp.com/v1/admin/userManage/exportData?startDate=${fromDate}&endDate=${toDate}`
                    : searchData
                    ? `https://tradeunlisting.herokuapp.com/v1/admin/userManage/exportData?str=${searchData}`
                    : `https://tradeunlisting.herokuapp.com/v1/admin/userManage/exportData`
                }
                rel="noreferrer"
                download
              >
                <CButton color="info" className={`text-white`}>
                  Export Data
                </CButton>
              </a>
            </>
          ) : (
            <>
              {" "}
              <CButton color="info" className={`text-white`} disabled>
                Export Data
              </CButton>
            </>
          )}
          {/* </CCol> */}
        </div>
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
        </div>
      </CRow>
      <CCol>
        <CRow className="bg-white border-top border-info border-3 mt-2"></CRow>
      </CCol>
      {loading ? (
        <>
          <div className="loader-content">
            <div className="spinner-border text-secondary"></div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-white mt-3 ps-3 pe-3 pb-1 mb-3">
            <CTable caption="top" responsive>
              <CTableCaption className="fs-3 text-dark">
                User Management List
              </CTableCaption>
              {error === 200 ? (
                <>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Sr.No.</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                      <CTableHeaderCell scope="col">
                        Mobile No.
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                      <CTableHeaderCell scope="col">
                        User Unique Code
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col">Location</CTableHeaderCell>
                      <CTableHeaderCell scope="col">DP ID</CTableHeaderCell>
                      <CTableHeaderCell scope="col">DP Name</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Client ID</CTableHeaderCell>
                      <CTableHeaderCell scope="col">
                        Client Name
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col">
                        kyc uploaded
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col">
                        kyc checked
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {data ? (
                      data.result?.map((item, index) => (
                        <CTableRow key={index}>
                          <CTableHeaderCell scope="row">
                            {/* {data
                              ? data.total_count -
                                limit * (currentPage - 1) -
                                index
                              : ""} */}
                            {item?.index}
                          </CTableHeaderCell>
                          <CTableDataCell>
                            {item?.fullName ? item?.fullName : "-"}
                          </CTableDataCell>
                          <CTableDataCell>
                            {item?.mobile ? item?.mobile : "-"}
                          </CTableDataCell>
                          <CTableDataCell>
                            {item?.email ? item?.email : "-"}
                          </CTableDataCell>
                          <CTableDataCell>
                            {item?.userUniqueCode ? item?.userUniqueCode : "-"}
                          </CTableDataCell>
                          <CTableDataCell>
                            <div>{item?.city ? item?.city : "-"}</div>
                            <div>{item?.state ? item?.state : "-"}</div>
                            <div>{item?.country ? item?.country : "-"}</div>
                          </CTableDataCell>
                          <CTableDataCell>
                            {item?.dpId ? item?.dpId : "-"}
                          </CTableDataCell>
                          <CTableDataCell>
                            {item?.dpName ? item?.dpName : "-"}
                          </CTableDataCell>
                          <CTableDataCell>
                            {item?.clientId ? item?.clientId : "-"}
                          </CTableDataCell>
                          <CTableDataCell>
                            {item?.clientName ? item?.clientName : "-"}
                          </CTableDataCell>
                          <CTableDataCell>
                            {item?.isKycUpload ? "Yes" : "No"}
                          </CTableDataCell>
                          <CTableDataCell>
                            {item?.isKycCheck ? "Yes" : "No"}
                          </CTableDataCell>
                          <CTableDataCell> {item?.momentDate}</CTableDataCell>
                          <CTableDataCell>
                            <Link
                              to={`/admin/userlist/editusermanagement/${item?._id}`}
                            >
                              <CButton
                                className="text-white fw-bold"
                                color="info"
                              >
                                <CIcon icon={cilPencil} size="sm" />
                              </CButton>
                            </Link>
                          </CTableDataCell>
                          <CTableDataCell>
                            <CButton
                              className="text-white"
                              color="danger"
                              onClick={() => {
                                setVisible(!visible);
                                setId(item?._id);
                              }}
                            >
                              <CIcon icon={cilTrash} size="sm" />
                            </CButton>
                          </CTableDataCell>
                        </CTableRow>
                      ))
                    ) : (
                      <>
                        <CTableRow>
                          <CTableDataCell colSpan={7}>
                            {error ? error : "Something went wrong!"}
                          </CTableDataCell>
                        </CTableRow>
                      </>
                    )}

                    {/* Confirm Delete Modal */}
                    <CModal
                      alignment="center"
                      visible={visible}
                      onClose={() => setVisible(false)}
                    >
                      <CModalHeader>
                        <CModalTitle>Confirm Deletion</CModalTitle>
                      </CModalHeader>
                      <CModalBody>
                        Are you sure you want to delete this item?
                      </CModalBody>
                      <CModalFooter>
                        <CButton
                          color="secondary"
                          className="text-white"
                          onClick={() => setVisible(false)}
                        >
                          Close
                        </CButton>
                        <CButton
                          color="danger"
                          className="text-white"
                          onClick={() => handleDelete(id)}
                        >
                          Delete
                        </CButton>
                      </CModalFooter>
                    </CModal>
                    {/* <CTableRow>
                      <CTableHeaderCell colSpan="12" scope="row">
                        Total Result : {data?.result?.length}
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
              <span>Total Result : {data?.result?.length}</span>
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
                containerClassName={"pagination justify-content-center"}
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

export default UserList;
