import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  { skill: "Web Design ", level: "beginner", color: "#FF5768" },
  { skill: "Java Script", level: "intermediate", color: "#00B0BA" },
  { skill: "React", level: "beginner", color: "#FFA23A" },
  { skill: "HTML+CSS", level: "intermediate", color: "#CFF800" },
  { skill: "HTML+GIT", level: "advanced", color: "#0065A2" },
];

function App() {
  return (
    <div className="card">
      <Avatar imgUrl="imgs/maksim.jpg" />
      <div className="data">
        <Intro />
        <SkillList className="skill=lists" />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.imgUrl} atl="Profile Image" />;
}

function Intro() {
  return (
    <div>
      <h1>Ozerskii Maksim</h1>
      <p>
        Hi-ho! I want to become web developer and currently Studying React JS
        library! Welcome to my page.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div class="skill-list">
      {skills.map((skillObj) => (
        <Skill
          skill={skillObj.skill}
          color={skillObj.color}
          level={skillObj.level}
          key={skillObj.skill}
        />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ background: color }}>
      <span>{`${skill} ${
        level === "advanced" ? "💪" : level === "intermediate" ? "👍" : "👶"
      }`}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
