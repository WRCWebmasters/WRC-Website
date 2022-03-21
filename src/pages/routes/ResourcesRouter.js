import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import BrandResources from "../resources/BrandResources";
import Calendar from "../resources/Calendar";
import Contact from "../resources/Contact";
import FormsAndFinances from "../resources/FormsAndFinances";
import OffCampus from "../resources/OffCampus";

export default function ResourcesRouter() {
  const { type } = useParams();

  useEffect(() => {
    document.title = type.split("-").join(" ").toUpperCase();
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
