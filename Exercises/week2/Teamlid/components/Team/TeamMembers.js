import React from "react";
import TeamMember from "./TeamMember";
import styles from "./Team.module.scss";
import teamMembers from "../../data/team.json";

const TeamMembers = () => {
  return (
    <ul className={styles.list}>
      {teamMembers.map((member) => (
        <li>
          <TeamMember key={member.id} data={member} />
        </li>
      ))}
    </ul>
  );
};

export default TeamMembers;