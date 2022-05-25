import React, { useEffect, useState } from "react";

import { convertTimeToString } from "../utils";
import LEDStrip from "./LEDStrip";

import "./BinaryClock.css";

const BinaryClock = ({ utc = 2 }) => {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const tick = () => {
      const t = new Date().getTime();
      setTime(convertTimeToString(t, utc));
    };

    const timerId = setInterval(() => tick(), 500);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="binary-clock">
      <LEDStrip amount={2} v={time.split(":")[0][0]} />
      <LEDStrip amount={4} v={time.split(":")[0][1]} />
      <LEDStrip amount={3} v={time.split(":")[1][0]} />
      <LEDStrip amount={4} v={time.split(":")[1][1]} />
      <LEDStrip amount={3} v={time.split(":")[2][0]} />
      <LEDStrip amount={4} v={time.split(":")[2][1]} />
    </div>
  );
};

export default BinaryClock;