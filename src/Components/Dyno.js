import React from "react";

function Dyno({props}) {
  return (
    <div className="container">
      <div style={{ width: "100%", display: "table" }}>
        <div style={{ display: "table-row" }}>
          <h3 className="header" style={{ display: "table-cell" }}>
            {" "}
            Name: {props.name}
          </h3>
          <h4
            className="task reminder"
            style={{
              display: "table-cell",
              color: props.state === "up" ? "green" : "red",
            }}
          >
            {" "}
            Status: {props.state}
          </h4>
        </div>
      </div>
      <h5 className="header"> ID: {props.id}</h5>
      <h5 className="header"> created date: {props.created_at}</h5>
      <h5 className="header"> Size: {props.size}</h5>
      <h5 className="header"> update date: {props.updated_at}</h5>
    </div>
  );
}

export default Dyno;
