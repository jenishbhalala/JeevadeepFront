import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from "@coreui/icons";

// import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from "./header/index";
// import logo from "../../assets/brand/tradelisted.svg";
import adminAxiosInstance from "../../config";
import Logo from "../../../../assets/Images/jeevandeep_foundation_logo.png"

const AppHeader = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.changeState?.sidebarShow);
  const adminToken = localStorage.getItem("token");
  const fetchProfile = async () => {
    try {
      // console.log("before");
      const res = await adminAxiosInstance.get("/adminData/get/", {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      // console.log("res", res);
      if (res.status === 200) {
        setData(res.data?.data);
      }
    } catch (err) {
      // console.log(err.res.status);
    }
  };

  React.useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <CHeader position="sticky" className="mb-4 bg-white ">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} className="text-dark" size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <img className="img-fluid"  alt="logo" src={Logo} style={{width: "125px"}}/>
        </CHeaderBrand>
        <CHeaderNav className="ms-auto">
          {/* <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" className="text-white" />
            </CNavLink>
          </CNavItem> */}
          {/* <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilList} size="lg" className="text-white" />
            </CNavLink>
          </CNavItem> */}
          <CNavItem>
            <CNavLink
              className="text-white"
              style={{
                width: 135,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              href="#"
            >
              {/* <CIcon icon={cilEnvelopeOpen} size="lg" className="text-white" /> */}
              {/* Kushal Rajyaguru */}
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown
            srcImg={data?.profileImage}
            name={data?.fullName}
          />
        </CHeaderNav>
      </CContainer>
      {/* <CHeaderDivider /> */}
 
    </CHeader>
  );
};

export default AppHeader;
