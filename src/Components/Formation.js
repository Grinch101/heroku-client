import React from "react";
import { Link } from "react-router-dom";

function Formation({ props, toggleFormationQuantity }) {
  return (
    <div className="container">
      <h3 style={{ display: "inline-block" }} className="header">
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
      <h4
        className="task reminder"
        onDoubleClick={async () => {
          await toggleFormationQuantity(props.id);
        }}
      >
        {" "}
        Quantity : {props.quantity}
      </h4>
    </div>
  );
}

export default Formation;
