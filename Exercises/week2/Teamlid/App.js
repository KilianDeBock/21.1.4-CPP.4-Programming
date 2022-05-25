import TeamMembers from "./components/Team/TeamMembers";
import general from "./styling/general.module.scss";

function App() {
  return (
    <div className={general.container}>
      <TeamMembers />
    </div>
  );
}