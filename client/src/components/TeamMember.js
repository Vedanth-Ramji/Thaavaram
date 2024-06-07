import React from 'react';

const TeamMember = ({ name, role, imageUrl }) => {
  return (
    <div className="team-member">
      <h2>{name}</h2>
      <p>{role}</p>
      <img src={imageUrl} alt={name} />
    </div>
  );
}

export default TeamMember;