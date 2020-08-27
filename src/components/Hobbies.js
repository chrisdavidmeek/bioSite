import React from "react";

const Hobbies = () => {
  const schools = [
    { location: "Higashi-Murayama, Japan" },
    { location: "Whiteland, Indiana" },
    { location: "Terre Haute, Indiana" },
    { location: "Fort Sill, Oklahoma" },
    { location: "Indianapolis, Indiana" },
  ];

  const schoolsMap = schools.map((item) => {
    return <li>{item.location}</li>;
  });

  return (
    <div className="Hobbies">
      <div className="hobbyInfo" id="past">
        <h2>Past</h2>
        <h4>Places I've lived</h4>
        <ul>{schoolsMap}</ul>
      </div>
      <div className="hobbyInfo" id="present">
        <h2>Present</h2>
        <h4>Things I do these days</h4>
        <ul>
          <li>Full time student</li>
          <li>Full time employee</li>
          <li>Full time dog dad</li>
          <li>Part time gamer</li>
        </ul>
      </div>
      <div className="hobbyInfo" id="future">
        <h2>Future</h2>
        <h4>#Goals</h4>
        <ul>
          <li>Working in WebDev </li>
          <li>Working in CyberSec</li>
          <li>Freelance work</li>
        </ul>
      </div>
    </div>
  );
};

export default Hobbies;
