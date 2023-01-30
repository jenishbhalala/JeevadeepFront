import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import "./cookie.scss";
import Cookies from "universal-cookie";

const CookieModal = () => {
  const [visible, setVisible] = useState(false);
  const cookies = new Cookies();
  // setTimeout(() => {
  //   setVisible(true);
  // }, 2000);
  let my_cookie = cookies.get("accept_cookie");
  // console.log("my_cookies", my_cookie);
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const cookieSet = () => {
    cookies.set("accept_cookie", "true", { path: "/", expires: tomorrow });
    setVisible(false);
  };

  useEffect(() => {
    if (my_cookie === "true") {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);

  return (
    <>
      {/* <CButton onClick={() => setVisible(!visible)}>
        Vertically centered modal
      </CButton> */}
      <div className="modal_cookie">
        <CModal
          alignment="center"
          visible={visible}
          size="lg"
          // onClose={() => setVisible(false)}
          className="cookie_modal_box"
        >
          <CModalHeader className="cookie_header justify-content-center">
            <CModalTitle className="cookie_title">Welcome</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <div className="modal_cookie_content">
              <p>
                Trade Unlisted Is A Transactional Platform, We Are Not A Stock
                Exchange Or An Advisory Platform. Investments In Unlisted
                Products Carry A Risk And May Not Provide The Anticipated
                Returns And There Is A Possibility Of Losing The Entire Capital
                As Well. There Is No Assurance Of Exit And Listing Date And No
                Clarity Whether The IPO Will Come Or Not. Unlisted Shares Go In
                A Lock-In For 6 Months From The Date Of Allotment In The IPO. No
                One Should Rely Solely On The Information Published Or Presented
                Herein And Should Perform Personal Due Diligence Or Consult With
                An Independent Third-Party Advisor Prior To Making Any
                Investment Decisions. The Information Is Obtained From Secondary
                Sources, We Do Not Assure The Accuracy Of The Same. The
                Estimates And Information Is Based On Past Performance, Which
                Cannot Be Regarded As An Accurate Indicator Of Future
                Performance And Results.
                {/* We Further Clarify That We Or Any Of
                Our Representatives May Have Holdings In The Unlisted Shares Of
                The Represented Company. Users Are Advised To Take The Decisions
                Accordingly. */}
              </p>
              {/* We are not a stock exchange or a trading platform. We create
              liquidity for shareholders. */}
            </div>
          </CModalBody>
          <CModalFooter>
            <CButton className="btn_cookie_2" onClick={cookieSet}>
              I Understand
            </CButton>
            {/* <CButton className="btn_cookie_2">Accept</CButton> */}
          </CModalFooter>
        </CModal>
      </div>
    </>
  );
};

export default CookieModal;
