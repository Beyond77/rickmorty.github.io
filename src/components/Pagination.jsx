import React from "react";

const Pagination = ({handleLastPage, handleNextPage, nextPage}) => {
  return (
    <div className="buttons-container">
      <button onClick={handleLastPage}> &lt; </button>
      <div>{nextPage}</div>
      <button onClick={handleNextPage}> &gt; </button>
    </div>
  );
};

export default Pagination;
