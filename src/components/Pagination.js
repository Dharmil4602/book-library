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
