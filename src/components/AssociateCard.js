import React from "react";
import Fade from "react-reveal/Fade";

// Make sure that the image name ends with .jpg and matches the associate name in the csv. Or else the site
// will not load :")
export default function AssociateCard(props) {
  return (
    <Fade bottom>
    <div style = {{display: "flex", marginBottom: "2vw"}}>
      <div className="col-4">
        <img
          src={require(`../resources/images/associates/${props.desc["Name"]}.jpg`).default}
          style={{width: "95%", maxHeight: "25vw", objectFit: "cover"}}
          alt={`Portrait of ${props.desc["Name"]}`}
        />
      </div>
      <div className="col-3">
        <h3>{props.desc["Name"]}</h3>
        <p>
          {props.desc["Job"]}<br/>{props.desc["Second Job"]}{props.desc["Second Job"] && (<br/>)}
          <a href={`mailto:${props.desc["Email"]}`}>{props.desc["Email"]}</a><br/>
          <a href={`mailto:${props.desc["Second Email"]}`}>{props.desc["Second Email"]}</a>
        </p>
      </div>
      <div className="col-5">
        <p style = {{paddingLeft: "4%"}}>{props.desc["Bio"]}</p>
      </div>
    </div>
    </Fade>
  );
}
