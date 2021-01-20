import React from "react"
import styled from "styled-components"
import gitIcon from "../images/socialIcons/GithubIcon.svg"
import linkIcon from "../images/socialIcons/linkedin.svg"
import arrowUp from "../images/socialIcons/arrowUp.svg"

const StyledFooter = styled.footer`
  background-image: var(--MainPurple);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  color: var(--White);
  letter-spacing: 1px;
  padding: 0.3em 2.5em;

  img {
    width: 2.5em;
    margin: 0.3em 0.8em;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
  .footerInfo {
    font-size: 1.7rem;
    text-align: center;
  }
  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .footerArrow img {
    width: 3.5em;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 500px) {
    .footerInfo {
      font-size: 1.2rem;
    }
    .footerArrow img {
      width: 3em;
    }
    img {
      width: 2.2em;
      margin: 0.2em 0.5em;
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footerIcons">
        <a
          href="https://www.linkedin.com/in/mateusz-skrobis-020272182/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkIcon} alt="" />
        </a>
        <a
          href="https://github.com/mateocode8933"
          rel="noreferrer"
          target="_blank"
        >
          <img src={gitIcon} alt="" />
        </a>
      </div>
      <div className="footerInfo">
        Copyright © 2021 Mateusz Skrobiś. Wszystkie Prawa Zastrzeżone.
      </div>

      <button onClick={() => window.scrollTo(0, 0)} className="footerArrow">
        <img src={arrowUp} alt="goup" />
      </button>
    </StyledFooter>
  )
}

export default Footer
