import React from "react"
import { CTableBody, CTableDataCell, CTableRow } from "@coreui/react"
import err404 from "../../errors/svg/noData.jpg";

export const Error404 = () => {
    return (
        <CTableBody>
            <CTableRow>
                <CTableDataCell className="d-flex justify-content-center">
                    <img
                        src={err404}
                        alt=""
                        style={{ height: "400px", width: "400px" }}
                    />
                </CTableDataCell>
            </CTableRow>
        </CTableBody>
    )
}

