import { useEffect, useState } from "react";

const Clock = ({ utc = 0 }) => {
  const [date, setDate] = useState(new Date());
  const [isTicking, setIsTicking] = useState(false);

  const tick = () => {
    const date = new Date();
    date.setUTCHours(date.getUTCHours() + utc);
    setDate(date);
  };

  useEffect(() => {
    if (!isTicking) {
      const timerID = setInterval(() => tick(), 1);
      return () => clearInterval(timerID);
    }
  }, [isTicking, utc]);

  return (
    <div className="digital-clock">
      <p>{date.toLocaleTimeString()}</p>
      <p>{date.getMilliseconds()}</p>
    </div>
  );
};

export default Clock;
