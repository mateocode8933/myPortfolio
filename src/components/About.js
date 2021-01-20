import React from "react"
import styled from "styled-components"
import aboutHero from "../images/AboutImage/AboutHero.gif"

const StyledAbout = styled.aside`
  position: relative;
  width: 85%;
  margin: 0 auto;
  margin-top: 18em;
  display: flex;
  color: var(--DarkTextColor);

  .aboutInfo {
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 48%;
    margin: 0em auto;
  }

  .title {
    font-size: 4rem;
    position: relative;
    margin-bottom: 1.5em;
  }
  .title h3 {
    position: relative;
  }

  h3::before {
    content: "";
    width: 0.5em;
    height: 0.5em;
    background-image: var(--MainOrange);
    position: absolute;
    left: -0.7em;
    top: -18%;
  }

  h3 p span {
    position: relative;
  }

  h3 p span::after {
    content: "";
    width: 2.5em;
    height: 1.5em;
    background-image: var(--MainOrange);
    position: absolute;
    left: 0%;
    bottom: -25%;
    z-index: -10;
    border-bottom-right-radius: 20px;
    animation: squareShadow 1.3s infinite ease-in-out alternate-reverse;
  }
  @keyframes squareShadow {
    0% {
      box-shadow: none;
    }

    100% {
      box-shadow: rgba(240, 46, 170, 0.4) 5px 5px,
        rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px,
        rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
    }
  }

  h3 p span {
    color: var(--White);
  }

  .aboutMe {
    font-size: 2.6rem;
    line-height: 1.4em;
    letter-spacing: 1px;
  }

  .quote {
    font-size: 1.6rem;
    margin-top: 0.8em;
    color: #adadad;
  }

  .aboutImage {
    position: relative;

    .clock {
      position: absolute;
      background-color: #836beb;
      top: -4em;
      right: 3em;
      width: 10em;
      height: 10em;
      border: 3px solid #dad2fa;
      border-radius: 50%;
      box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;

      .dot {
        height: 4px;
        width: 4px;
        background-color: rgba(188, 219, 255, 0.61);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
      }

      .line {
        height: 3px;
        width: 4.3em;
        background-color: rgba(188, 219, 255, 0.61);
        position: absolute;
        left: 50%;
        top: 50%;
        border-radius: 50%;
        transform: translate(0%, -50%);
        transform-origin: left;
        animation-name: clockLine;
        animation-duration: 5s;
        animation-fill-mode: both;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
    }

    @keyframes clockLine {
      from {
        transform: translate(0%, -50%) rotate(0deg);
      }
      to {
        transform: translate(0%, -50%) rotate(360deg);
      }
    }
  }

  @media only screen and (max-width: 1610px) {
    width: 90%;
    .title {
      font-size: 3.5rem;
    }
    .aboutMe {
      font-size: 2.3rem;
    }

    .aboutImage img {
      width: 90%;
      margin-left: 3em;
    }
  }

  @media only screen and (max-width: 1500px) {
    .aboutImage img {
      width: 86%;
      margin-left: 2.7em;
    }
  }

  @media only screen and (max-width: 1150px) {
    .title {
      font-size: 3rem;
    }
    .aboutMe {
      font-size: 2rem;
      line-height: 1.3em;
    }

    .quote {
      font-size: 1.3rem;
    }

    .aboutImage img {
      width: 82%;
      margin-left: 1.5em;
    }
    .aboutImage .clock {
      width: 9em;
      height: 9em;

      .dot {
        height: 3px;
      }

      .line {
        width: 4em;
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    margin-top: 3em;

    .title {
      font-size: 3.5rem;
      margin: 3em auto 1.5em auto;
    }

    .aboutMe {
      font-size: 2.5rem;
      line-height: 1.5em;
    }

    .aboutInfo {
      display: flex;
      flex-direction: column;
      height: 50%;
      width: 90%;
      margin: 0em auto;
      text-align: center;
    }
    h3::after {
      width: 2em;
      left: 1.2em;
    }
    h3::before {
      left: 0;
    }

    .aboutImage {
      margin: 12em auto;
      width: 80%;
    }
  }

  @media only screen and (max-width: 800px) {
    .aboutMe {
      font-size: 2.3rem;
    }
    .title {
      font-size: 3.2rem;
    }

    .aboutImage .clock {
      width: 8em;
      height: 8em;

      .dot {
        height: 3px;
      }

      .line {
        width: 3.3em;
      }
    }
  }
  @media only screen and (max-width: 650px) {
    .aboutImage {
      width: 95%;
    }
  }

  @media only screen and (max-width: 600px) {
    .aboutMe {
      font-size: 2rem;
    }
    .title {
      font-size: 3rem;
    }
    .aboutImage .clock {
      width: 7em;
      height: 7em;
    }

    @media only screen and (max-width: 500px) {
      .aboutImage {
        width: 100%;

        margin-top: 9em;
      }
      .aboutMe {
        font-size: 1.7rem;
        line-height: 1.6em;
      }
      .title {
        font-size: 2.7rem;
      }

      .quote {
        font-size: 1rem;
      }
      .aboutImage .clock {
        width: 6.2em;
        height: 6.2em;

        .dot {
          height: 2px;
        }

        .line {
          width: 3em;
        }
      }
    }

    @media only screen and (max-width: 400px) {
      .aboutImage {
        margin-top: 8em;
      }
      .aboutImage .clock {
        width: 5.6em;
        height: 5.6em;
      }

      .dot {
        height: 3px;
      }

      .line {
        width: 2.4em;
      }
    }
  }

  @media only screen and (max-width: 350px) {
    .aboutImage .clock {
      width: 5.3em;
      height: 5.3em;
    }
  }
`

const About = () => {
  return (
    <StyledAbout id="O-mnie">
      <div className="aboutInfo">
        <div className="title">
          <h3>
            Kim
            <p>
              Jes<span>tem?</span>
            </p>
          </h3>
        </div>
        <div className="info">
          <p className="aboutMe">
            Jestem zdeterminowanym frontendowcem, wiem co chcę w życiu osiągnąć
            i jak to zrobić. Programowanie to moja pasja, dlatego codziennie
            uczę się nowych rzeczy i ciągle się rozwijam. Uwielbiam Front-end i
            w tym się specjalizuję, ale w przyszłości również chce się zajmować
            Backendem i zostać Full-stack developerem.
          </p>
          <p className="quote">
            “Hard work beats talent when talent doesn't work hard”
            <span> -Tim Notke</span>
          </p>
        </div>
      </div>
      <div className="aboutImage">
        <img src={aboutHero} alt="programming guy" />
        <div className="clock">
          <div className="dot"></div>
          <div className="line"></div>
        </div>
      </div>
    </StyledAbout>
  )
}

export default About
