import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import ATeam from "../people/ATeam";
import AlumniAndAssociates from "../people/AlumniAndAssociates";
import Caregivers from "../people/Caregivers";

export default function PeopleRouter() {
  const { type } = useParams();

  useEffect(() => {
    document.title = type.split("-").join(" ").toUpperCase();
  });
  return (
    <>
      <p><a href="/people">people</a> > {type}</p>
      {type === "a-team" && <ATeam />}
      {type === "alumni-associates" && <AlumniAndAssociates />}
      {type === "caregivers" && <Caregivers />}
    </>
  );
}
