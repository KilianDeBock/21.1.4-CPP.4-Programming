import React, { useEffect, useState } from "react";

import { convertTimeToString } from "../utils";

import "./DigitalClock.css";

const DigitalClock = ({ city, utc }) => {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    let timeIntervalId = setInterval(() => {
      const t = new Date().getTime();
      setTime(convertTimeToString(t, utc));
    }, 250);
    console.log("POING");

    return () => {
      clearInterval(timeIntervalId);
    };
  }, [utc]);

  return (
    <div className="digital-clock">
      <div className="digital-clock__city">{city}</div>
      <div className="digital-clock__time">{time}</div>
    </div>
  );
};

export default DigitalClock;