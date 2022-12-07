import React from "react";
import './skills.scss'
const skills = [
  {
    name: "ReactJS",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
  },
  {
    name: "ExpressJS",
    icon: "https://img.icons8.com/fluency/48/000000/node-js.png",
  },
  {
    name: "NodeJS",
    icon: "https://img.icons8.com/color/48/000000/nodejs.png",
  },
  {
    name: "Redux",
    icon: "https://img.icons8.com/color/48/000000/redux.png",
  },
  {
    name: "Firebase",
    icon: "https://img.icons8.com/color/48/000000/firebase.png",
  },

  {
    name: "MaterialUI",
    icon: "https://img.icons8.com/color/48/000000/material-ui.png",
  },

  {
    name: "TailwindCSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png",
  },
  {
    name: "Bootstrap",
    icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
  },
  {
    name: "Sass",
    icon: "https://img.icons8.com/color/48/000000/sass.png",
  },
  {
    name: "HTML5",
    icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
  },
  {
    name: "CSS3",
    icon: "https://img.icons8.com/color/48/000000/css3.png",
  },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
  },
  {
    name: "Python",
    icon: "https://img.icons8.com/color/48/000000/python--v1.png",
  },
  {
    name: "C++",
    icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
  },
  {
    name: "MongoDB",
    icon: "https://img.icons8.com/color/48/000000/mongodb.png",
  },
  {
    name: "Heroku",
    icon: "https://img.icons8.com/color/48/000000/heroku.png",
  },
  {
    name: "Netlify",
    icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
  },
  {
    name: "DigitalOcean",
    icon: "https://img.icons8.com/ios-filled/48/0080FF/digitalocean.png",
  },
  // {
  //   name: "jQuery",
  //   icon: "https://img.icons8.com/ios-filled/48/1169ae/jquery.png",
  // },
  {
    name: "Git VCS",
    icon: "https://img.icons8.com/color/48/000000/git.png",
  },
  {
    name: "GitHub",
    class: 'github',
    icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png",
  },
  {
    name: "WordPress",
    icon: "https://img.icons8.com/color/48/000000/wordpress.png",
  },
];
const Skills = () => {
  
  return (
    <>
      <section id="skills" >
        <h1> <i className="fas "></i> Skills</h1>
        <div className="skills__wrap container">
          {skills.map((item, i) => (
            <div className="skill_item" key={i}>
              <img src={item.icon} className={item.class} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
