import React from "react";
import { Link } from "react-router-dom";
import ToggleButton from "../Components/ToggleButton";

function Formation({ props, onClick }) {
  return (
    <div className="container">
      <h3 className="header">
        {" "}
        ID: {props.id}{" "}
      </h3>

      <Link
        style={{ display: "inline-block", float: "right" }}
        to={`/${props.type}`}
      >
        expand {props.type} dynos
      </Link>

      <h5 className="header"> Size: {props.size} </h5>
      <h5 className="header"> updated at: {props.updated_at} </h5>
        <h4 className="task reminder"> Quantity : {props.quantity}</h4>
        <ToggleButton props={props} onClick={onClick} />
    </div>
  );
}




export default Formation;
