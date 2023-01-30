import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react"

export const DeleteModal = ({setVisible,handleDelete,id,visible}) => {
    return (
        <CModal
            alignment="center"
            visible={visible}
            onClose={() => setVisible(false)}
        >
            <CModalHeader>
                <CModalTitle>Confirm Deletion</CModalTitle>
            </CModalHeader>
            <CModalBody>
                Are you sure you want to delete this item?
            </CModalBody>
            <CModalFooter>
                <CButton
                    color="secondary"
                    className="text-white"
                    onClick={() => setVisible(false)}
                >
                    Close
                </CButton>
                <CButton
                    color="danger"
                    className="text-white"
                    onClick={() => handleDelete(id)}
                >
                    Delete
                </CButton>
            </CModalFooter>
        </CModal>
    )
}