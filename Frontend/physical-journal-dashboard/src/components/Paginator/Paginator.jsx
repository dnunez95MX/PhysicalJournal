import { Button } from "antd";
import React from "react";

//import './Paginator.css';

const Paginator = (props) => (
  <div className="paginator">
    {props.children}
    <div>
      {props.currentPage > 1 && (
        <Button onClick={props.onPrevious}>Previous</Button>
      )}
      {console.log(props.lastPage)}
      {props.currentPage < props.lastPage && (
        <Button onClick={props.onNext}>Next</Button>
      )}
    </div>
  </div>
);

export default Paginator;
