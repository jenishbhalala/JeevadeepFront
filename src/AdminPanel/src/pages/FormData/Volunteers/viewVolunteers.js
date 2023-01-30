import React, { useEffect, useState } from "react";
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
import CIcon from "@coreui/icons-react";
import {
  cilDescription,
  cilPencil,
  cilTrash,
} from "@coreui/icons";
import adminAxiosInstance, { adminAxiosInstance1 } from "../../../config";
import "../scss/upcoming.scss";
import { Link } from "react-router-dom";
import { DeleteModal } from "../../../common/DeleteModal";
import { Paginations } from "../../components/pagination";
import { Error404 } from "../../components/Error404";
import { Error500 } from "../../components/Error500";
import swal from "sweetalert";

const Viewvolunteers = () => {
  const [responseData, setResponseDataData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [searchData, setSearchData] = useState("");
  const [error, setError] = useState(200);
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState("");

  let limit = 10;
  let totalCount;

  const fetchData = async (currentPage, searchData) => {
    setLoading(true);
    try {
      const response = await adminAxiosInstance1.get(
        `/our-volunteers/?page=${currentPage}&limit=${limit}&search=${searchData ? searchData : ""
        }`
      );
      if (response.status === 200) {
        console.log(response)
        totalCount = parseInt(response?.data?.count);
        setPageCount(Math.ceil(totalCount / limit));
        setResponseDataData(response?.data?.results);
        setError(200);
      }
      setLoading(false);
    } catch (error) {
      if (error.response.status === 404) {
        setError(404);
        setLoading(false);
        swal({ title: "error", icon: "error", button: false,timer: 1500,  })
      } else {
        setError(500);
        setLoading(false);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await adminAxiosInstance1.delete(`/our-volunteers/${id}`);
      // console.log(response);
      if(response.status === 204){
      setVisible(false);
      fetchData(currentPage, searchData);
      swal({ title: "Success", icon: "success", button: false,timer: 1500, })}
    } catch (error) {
      swal({ title: " please try again Record not deleted !!", icon: "success", button: false,timer: 1500,  })
    }
  };


  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
    fetchData(currentPage, searchData);
  };

  const pageData = async (currentPage) => {
    fetchData(currentPage, searchData);
  };

  useEffect(() => {
    pageData(currentPage);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    fetchData(1, searchData);
  }, [searchData]);

  useEffect(() => {
    fetchData(1, "");
  }, []);

  return (
    <>
      <div className="d-flex">
        <CIcon icon={cilDescription} size="xxl" />
        <h3>Our volunteers</h3>
      </div>
      <CRow>
        <div className="admin-topp">
          <CCol lg={4} md={4} sm={5}>
            <CFormInput
              type="search"
              id="exampleFormControlInput1"
              placeholder="Search Text"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
          </CCol>
          <Link to={"/admin/our-volunteers/add-volunteers"}>
            <CButton className="btn-color" onClick={() => { }}>
              +Add New
            </CButton>
          </Link>
        </div>
      </CRow>
      {loading ? (
        <div className="loader-content">
          <div className="spinner-border text-secondary"></div>
        </div>
      ) : (
        <>
          <div className="bg-white mt-3 ps-3 pe-3 pb-1 mb-3">
            <CTable caption="top" responsive>
              {error === 200 ? (
                <>
                  <CTableHead>
                    <CTableRow className="head">
                      <CTableHeaderCell scope="col">Sr.No.</CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="up-shareName">
                        Name
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="up-shareName">
                        Occupation
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="up-industry">
                        Image
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="up-tdate">
                        Edit
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="up-tdate">
                        Delete
                      </CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {responseData &&
                      responseData?.map((item, index) => (
                        <CTableRow key={index}>
                          <CTableHeaderCell scope="row">
                            {index + 1}
                          </CTableHeaderCell>
                          <CTableDataCell>
                            {item?.name}
                          </CTableDataCell>
                          <CTableDataCell>
                            {item?.occupation}
                          </CTableDataCell>
                          <CTableDataCell>
                            <img
                              src={item?.image}
                              alt="logo"
                              style={{ width: "100px" }}
                            />
                          </CTableDataCell>
                          <CTableDataCell>
                            <Link
                              to={`/admin/our-volunteers/edit-volunteers/${item?.id}`}
                            >
                              <CButton
                                className="btn-color text-white fw-bold"
                                
                              >
                                <CIcon icon={cilPencil} size="sm" />
                              </CButton>
                            </Link>
                          </CTableDataCell>
                          <CTableDataCell>
                            <Link to={``}>
                              <CButton
                                className="text-white fw-bold"
                                color="danger"
                                onClick={() => {
                                  setVisible(!visible);
                                  setId(item?.id);
                                }}
                              >
                                <CIcon icon={cilTrash} size="sm" />
                              </CButton>
                            </Link>
                          </CTableDataCell>
                        </CTableRow>
                      ))}
                    <DeleteModal setVisible={setVisible} visible={visible} handleDelete={handleDelete} id={id} />
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
      {error === 200 && (
        pageCount && pageCount > 1 && (
          <>
            <div className="myPaginationBottom">
              <span>Total Result : {responseData?.total_count}</span>
              <Paginations handlePageClick={handlePageClick} pageCount={pageCount} />
            </div>
          </>
        ))}
    </>
  );
};

export default Viewvolunteers;
