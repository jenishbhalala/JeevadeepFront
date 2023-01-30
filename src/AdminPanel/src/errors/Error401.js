import { CContainer } from "@coreui/react";
import React, { useEffect } from "react";
import { ReactComponent as ErrorIcon } from "./svg/err401.svg";
import "./errors.scss";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const userToken = localStorage.getItem("userToken");
  const cpToken = localStorage.getItem("cpToken");

  const navigate = useNavigate();
  const redirectHome = () => {
    if (userToken && cpToken) {
      return false;
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    redirectHome();
  }, [cpToken, userToken]);

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
