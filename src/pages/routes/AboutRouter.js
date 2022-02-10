import React, {useEffect} from "react";

import { useParams } from "react-router-dom";

import BeerBike from "../about/BeerBike";
import WillRice from "../about/WillRice";

export default function AboutRouter() {
  const { type } = useParams();

  useEffect(() => {
    document.title = type.split("-").join(' ').toUpperCase();
  });

  return (
    <>
      <p><a href="/about">about</a> > {type}</p>
      {type === "will-rice" && <WillRice/>}
      {type === "beer-bike" && <BeerBike />}
    </>
  );
}
