import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import BrandResources from "../resources/BrandResources";
import Calendar from "../resources/Calendar";
import Contact from "../resources/Contact";
import FormsAndFinances from "../resources/FormsAndFinances";
import OffCampus from "../resources/OffCampus";

export default function ResourcesRouter() {
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
      {type === "brand-resources" && <BrandResources />}
      {type === "calendar" && <Calendar/>}
      {type === "contact" && <Contact/>}
      {type === "forms-and-finances" && <FormsAndFinances/>}
      {type === "off-campus" && <OffCampus/>}
    </>
  );
}
