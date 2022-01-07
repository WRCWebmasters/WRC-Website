import React, {useEffect} from "react";

import { useParams } from "react-router-dom";

import Communications from "../general/Communications";
import Constitution from "../general/Constitution";
import Contact from "../general/Contact";
import Diet from "../general/Diet";
import Fellows from "../general/Fellows";
import Finances from "../general/Finances";
import Forms from "../general/Forms";
import History from "../general/History";
import HousingAndParking from "../general/HousingAndParking";
import NewStudents from "../general/NewStudents";
import PAA from "../general/PAA";
import RequestingMoney from "../general/RequestingMoney";
import RHA from "../general/RHA";
import Strive from "../general/Strive";
import StudentLeadership from "../general/StudentLeadership";
import Today from "../general/Today";
import Traditions from "../general/Traditions";
import WilliamMarsh from "../general/WilliamMarsh";

export default function GeneralRouter() {
  const { type } = useParams();

  useEffect(() => {
    document.title = type.split("-").join(" ").toUpperCase();
  });

  return (
    <>
      <p><a href="/general">general</a> > {type}</p>
      {type === "communications" && <Communications />}
      {type === "constitution" && <Constitution />}
      {type === "contact" && <Contact />}
      {type === "diet" && <Diet />}
      {type === "fellows" && <Fellows />}
      {type === "finances" && <Finances />}
      {type === "forms" && <Forms />}
      {type === "history" && <History />}
      {type === "housing-and-parking" && <HousingAndParking />}
      {type === "new-students" && <NewStudents />}
      {type === "paa" && <PAA />}
      {type === "requesting-money" && <RequestingMoney />}
      {type === "rha" && <RHA />}
      {type === "strive" && <Strive />}
      {type === "student-leadership" && <StudentLeadership />}
      {type === "today" && <Today />}
      {type === "traditions" && <Traditions />}
      {type === "william-marsh" && <WilliamMarsh />}
    </>
  );
}
