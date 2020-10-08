import React from "react";
import "./style.css";

function Card() {
  let person = {
    name: "ASABENEH YETAYEH",
    jobTitle: "Senior Developer",
    location: "Finland",
    joinedOn: "Aug 30, 2020",
  };

  let skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ];
  let skillsFormatted = skills.map((skill) => (
    <li key={skill} className="skill-card">
      {skill}
    </li>
  ));

  return (
    <div className="card">
      <div>
        <div className="img">
          <img src="images/asabeneh.jpg" alt="asabeneh" />
        </div>
        <h2>{person.name}</h2>
        <p>
          {person.jobTitle}, {person.location}
        </p>
      </div>
      <div>
        <h2>SKILLS</h2>
        <ul>{skillsFormatted}</ul>
      </div>
      <div>
        <small>Joined on {person.joinedOn}</small>
      </div>
    </div>
  );
}

export default Card;
