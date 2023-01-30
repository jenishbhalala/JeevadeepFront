import { CContainer } from "@coreui/react";
import React from "react";
import noData from "./svg/noData.jpg";
import "./errors.scss";

const NoData = () => {
  return (
    <div className="error">
      <CContainer>
        <div className="error_container">
          <img src={noData} className="no_data" alt="" />
        </div>
      </CContainer>
    </div>
  );
};

export default NoData;
