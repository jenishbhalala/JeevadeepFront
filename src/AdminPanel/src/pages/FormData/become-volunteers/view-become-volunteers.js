import React, { useEffect, useState } from "react";
import {
  CButton,
  CRow,
  CTable,
  CTableBody,
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
import  { adminAxiosInstance1 } from "../../../config";
import "../scss/upcoming.scss";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { SuccesSwal } from "../../components/swal";
import { DeleteModal } from "../../../common/DeleteModal";
import { Paginations } from "../../components/pagination";
import { Error404 } from "../../components/Error404";
import { Error500 } from "../../components/Error500";

const View_become_volunteers = () => {
  const [responsedata, setResponseData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [searchData, setSearchData] = useState("");
  const [error, setError] = useState(200);
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState("");
  const navigate = useNavigate()
  let limit = 10;
  let totalCount;

  const fetchData = async (currentPage, searchData) => {
    setLoading(true);
    try {
      const response = await adminAxiosInstance1.get(
        `become-volunteer/?page=${currentPage}&limit=${limit}&str=${
          searchData ? searchData : ""
        }`
      );
      if (response.status === 200) {
        totalCount = parseInt(response?.data?.count);
        setPageCount(Math.ceil(totalCount / limit));
        setResponseData(response?.data?.results);
        setError(200);
      }
      setLoading(false);
    } catch (error) {
      if (error.response.status === 404) {
        setError(404);
        setLoading(false);
      } else {
        setError(500);
        setLoading(false);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await adminAxiosInstance1.delete(`/become-volunteer/${id}`);
       console.log(response);
      setVisible(false);
      fetchData(currentPage, searchData);
      if (response?.status === 204) {
        setResponseData(response.data)
        SuccesSwal()
      } else {
        console.log("error",error)
        swal({
          title: "Something went wrong!!",
          icon: "error",
          button: false,
          timer: 1500,
        })
      }
      navigate("/admin/become-volunteers");
    } catch (error) {
      console.log("error=========",error)
      swal({
        title: error.data.error ||"Something went wrong!!" ,
        icon: "error",
        button: false,
        timer: 1500,
      })
    }
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
    fetchData((data.selected + 1,searchData))
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
        <h3>Become volunteers</h3>
      </div>
      <CRow>
        {/* <CCol sm={12} className="mt-4">
          <h5>Search volunteers</h5>
        </CCol> */}

        <div className="admin-topp">
          {/* <CCol lg={3} md={4} sm={5}>
            <CFormInput
              type="search"
              id="exampleFormControlInput1"
              placeholder="Search Text"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
          </CCol> */}
         
          <Link to={"/admin/become-volunteers/add-become-volunteers"}>
            <CButton className="btn-color" onClick={() => {}}>
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
                        Email
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="up-shareName">
                        Occupation
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="up-industry">
                       Number
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="up-industry">
                        Message
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="up-industry">
                       Address
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="up-industry">
                       Birthdate
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
                    {responsedata &&
                      responsedata?.map((item, index) => (
                        <CTableRow key={index}>
                          <CTableHeaderCell scope="row">
                            {index + 1}
                          </CTableHeaderCell>
                          <CTableDataCell scope="row">
                            {item?.full_name}
                          </CTableDataCell>
                          <CTableDataCell scope="row">
                            {item?.email}
                          </CTableDataCell>
                          <CTableDataCell scope="row">
                            {item?.occupation}
                          </CTableDataCell>
                          <CTableDataCell scope="row">
                            {item?.number}
                          </CTableDataCell>
                          <CTableDataCell scope="row">
                            {item?.message}
                          </CTableDataCell>
                          <CTableDataCell scope="row">
                            {item?.address}
                          </CTableDataCell>
                          <CTableDataCell scope="row">
                            {item?.birth_date}
                          </CTableDataCell>
                          <CTableDataCell>
                            <Link
                              to={`/admin/become-volunteers/edit-become-volunteers/${item?.id}`}
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
              <span>Total Result : {responsedata?.total_count}</span>
              <Paginations handlePageClick={handlePageClick} pageCount={pageCount}/>
            </div>
          </>
        ) 
      )}
    </>
  );
};

export default View_become_volunteers;
