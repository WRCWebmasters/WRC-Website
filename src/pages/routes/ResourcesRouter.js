import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import BrandResources from "../resources/BrandResources";
import Budget from "../resources/Budget";

export default function ResourcesRouter() {
  const { type } = useParams();

  useEffect(() => {
    document.title = type.split("-").join(" ").toUpperCase();
  });

  return (
    <>
      <p><a href="/resources">resources</a> > {type}</p>
      {type === "brand-resources" && <BrandResources />}
      {type === "budget" && <Budget />}
    </>
  );
}
