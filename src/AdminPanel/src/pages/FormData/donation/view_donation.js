import React, { useEffect, useState } from "react";
import CIcon from "@coreui/icons-react";
import { cilPencil, cilTrash, cilGroup } from "@coreui/icons";
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
  CTableCaption,
  CRow,
  CCol,
  CFormInput,
} from "@coreui/react";
import { Link, useNavigate } from "react-router-dom";
import { adminAxiosInstance1 } from "../../../config/index";
import swal from "sweetalert";
import { DeleteModal } from "../../../common/DeleteModal";
import { Paginations } from "../../components/pagination";
import { Error404 } from "../../components/Error404";
import { Error500 } from "../../components/Error500";
import "./donation.scss"

const ViewDonation = () => {
  const [responsedata, setResponseData] = useState();
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [error, setError] = useState();
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState("");
  const [searchData, setSearchData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  let limit = 10;

  const fetchData = async (currentPage, searchData) => {
    setLoading(true);
    try {
      const response = await adminAxiosInstance1.get(
        `make-donation/?page=${currentPage}&limit=${limit}&search=${searchData}`
      );
        console.log("response",response)
      const totalData = response?.data.count;
      setPageCount(Math.ceil(totalData / limit));
      if (response?.status === 200) {
        setResponseData(response.data.results);
        setError(200);
        setLoading(false);
      }
    } catch (error) {
      if (error.response.status === 404) {
        setError(404);
        setLoading(false);
        
        navigate("/admin/donation")
      } else {
        setError(500);
        setLoading(false);
      }
    }
  };


  const handleDelete = async (id) => {
    const response = await adminAxiosInstance1.delete(`make-donation/${id}/`);
    console.log("response", response)
      if(response.status === 204){
        setVisible(false);
        swal({ title: "Success", icon: "success", button: false,timer: 1500, })
        fetchData(currentPage, searchData);
      }
    else{
      swal({ title: "Something went wrong", icon: "error", button: false,timer: 1500, })

    }
  
  };

  const handlePageClick = (data) => {
    // console.log(data.selected);
    const currentPage = data.selected + 1;
    setCurrentPage(currentPage)
    fetchData(currentPage, searchData)
  };
  const pageData = async (currentPage) => {
    fetchData(currentPage, searchData);
  };
  useEffect(() => {
    pageData(currentPage);
  }, [currentPage]);

  useEffect(() => {
    fetchData(currentPage, searchData);
  }, [searchData]);

  useEffect(() => {
    fetchData(1, "");
  }, []);

  return (
    <>
      <div className="d-flex">
        <CIcon icon={cilGroup} size="xxl" />
        <h3>Donation</h3>
      </div>
      <CRow>
        <CRow>
          <div className="admin-topp">
            <CCol lg={4} md={4} sm={5}>
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
            <Link
              className="text-decoration-none text-white"
              to="/admin/donation/add-donation"        >
              <CButton style={{background:"#622cc4"}}>+Add New</CButton>
            </Link>
          </div>
        </CRow>
      </CRow>
      
      {loading ? (
        <div className="loader-content">
          <div className="spinner-border text-secondary"></div>
        </div>
      ) : (
        <>
          <div className="bg-white mt-3 ps-3 pe-3 pb-1 mb-3">
            <CTable caption="top" responsive>
              {error === 200 && responsedata?.length > 0 ? (
                <>
                  <CTableHead className="head">
                    <CTableRow>
                      <CTableHeaderCell scope="col">Sr.No.</CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="mw-title">
                        Full name
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="mw-title">
                        Email
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="mw-title">
                        Location
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="mw-title">
                        Comment
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="mw-title">
                        Value
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" >Edit</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {responsedata?.length > 0 && responsedata?.map((item, index) => (
                      <CTableRow key={index}>
                        <CTableHeaderCell scope="row">
                          {index + 1}
                        </CTableHeaderCell>
                        <CTableDataCell>{item.full_name}</CTableDataCell>
                        <CTableDataCell>{item.email}</CTableDataCell>
                        <CTableDataCell>{item.location}</CTableDataCell>
                        <CTableDataCell>{item.comment}</CTableDataCell>
                        <CTableDataCell>{item.value}</CTableDataCell>
                        <CTableDataCell>
                          <Link to={`/admin/donation/edit-donation/${item.id}`}>
                            <CButton className="text-white"style={{background:"#622cc4"}}>
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
                              setId(item?.id);
                            }}
                          >
                            <CIcon icon={cilTrash} size="sm" />
                          </CButton>
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
              <Paginations handlePageClick={handlePageClick} pageCount={pageCount} />
            </div>
          </>
        )
      )}
    </>
  );
};

export default ViewDonation;
