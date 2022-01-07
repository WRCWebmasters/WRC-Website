import React, {useEffect} from "react";

import { useParams } from "react-router-dom";

import Calendar from "../operating/Calendar";
import CalendarDev from "../operating/CalendarDev";

export default function OperatingRouter() {
  const { type } = useParams();

  useEffect(() => {
    document.title = type.split("-").join(' ').toUpperCase();
  });

  return (
    <>
      <p><a href="/operating">operating</a> > {type}</p>
      {type === "calendar" && <Calendar />}
      {type === "calendardev" && <CalendarDev />}
    </>
  );
}
