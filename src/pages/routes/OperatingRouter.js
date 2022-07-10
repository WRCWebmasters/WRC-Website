import React, {useEffect} from "react";

import { useParams } from "react-router-dom";

import Budget from "../operating/Budget";
import Constitution from "../operating/Constitution";
import OperatingForms from "../operating/OperatingForms";
import HousingAndParking from "../operating/HousingAndParking";

export default function OperatingRouter() {
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
      {type === "budget" && <Budget/>}
      {type === "constitution" && <Constitution/>}
      {type === "operating-forms" && <OperatingForms/>}
      {/* {type === "housing-and-parking" && <HousingAndParking/>} */}
    </>
  );
}
