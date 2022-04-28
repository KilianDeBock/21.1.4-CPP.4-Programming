import "./DimmedLamp.css";

const DimmedLamp = ({ lampColor }) => {
  return <div className="dimmed-lamp" style={{ backgroundColor: lampColor }} />;
};

export default DimmedLamp;
