// import React from "react";
// import ReactPaginate from "react-paginate";

// const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
//   const isFirstPage = currentPage === 1;
//   const isLastPage = currentPage === totalPages;

//   return (
//     <div>
//       <button disabled={isFirstPage} onClick={onPrevPage}>
//         Previous
//       </button>
//       <span>
//         Page {currentPage} of {totalPages}
//       </span>
//       <button disabled={isLastPage} onClick={onNextPage}>
//         Next
//       </button>
//     </div>
//   );
// };

// export default Pagination;



import React from 'react';
import ReactPaginate from 'react-paginate';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePageClick = (data) => {
    onPageChange(data.selected + 1);
  };

  return (
    <ReactPaginate
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      activeClassName={'active'}
      previousLabel={'Prev'}
      nextLabel={'Next'}
      breakLabel={'...'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      nextClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextLinkClassName={'page-link'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
    />
  );
}

export default Pagination;
