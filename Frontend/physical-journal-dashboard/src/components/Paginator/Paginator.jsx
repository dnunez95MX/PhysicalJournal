import { Button } from "antd";
import React from "react";

//import './Paginator.css';

const Paginator = (props) => (
  <div className="paginator">
    {props.children}
    <div className="paginator__controls">
      {props.currentPage > 1 && (
        <Button className="paginator__control" onClick={props.onPrevious}>
          Previous
        </Button>
      )}
      {props.currentPage < props.lastPage && (
        <Button className="paginator__control" onClick={props.onNext}>
          Next
        </Button>
      )}
    </div>
  </div>
);

export default Paginator;
