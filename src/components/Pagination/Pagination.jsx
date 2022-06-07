import React from "react";
import { Typography, Button } from "@mui/material";
import useStyles from "./styles";

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const classes = useStyles();

  const handlePrevious = () => {
    if (currentPage !== 1) {
      setPage((previousPage) => previousPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((previousPage) => previousPage + 1);
    }
  };

  if (totalPages === 0) return;
  return (
    <div className={classes.container}>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="button"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      <Typography variant="h4" className={classes.pageNumber}>
        {currentPage}
      </Typography>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="button"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
