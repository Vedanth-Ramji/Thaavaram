import React from 'react';
import TeamMember from '../components/TeamMember';
import vedanthImage from '../assets/vedanth.png';
import shashikantImage from '../assets/shashikant.jpg';
import vishalImage from '../assets/vishal.jpg';
import noProfileImg from '../assets/NoProfilePic.png';
import nikitaDesai from '../assets/nikitaDesai.jpg';
import '../pages/teamPageStyle.css';

const TeamPage = () => {
  return (
    <div>
      <h1 className='teamPage_title'>Team</h1>      
      <div className="team-container">
        <TeamMember name="Vedanth Ramji" role="Founder" imageUrl={vedanthImage} />
        <TeamMember name="Shashikant" role="Intern" imageUrl={shashikantImage} />
        <TeamMember name="Vishal" role="Intern" imageUrl={vishalImage} />
        <TeamMember name="Mahaveer" role="Intern" imageUrl={noProfileImg}/>
        <TeamMember name="Nikhita Desai" role = "Intern" imageUrl={nikitaDesai}/>
      </div>
      <br/>
    </div>
    
  );
}

export default TeamPage;