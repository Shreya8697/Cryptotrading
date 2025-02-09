import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import "./styles.css";

export default function PaginationComponent({ handlePageChange }) {
  const [page, setPage] = useState(1);

  return (
    <div className="pagination-div">
      <Pagination
        count={10}
        page={page}
        onChange={(event, value) => {
          setPage(value);
          handlePageChange(event, value);
        }}
        sx={{
          "& .MuiPaginationItem-text": {
            color: "#fff !important",
            border: "1px solid var(--grey)",
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "transparent !important",
          },
          "& .Mui-selected": {
            backgroundColor: "var(--blue)",
            borderColor: "var(--blue)",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }}
      />
    </div>
  );
}
