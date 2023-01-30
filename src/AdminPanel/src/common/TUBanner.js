import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useState } from "react";

const TUBanner = ({ isActive, click }) => {
  const [visible, setVisible] = useState(isActive);
  return (
    <>
      <CModal
        alignment="center"
        size="lg"
        visible={isActive}
        onClose={() => click(false)}
      >
        <CModalHeader>
          {/* <CModalTitle>Modal title</CModalTitle> */}
        </CModalHeader>
        <CModalBody>
          <a
            href="https://bit.ly/3ayuvM0"
            target="_blank
          "
            rel="noreferrer"
          >
            <img src={"Banner"} className="img-fluid" alt="TUBanner" />
          </a>
        </CModalBody>
      </CModal>
    </>
  );
};

export default TUBanner;
