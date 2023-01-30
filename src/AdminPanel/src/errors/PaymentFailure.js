import { CContainer } from "@coreui/react";
import React, { useEffect } from "react";
import { ReactComponent as ErrorIcon } from "./svg/payment-failed.svg";
import "./errors.scss";
import { useNavigate } from "react-router-dom";
const PaymentFailure = () => {
  return (
    <div className="error">
      <CContainer>
        <div className="error_container">
          <ErrorIcon className="error_icon" />
        </div>
        <h2 className="payment_failedd">Payment Failed</h2>
      </CContainer>
    </div>
  );
};

export default PaymentFailure;
