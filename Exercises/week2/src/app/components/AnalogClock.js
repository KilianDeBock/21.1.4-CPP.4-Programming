const AnalogClock = ({ utc, size = 10 }) => {
  return (
    <div className="analog-clock" style={{ width: "10rem" }}>
      Clock :D {utc}
      <div className="analog-clock__hours">Hours</div>
      <div className="analog-clock__minutes">Minutes</div>
      <div className="analog-clock__seconds">Seconds</div>
    </div>
  );
};

export default AnalogClock;
