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

import "../people/people.css";
export default function PeopleRouter() {
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
