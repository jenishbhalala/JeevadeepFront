import React, { useEffect, useState } from "react";
import CIcon from "@coreui/icons-react";
import { cilPencil, cilTrash, cilGroup, cilReload } from "@coreui/icons";
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
  CFormInput,
} from "@coreui/react";
import { Link, useNavigate } from "react-router-dom";
import { adminAxiosInstance1 } from "../../../config/index";
import "./Blog.scss";
import { height } from "@mui/system";
import { DeleteModal } from "../../../common/DeleteModal";
import swal from "sweetalert";
import { Paginations } from "../../components/pagination";
import { Error404 } from "../../components/Error404";
import { Error500 } from "../../components/Error500";

const Blog = () => {
  const [blogdata, setBlogData] = useState();
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
      const response = await adminAxiosInstance1.get(`blog/?page=${currentPage}&limit=${limit}&search=${searchData ? searchData : ""}`);
      console.log(response.status);

      const totalData = response?.data.count;
      setPageCount(Math.ceil(totalData / limit));
      console.log("reaa", response);
      if (response?.status === 200) {
        setBlogData(response.data.results);
        setError(200);
        setLoading(false);
      }
    } catch (error) {
      console.log("errorrrr", error)
      if (error?.response?.status === 404) {
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
      const response = await adminAxiosInstance1.delete(`blog/${id}`);
      if (response.status === 204) {
        setVisible(false);
        fetchData(currentPage, searchData);
        swal({ title: "Success", icon: "success", button: false, timer: 1500, })
      }
    }
    catch (error) {
      swal({ title: " please try again Record not deleted !!", icon: "success", button: false, timer: 1500, })
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
        <h3>Blog</h3>
      </div>
      <CRow>
        <CRow>
          <div className="d-flex justify-content-between mt-2">
            <div className="admin-topp">
              <CCol lg={6} md={4} sm={5}>
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
                to="/admin/blog/blogmanagement"
              >
                <CButton color="dark">+Add New</CButton>
              </Link>
            </div>
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
              {error === 200 ? (
                <>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Sr.No.</CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="mw-title">
                        Heading
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="mw-title">
                        Description
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="mw-title">
                        Location
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="mw-title">
                        Image
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {blogdata.length > 0 && blogdata?.map((item, index) => (
                      <CTableRow key={index}>
                        <CTableHeaderCell scope="row">
                          {index + 1}
                        </CTableHeaderCell>
                        <CTableDataCell>{item.heading}</CTableDataCell>
                        <CTableDataCell>{item.description}</CTableDataCell>
                        <CTableDataCell>{item.location}</CTableDataCell>
                        <CTableDataCell><img src={item.image} style={{ width: "10%", height: "10%" }} /></CTableDataCell>
                        <CTableDataCell>
                          <Link to={`blogmanagement/${item?.id}`}>
                            <CButton className="blog-update text-white">
                              <CIcon icon={cilPencil} size="sm" />
                            </CButton>
                          </Link>
                        </CTableDataCell>
                        <CTableDataCell>
                          <CButton
                            className="delete-btn"
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
      {error === 200 ? (
        pageCount && pageCount > 1 ? (
          <>
            <div className="myPaginationBottom">
              <span>Total Result : {blogdata?.total_count}</span>
              <Paginations handlePageClick={handlePageClick} pageCount={pageCount} />
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

export default Blog;
