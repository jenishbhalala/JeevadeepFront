import React from "react"
import { CTableBody, CTableDataCell, CTableRow } from "@coreui/react"
import err500 from "../../errors/svg/err500.svg";

export const Error500 = () => {
    return (
        <CTableBody>
            <CTableRow>
                <CTableDataCell className="d-flex justify-content-center">
                    <img
                        src={err500}
                        alt=""
                        style={{ height: "400px", width: "400px" }}
                    />
                </CTableDataCell>
            </CTableRow>
        </CTableBody>
    )
}

