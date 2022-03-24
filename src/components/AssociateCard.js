import React from "react";

export default function AssociateCard(props) {
  return (
    <>
      <div className="col-4">
        <img src={props.img} style={{ width: "100%" }} alt={`Portrait of ${props.name}`} />
      </div>
      <div className="col-3">
        <h3>{props.name}</h3>
        <p>
          {props.title}
          <br />
          <a href={`mailto:${props.email}`}>{props.email}</a>
        </p>
      </div>
      <div className="col-5">
        <p>{props.desc}</p>
      </div>
    </>
  );
}
