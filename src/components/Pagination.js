import React from "react";

const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div></div>
      <button disabled={isFirstPage} onClick={onPrevPage}>
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button disabled={isLastPage} onClick={onNextPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
