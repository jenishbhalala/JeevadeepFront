import { CContainer } from "@coreui/react";
import React from "react";
import { ReactComponent as ErrorIcon } from "./svg/err404.svg";
import "./errors.scss";

const Error = () => {
  return (
    <div className="error">
      <CContainer>
        <div className="error_container">
          <ErrorIcon className="error_icon" />
        </div>
      </CContainer>
    </div>
  );
};

export default Error;
