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
  CRow,
  CCol,
} from "@coreui/react";
import { Link, useNavigate } from "react-router-dom";
import { adminAxiosInstance1 } from "../../../config/index";
import swal from "sweetalert";
import { DeleteModal } from "../../../common/DeleteModal";
import { Paginations } from "../../components/pagination";
import { Error404 } from "../../components/Error404";
import { Error500 } from "../../components/Error500";

const Viewgallery = () => {
  const [responsedata, setResponseData] = useState();
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [searchData, setSearchData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState();
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState("");

  const navigate = useNavigate();

  let limit = 10;
  const fetchData = async (currentPage, searchData) => {
    setLoading(true);
    try {
      const response = await adminAxiosInstance1.get(
        `gallery/?page=${currentPage}&limit=${limit}&search=${searchData}`
      );

      const totalData = response?.data?.count;
      setPageCount(Math.ceil(totalData / limit));
      console.log("resss", response)
      if (response?.status === 200) {
        setResponseData(response?.data?.results);
        setError(200);
        setLoading(false);
      }
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
      const response = await adminAxiosInstance1.delete(`gallery/${id}/`);
      if (response.status === 204) {
        setVisible(false);
        fetchData(currentPage, searchData);
        swal({ title: "Success", icon: "success", button: false, timer: 1500, })
      }
    }
    catch (error) {
      swal({ title: "please try again Record not deleted !!", icon: "success", button: false, timer: 1500, })
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
    fetchData(currentPage, searchData);
  }, [searchData]);

  useEffect(() => {
    fetchData(1, "");
  }, []);

  return (
    <>
      <div className="d-flex">
        <CIcon icon={cilGroup} size="xxl" />
        <h3>Gallery</h3>
      </div>
      <CRow>
        <CRow>
          <div className="admin-topp">
            <Link
              className="text-decoration-none text-white"
              to="/admin/gallery/add-gallery"        >
              <CButton className="btn-color">+Add New</CButton>
            </Link>
          </div>
        </CRow>
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
              {error === 200 ? (
                <>
                  <CTableHead>
                    <CTableRow style={{width:"100px"}}>
                      <CTableHeaderCell scope="col" style={{width:"100px"}}>Sr.No.</CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{width:"1200px"}}>
                        Gallery
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col"  style={{width:"100px"}}>Edit</CTableHeaderCell>
                      <CTableHeaderCell scope="col"  style={{width:"200px"}}>Delete</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {responsedata?.length > 0 && responsedata?.map((item, index) => (
                      <CTableRow key={index}>
                        <CTableHeaderCell scope="col">
                          {index + 1}
                        </CTableHeaderCell>
                        <CTableDataCell scope="col" ><img src={item.image} width="200px"/></CTableDataCell>

                        <CTableDataCell scope="col">
                          <Link to={`/admin/gallery/edit-gallery/${item.id}`}>
                            <CButton className="text-white" color="info">
                              <CIcon icon={cilPencil} size="sm" />
                            </CButton>
                          </Link>
                        </CTableDataCell>
                        <CTableDataCell scope="col">
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
      {console.log("error", error, "pageCount", pageCount)}
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

export default Viewgallery;
