import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import BeerBike from "../about/BeerBike";
import Traditions from "../about/Traditions";
import WillRice from "../about/WillRice";

export default function AboutRouter() {
  const { type } = useParams();

  function toPascal(s) {
    return s.replace(/\w\S*/g, function (t) {
      return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
    });
  }

  useEffect(() => {
    document.title = toPascal(type.split("-").join(" "));
  });

  return (
    <>
      {type === "will-rice" && <WillRice />}
      {type === "traditions" && <Traditions />}
      {type === "beer-bike" && <BeerBike />}
    </>
  );
}
