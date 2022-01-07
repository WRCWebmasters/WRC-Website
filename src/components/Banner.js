import React from "react";

import { colors } from "../resources/colors";

export default function Banner(props) {
  return (
    //needs hover animation + click to exit slide away animation
    <a
      style={{
        textDecoration: "none",
        color: "black",
        height: '50px',
        zIndex: 20,
      }}
      href={props.link}
    >
      <div
        style={{
          height: "50px",
          padding: "10px",
          display: "flex",
          width: '100vw',
          backgroundColor: colors.gold,
          alignItems: "center"
        }}
      >
        {props.text}
      </div>
    </a>
  );
}
