import React from "react";
import { chatApp, textutils1, tictactoe, hoobank, movieapp, glassMor, todoJS, calc } from "../../assets/image/images";
import "./projects.scss";

const proArr = [

  {
    name: "MovieTown",
    imageUrl: movieapp,
    desc: "Movie and Tv series website built using TMDB Api, react, scss, react-router.",
    linkToView: "https://moviestown.netlify.app/",
    linkToCode: "https://github.com/Amaan262/movieTown"
  },
  {
    name: "Magical Chat App",
    imageUrl: chatApp,
    desc: "Chat App Built using Realtime Chat with the help of Socket.io",
    linkToView: "",
    linkToCode: "https://github.com/Amaan262/Magical-Chat-v2.0"
  },

  {
    name: "Textutils",
    imageUrl: textutils1,
    desc: "Simple text tranformation Web App to manipulate text - to remove extraspaces, to uppercase, to lowercase",
    linkToView: "https://amaan262.github.io/textutils/",
    linkToCode: "https://github.com/Amaan262/textutils"
  },
  {
    name: "Glass Morphism",
    imageUrl: glassMor,
    desc: "Demonstrating the use of Glass Morphism using simple example",
    linkToView: "https://amaan262.github.io/Glass-Morphism/",
    linkToCode: "https://github.com/Amaan262/Glass-Morphism"
  },
  {
    name: "Hoobank",
    imageUrl: hoobank,
    desc: "Modern website build using react, vite, tailwind css",
    linkToView: "https://amaan262.github.io/HooBank-website/",
    linkToCode: "https://github.com/Amaan262/HooBank-website"
  },
  {
    name: "TodoJS",
    imageUrl: todoJS,
    desc: "Notes keeping website, Notes are stored in local Storage",
    linkToView: "https://amaan262.github.io/TodoList/",
    linkToCode: "https://github.com/Amaan262/TodoList"
  },
  {
    name: "D Calculator",
    imageUrl: calc,
    desc: "Basic Calculator using Reactjs",
    linkToView: "https://amaan262.github.io/D-calculator/",
    linkToCode: "https://github.com/Amaan262/D-calculator"
  },
  {
    name: "TicTacToe",
    imageUrl: tictactoe,
    desc: "Basic tictactoe game web app",
    linkToView: "https://amaan244.github.io/Tic-tac-toe/",
    linkToCode: "https://github.com/Amaan244/Tic-tac-toe"
  },


];

const Projects = () => {
  return (
    <>
      <section id="projects">
        <h1> <i className="fas fa-laptop-code"></i> Projects</h1>
        <div className="project__container">
          {proArr.map((item, i) => (
            <div className="project__item" key={i}>
              <img src={item.imageUrl} alt="ss" />
              <div className="content">
                <div className="tag">
                  <h2>{item.name}</h2>
                </div>
                <div className="desc">
                  <p>{item.desc}</p>
                  <div className="btns">
                    <a href={item.linkToView} rel="noreferrer" target={"_blank"} className="btn">
                      <i className="fas fa-eye"></i>
                      View</a>
                    <a href={item.linkToCode} rel="noreferrer" target={"_blank"} className="btn">
                      <i className="fas fa-code"></i>
                      Code</a>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
