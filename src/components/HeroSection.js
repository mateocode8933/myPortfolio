import React from "react"
import styled from "styled-components"
import heroImage from "../images/HeaderImages/LandingHero.gif"
import LinkedinIcon from "../images/HeaderImages/linkedin.svg"
import GithubIcon from "../images/HeaderImages/GithubIcon.svg"
import { Link } from "gatsby"
const StyledHeroSection = styled.section`
  margin-top: 14.5em;
  margin-bottom: 8em;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  .heroImage {
    width: 65em;
    margin-left: 20em;
  }

  .nameAndProffesion {
    font-size: 6.5rem;
    text-align: center;

    color: var(--DarkTextColor);
    line-height: 1.2em;
  }

  .nameAndProffesion span {
    font-size: 6rem;
    display: block;
  }
  .iconsAndButton {
    display: flex;
    justify-content: center;
  }
  .icons {
    background-image: var(--MainPurple);
    padding: 0.5em 0.7em;
    display: flex;
    flex-direction: column;
    border-radius: 0.5em;
    overflow-x: hidden;
    margin-right: 2.5em;
  }
  .icons img {
    margin: 0.8em 0.4em;
    width: 3em;
    transform: rotate(360deg);
    transition: all 0.4s ease-out;
    cursor: pointer;
  }

  .icons a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icons img:hover {
    transform: rotate(0deg);
  }

  .btn button {
    background-image: var(--MainOrange);
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    border: none;
    padding: 1em;
    border-radius: 0.5em;
    cursor: pointer;
    transition: 0.2s;
  }

  .btn button:hover {
    background-image: var(--MainOrangeHover);
  }

  @media only screen and (max-width: 1600px) {
    .heroImage {
      width: 53em;
      margin-left: 10em;
    }
    .nameAndProffesion {
      font-size: 4.5rem;
      line-height: 1.4em;
    }
    .nameAndProffesion span {
      font-size: 4rem;
    }
  }

  @media only screen and (max-width: 1300px) {
    .heroImage {
      width: 48em;
      margin-left: 5em;
    }

    .nameAndProffesion {
      font-size: 4.3rem;
      line-height: 1.4em;
    }
  }

  @media only screen and (max-width: 1150px) {
    .heroImage {
      width: 43em;
    }
    .nameAndProffesion {
      font-size: 4em;
    }
  }

  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;

    .heroImage {
      width: 44em;
    }

    .icons {
      flex-direction: row;
      padding: 0em 0.4em;
      margin-right: 2.5em;
    }
    .icons img {
      width: 2.7em;
    }
    .iconsAndButton {
      margin-top: 1.3em;
    }
  }
  @media only screen and (max-height: 650px) {
    .heroImage {
      margin-top: 3em;
    }
  }
  @media only screen and (max-height: 500px) {
    .heroImage {
      margin-top: 0em;
    }
  }

  @media only screen and (max-height: 420px) {
    .heroImage {
      margin-top: 4em;
    }
  }
  @media only screen and (max-width: 600px) {
    .heroImage {
      width: 38em;
    }
    .nameAndProffesion {
      font-size: 3.5rem;
    }
    .nameAndProffesion span {
      font-size: 3rem;
    }
  }

  @media only screen and (max-width: 450px) {
    .heroImage {
      width: 33em;
    }
    .nameAndProffesion {
      font-size: 3rem;
    }
    .nameAndProffesion span {
      font-size: 2.8rem;
    }
  }
  @media only screen and (max-width: 370px) {
    .heroImage {
      width: 28em;
    }
    .nameAndProffesion {
      font-size: 2.5rem;
    }
    .nameAndProffesion span {
      font-size: 2.2rem;
    }
  }
`

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <div className="leftSection">
        <div className="nameAndProffesion">
          <h1>
            Mateusz Skrobiś
            <span>Frontend Developer</span>
          </h1>
        </div>
        <div className="iconsAndButton">
          <div className="icons">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mateusz-skrobis-020272182/"
              rel="noreferrer"
            >
              <img src={LinkedinIcon} alt="linkedin"></img>
            </a>
            <a
              target="_blank"
              href="https://github.com/mateocode8933"
              rel="noreferrer"
            >
              <img src={GithubIcon} alt="github"></img>
            </a>
          </div>
          <div className="btn">
            <Link to="#Projekty">
              <button>Zobacz Projekty</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="rightSection">
        <img className="heroImage" src={heroImage} alt="hero" />
      </div>
    </StyledHeroSection>
  )
}

export default HeroSection
