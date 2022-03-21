import React, {useEffect} from "react";

import { useParams } from "react-router-dom";

import Budget from "../operating/Budget";
import Constitution from "../operating/Constitution";
import OperatingForms from "../operating/OperatingForms";
import HousingAndParking from "../operating/HousingAndParking";

export default function OperatingRouter() {
  const { type } = useParams();

  useEffect(() => {
    document.title = type.split("-").join(' ').toUpperCase();
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
