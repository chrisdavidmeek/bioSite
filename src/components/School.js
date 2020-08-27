import React from "react";

const school = () => {
  const schools = [
    { name: "Megurita Shougakkou", location: "Higashi-Murayama, Japan" },
    { name: "Willard Elementary", location: "Winchester, Indiana" },
    { name: "CAJ", location: "Higashi-kurume, Japan" },
    { name: "Whiteland Community HS", location: "Whiteland, Indiana" },
    { name: "Indiana State University", location: "Terre Haute, Indiana" },
    { name: "Fort Sill Military Base", location: "Fort Sill, Oklahoma" },
    { name: "IUPUI", location: "Indianapolis, Indiana" },
  ];

  const schoolsMap = schools.map((item) => {
    return (
      <li>
        {item.name} located in {item.location}
      </li>
    );
  });

  return (
    <div className="School">
      <h3>
        I've been all over the place when it comes to schooling, places like:
      </h3>
      <ul>{schoolsMap}</ul>
    </div>
  );
};

export default school;
