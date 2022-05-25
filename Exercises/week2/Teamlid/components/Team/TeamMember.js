import React from "react";
import colors from "../../styling/colors.module.scss";
import member from "./Team.module.scss";

const TeamMember = ({ data }) => {
  return (
    <article className={member.card}>
      <img src={data.avatar} alt={`${data.first_name} ${data.last_name}`} />

      <div className={member.info}>
        <span className={`${colors.blue} ${member.title}`}>
          {data.first_name} {data.last_name}
        </span>

        <span className={colors.purple}>{data.employment.title}</span>

        <address className={`${member.contact} ${colors.gray}`}>
          <span>{data.email}</span>
          <span>{data.phone_number}</span>
        </address>
      </div>
    </article>
  );
};

export default TeamMember;