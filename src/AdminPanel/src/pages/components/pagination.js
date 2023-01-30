import React from "react"
import ReactPaginate from "react-paginate";
import bckSvg from "../../assets/backArrow.svg";
 import frtSvg from "../../assets/frontArrow.svg";
export const Paginations = ({handlePageClick,pageCount}) => {
    return (
        <ReactPaginate
            previousLabel={
                <>
                    <img src={bckSvg} alt="backButton" />
                </>
            }
            nextLabel={
                <>
                    <img src={frtSvg} alt="frtButton" />
                </>
            }
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    )
}