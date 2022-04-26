const AnalogClock = ({ utc, size = 10 }) => {
  const clockStyle = {
    width: `${size} rem`,
    height: `${size} rem`,
  };

  console.log(clockStyle);

  return (
    <div className="analog-clock" style={clockStyle}>
      Clock :D {utc}
      <div>Minutes</div>
    </div>
  );
};

export default AnalogClock;
