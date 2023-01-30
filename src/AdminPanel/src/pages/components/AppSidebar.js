import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { AppSidebarNav } from "./AppSidebarNav";

// import { tradeUnlisted } from "../../assets/brand/trade-Unlisted";
// import { sygnet } from "../../assets/brand/sygnet";
import SimpleBar from "simplebar-react";
import Logo from "./../../../../assets/Images/jeevandeep_foundation_logo.png"
import "simplebar/dist/simplebar.min.css";

// sidebar nav config
import navigation from "../../nav";

const AppSidebar = () => {
  const dispatch = useDispatch();
  // const selector = useSelector((state) => state);
  const unfoldable = useSelector(
    (state) => state.changeState?.sidebarUnfoldable
  );
  const sidebarShow = useSelector((state) => state.changeState?.sidebarShow);

  // console.log("state ==>", selector);

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });
      }}
      style={{background:"white"}}
      className="admin-sidebar"
    >
      <CSidebarBrand className="d-none d-md-flex" style={{
    background: "white" }}
    
 to="/">
        <CIcon
          className="sidebar-brand-full"
          icon={Logo}
          height={35}
        /> 
         <img
          src={Logo}
          className="sidebar-brand-full"
          style={{ width: 160 }}
          alt=""
        /> 
        

        <CIcon
          className="sidebar-brand-narrow "
         icon={Logo}
          height={35}
          width={100}
          style={{color:"red"}}
        />
      </CSidebarBrand>
      <CSidebarNav className="admin-sidebar">
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() =>
          dispatch({ type: "set", sidebarUnfoldable: !unfoldable })
        }
      />
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
