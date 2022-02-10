import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import ATeam from "../people/ATeam";
import AlumniAndAssociates from "../people/AlumniAndAssociates";
import Caregivers from "../people/Caregivers";
import StudentLeadership from "../people/StudentLeadership";
import Fellows from "../people/Fellows";
import PAA from "../people/PAA";
import PCA from "../people/PCA";
import RHA from "../people/RHA";
import Strive from "../people/Strive";

export default function PeopleRouter() {
  const { type } = useParams();

  useEffect(() => {
    document.title = type.split("-").join(" ").toUpperCase();
  });
  return (
    <>
      <p><a href="/people">people</a> > {type}</p>
      {type === "a-team" && <ATeam />}
      {type === "alumni-and-associates" && <AlumniAndAssociates />}
      {type === "caregivers" && <Caregivers />}
      {type === "student-leadership" && <StudentLeadership/>}
      {type === "fellows" && <Fellows/>}
      {type === "paas" && <PAA/>}
      {type === "pcas" && <PCA/>}
      {type === "rhas" && <RHA/>}
      {type === "strive" && <Strive/>}
      
    </>
  );
}
