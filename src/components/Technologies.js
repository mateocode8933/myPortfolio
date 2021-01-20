import React from "react"
import styled from "styled-components"
// Importing icons
import bootstrap from "../images/Technologies/bootstrap.svg"
import gatsby from "../images/Technologies/gatsby.svg"
import girlRight from "../images/Technologies/girlRight.svg"
import git from "../images/Technologies/git.svg"
import graphql from "../images/Technologies/graphql.svg"
import guyLeft from "../images/Technologies/guyLeft.svg"
import html5 from "../images/Technologies/html5.svg"
import javascript from "../images/Technologies/javascript.svg"
import jquery from "../images/Technologies/jquery.svg"
import react from "../images/Technologies/react.svg"
import sass from "../images/Technologies/sass.svg"
import webpack from "../images/Technologies/webpack.svg"
// ---------------------

const StyledTechTitle = styled.div`
  .title {
    font-size: 4.3rem;
    position: relative;
    width: 5.5em;
    margin: 1em auto 3em auto;
    color: var(--White);
    letter-spacing: 1px;

    span {
      color: var(--DarkTextColor);
    }

    &::before {
      content: "";
      width: 53%;
      height: 1.6em;
      background-image: var(--MainOrange);
      position: absolute;
      bottom: -0.3em;
      left: -3.3%;
      z-index: -10;

      border-top-left-radius: 15px;
    }

    &::after {
      content: "";
      width: 0.5em;
      height: 0.5em;
      background-image: var(--MainOrange);
      /* box-shadow: rgba(240, 46, 170, 0.4) 5px 5px,
        rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px,
        rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px; */
      position: absolute;
      z-index: -10;
      bottom: -1.3em;
      left: calc(50% - 0.4em);
      transform: rotate(45deg);
      animation: squareShadow 1s infinite ease-in-out alternate-reverse;
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
  }
  @media only screen and (max-width: 1050px) {
    .title {
      font-size: 3.8rem;
    }
  }
`

const StyledTechContent = styled.section`

  .pageContent {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .technologies {
    display: flex;
    .tech-column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .column-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        /* background-color: #f4f4f4; */
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        width: 17em;
        height: 12em;
        margin: 1em;
        transition: all 0.4s ease-in-out;

        &:hover {
          box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
            rgba(17, 17, 26, 0.1) 0px 8px 24px,
            rgba(17, 17, 26, 0.1) 0px 16px 48px;
        }
        p {
          font-size: 1.75rem;
          font-weight: bold;
          margin-top: 0.5em;
          color: #9f9f9f;
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .technologies {
      .tech-column {
        .column-item {
          width: 15em;
          height: 12em;
          margin: 0.8em;

          img {
            width: 8.5em;
            height: 5em;
          }
          p {
            font-size: 1.6rem;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1050px) {
    .technologies {
      .tech-column {
        .column-item {
          width: 13em;
          height: 12em;
          margin: 0.8em;

          img {
            width: 8.5em;
            height: 4.5em;
          }
          p {
            font-size: 1.6rem;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 930px) {
    .technologies {
      .tech-column {
        .column-item {
          width: 10.5em;
          height: 11em;
          margin: 0.8em;

          img {
            width: 8em;
            height: 4em;
          }
          p {
            font-size: 1.5rem;
          }
        }
      }
    }
    .rightPerson,
    .leftPerson {
      img {
        height: 15em;
      }
    }

    
  }

  @media only screen and (max-width: 780px) {
    .rightPerson,
    .leftPerson {
      display: none;
    }
  }

  @media only screen and (max-width: 750px) {
    .technologies {
      flex-wrap: wrap;
      justify-content: center;
    

        .column-item {
          width: 14em;
          height: 12em;
          flex-wrap: wrap;

          img {
            width: 10em;
            height: 5.2em;
          }
          p {
            font-size: 1.8rem;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 670px) {
    .technologies {
      flex-wrap: wrap;
      justify-content: center;
      .tech-column {
        flex-direction: row;

        &.th4 {
          display: flex;
          flex-direction: column;
        }
        &.th5 {
          width: 100vw;
        }

        .column-item {
          width: 12.5em;
          height: 12em;

          img {
            width: 9em;
            height: 4.5em;
          }
          p {
            font-size: 1.7rem;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 590px) {
    .technologies {
      flex-wrap: wrap;
      justify-content: center;
      .tech-column {
        flex-direction: row;

        .column-item {
          width: 13em;
          height: 12em;

          img {
            width: 9em;
            height: 4.5em;
          }
          p {
            font-size: 1.7rem;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 530px) {
    .technologies {
      flex-wrap: wrap;
      justify-content: center;
      .tech-column {
        flex-direction: row;

        .column-item {
          width: 13em;
          height: 12em;
          margin: 1em;

          img {
            width: 8em;
            height: 4em;
          }
          p {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 495px) {
    .technologies {
      flex-wrap: wrap;
      justify-content: center;
      .tech-column {
        flex-direction: row;

        .column-item {
          width: 12em;
          height: 11em;
          margin: 1em;

          img {
            width: 8em;
            height: 3.7em;
          }
          p {
            font-size: 1.2rem;
          }
        }
      }
    
  }

  @media only screen and (max-width: 420px) {
     .technologies {
       
       .tech-column{
         &.th4{
           flex-direction: row;
           order: -1
         }
         &.th3 {
           order: -3;
         }
          &.th2 {
            order: -2;
          }
          &.th5 {
            width: 13.5em ;
          }
       }
     }
  }
 
  




`

const Technologies = () => {
  return (
    <StyledTechContent>
      <StyledTechTitle>
        <h4 className="title">
          Techn<span>ologie</span>
        </h4>
      </StyledTechTitle>

      <div className="pageContent">
        <div className="leftPerson">
          <img src={guyLeft} alt="guy" />
        </div>
        <div className="technologies">
          <div className="tech-column th1">
            <div className="column-item">
              <img src={webpack} alt="webpack" />
              <p>webpack</p>
            </div>
          </div>
          <div className="tech-column th2">
            <div className="column-item">
              <img src={bootstrap} alt="bootstrap" />
              <p>bootstrap</p>
            </div>
            <div className="column-item">
              <img src={graphql} alt="graphql" />
              <p>graphql</p>
            </div>
          </div>
          <div className="tech-column th3">
            <div className="th3sc">
              <div className="column-item">
                <img src={html5} alt="html5" />
                <p>html</p>
              </div>
              <div className="column-item">
                <img src={sass} alt="sass" />
                <p>scss/sass</p>
              </div>
            </div>
            <div className="th3sc2">
              <div className="column-item">
                <img src={react} alt="react" />
                <p>react</p>
              </div>
              <div className="column-item">
                <img src={git} alt="git" />
                <p>git</p>
              </div>
            </div>
          </div>
          <div className="tech-column th4">
            <div className="column-item">
              <img src={javascript} alt="javascript" />
              <p>javascript</p>
            </div>

            <div className="column-item">
              <img src={gatsby} alt="gatsby" />
              <p>gatsby</p>
            </div>
          </div>
          <div className="tech-column th5">
            <div className="column-item">
              <img src={jquery} alt="jquery" />
              <p>jquery</p>
            </div>
          </div>
        </div>
        <div className="rightPerson">
          <img src={girlRight} alt="girl" />
        </div>
      </div>
    </StyledTechContent>
  )
}

export default Technologies
