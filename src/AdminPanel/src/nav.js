import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilBook,
  cilCircle,
  cilFile,
  cilSpeedometer,
  cilUser,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CWidgetStatsB } from "@coreui/react";

const nav = [
  // {
  //   component: CNavItem,
  //   name: "Dashboard",
  //   to: "/admin/dashboard",
  //   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  // },
  {
    component: CNavGroup,
    name: "Form Data",
    to: "/admin/formdata",
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,

  },

  {
    component: CNavItem,
    name: "Donation",
    to: "/admin/donation",
    icon: <CIcon icon={cilCircle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Our volunteers",
    to: "/admin/our-volunteers",
    icon: <CIcon icon={cilCircle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Become volunteers",
    to: "/admin/become-volunteers",
    icon: <CIcon icon={cilCircle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Blog",
    to: "/admin/blog",
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Gallery",
    to: "/admin/gallery",
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Slider",
    to: "/admin/slider",
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Contact",
    to: "/admin/formdata/contact",
    icon: <CIcon icon={cilCircle} customClassName="nav-icon" />,
  },
  
];

export default nav;
