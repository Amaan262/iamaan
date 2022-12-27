import React from "react";
import "./hero.scss";
import Particles from "../particles/Particles";
import profile from "../../assets/image/profile.png";
import { Resume } from "../../assets/docs/docs";

const Hero = () => {


  return (
    <>
      <section id="hero" >
        <Particles />
        <div className="hero__wrap container">
          <div className="hero__wrap__info">
            <h1>Hi There,</h1>
            <h2>
              I'm <span className="name">Amaan</span>
            </h2>
            <h2 className="prof">
              I'm into <span className="typed">Web Development</span>
            </h2>
            <div className="btn-box ">
              <a
                href={Resume}
                download={"Amaan-resume"}
                // target="_blank"
                // rel="noopener noreferrer"
                className="resume-btn"
              >
                Download Resume
              </a>
              <div className="socials">
                <ul className="social-icons">
                  <li>
                    <a
                      className="linkedin"
                      aria-label="LinkedIn"
                      href="https://www.linkedin.com/in/ahmadamaan/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="github"
                      aria-label="GitHub"
                      href="https://github.com/amaan262"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      className="telegram"
                      aria-label="Telegram"
                      href="https://t.me/amaan262"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-telegram-plane"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram"
                      aria-label="Instagram"
                      href="https://www.instagram.com/a_maan_"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" target="_blank"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="hero__wrap__profile">
            <img draggable="false" src={profile} alt="profile" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
