import React, { useState } from "react"
import styled from "styled-components"
import "../global.module.css"
import LinkedinIcon from "../images/socialIcons/linkedin.svg"
import GithubIcon from "../images/socialIcons/GithubIcon.svg"
import Logo from "../images/HeaderImages/Logo.svg"

/// STYLES -----------

// HEADER STYLES -----------

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 1em 4em;

  .logo {
    cursor: pointer;
    background: transparent;
    outline: none;
    border: none;
  }

  z-index: 10000;
  @media only screen and (max-width: 900px) {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    background: var(--White);
    position: fixed;
    top: 0;
  }
`

// HEADER STYLES END ---------------

// DESKTOP NAV STYLES --------------------------
const DesktopNav = styled.nav`
  width: 60%;
  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    width: 70%;
  }

  a {
    font-size: 1.8rem;
    text-decoration: none;
    letter-spacing: 1px;
    position: relative;
    padding: 0.2em;
    color: var(--DarkTextColorNav);
  }

  a:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%) scaleX(0);
    transform-origin: 50% 50%;
    width: 100%;
    height: 2px;
    background-color: #7d62f2;
    transition: all 0.25s ease-in;
  }
  a:hover:after {
    transform: translateX(-50%) scaleX(1);
  }
  a:hover {
    color: #7d62f2;
  }
  @media (max-width: 1200px) {
    ul {
      width: 80%;
    }
  }
  @media only screen and (max-width: 900px) {
    display: none;
  }
`
// DESKTOP NAV ENDS ------------------------------------

// CONTACT BUTTON STYLES ---------------------------------
const StyledContactButton = styled.button`
  font-size: 1.8rem;
  color: var(--White);
  background-image: var(--MainPurple);
  border: none;
  padding: 0.7em 1.6em;
  letter-spacing: 1px;
  border-radius: 0.8em;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-image: var(--MainPurpleHover);
  }

  @media only screen and (max-width: 900px) {
    display: none;
  }
`

// CONTACT BTN ENDS ----------------------------

// MOVILE NAV AND BURGER -----------------------------------------------------------
const MobileNav = styled.div`
  display: block;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;

  nav {
    position: absolute;
    right: -100vw;
    top: 0;
    height: 100vh;
    width: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--DarkTextColor);
    transition: 0.3s ease-in-out;

    img {
      margin: 1em 2em;
    }

    ul {
      height: 75%;
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      list-style: none;
      li {
        height: 100%;
      }
      a {
        text-decoration: none;
        color: var(--White);
        font-size: 2.5rem;
        display: block;
        letter-spacing: 2px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .mobileNavActive {
    height: 100vh;
    width: 100vw;
    right: 0;
  }

  @media only screen and (min-width: 900px) {
    display: none;
  }
`

const StyledBurger = styled.button`
  display: none;
  z-index: 60;
  background: transparent;
  border: none;
  padding: 2em 0.5em;
  cursor: pointer;
  outline-color: var(--MainPurple);
  z-index: 100;
  position: fixed;
  top: 0;
  right: 2em;

  div {
    height: 4px;
    background-image: var(--MainPurple);
    margin: 0.4em;
    border-radius: 0.2em;
    outline-color: var(--MainPurple);
    z-index: 13;
    transition: all 0.3s ease-in-out;
  }
  .topLine {
    width: 44px;
  }
  .middleLine {
    width: 34px;
  }
  .bottomLine {
    width: 22px;
  }
  .topLineActive {
    transform: rotate(-45deg) translateY(0.7em) rotate(180deg);
    width: 45px;
    background-color: white;
    background-image: none;
  }
  .middleLineActive {
    transform: rotate(45deg) translateY(-0.8em) rotate(180deg);
    width: 45px;
    background-color: white;
    background-image: none;
  }

  .bottomLineActive {
    transform: translateY(-21px) translateX(-12px) rotate(180deg);
    width: 6px;
    height: 4px;
    border-radius: 0%;
    background-color: white;
    background-image: none;
  }

  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`
// MOBILE NAV AND BURGER END -----------------------------------------------------
const Navbar = () => {
  const [burger, setBurger] = useState(true)
  console.log(burger)
  const closeMenu = () => {
    setBurger(!burger)
  }
  return (
    <StyledHeader id="Home">
      <button
        onClick={() => {
          window.scrollTo(0, 0)
        }}
        className="logo"
      >
        <img src={Logo} alt="website logo" />
      </button>

      <DesktopNav>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#O-mnie">O Mnie</a>
          </li>
          <li>
            <a href="#Projekty">Portfolio</a>
          </li>
        </ul>
      </DesktopNav>
      <MobileNav>
        <nav className={burger ? "" : "mobileNavActive"}>
          <ul>
            <li>
              <a
                onClick={() => {
                  window.scrollTo(0, 0)
                  setBurger(!burger)
                }}
                href="#Home"
              >
                Home
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#O-mnie">
                O Mnie
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#Projekty">
                Portfolio
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#Kontakt">
                Kontakt
              </a>
            </li>
          </ul>
          <div className="navIcons">
            <a
              href="https://www.linkedin.com/in/mateusz-skrobis-020272182/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinIcon} alt="linkedin" />
            </a>
            <a
              href="https://github.com/mateocode8933"
              rel="noreferrer"
              target="_blank"
            >
              <img src={GithubIcon} alt="github" />
            </a>
          </div>
        </nav>
      </MobileNav>
      <a href="#Kontakt">
        <div className="contactIcon">
          <StyledContactButton>Kontakt</StyledContactButton>
        </div>
      </a>
      <StyledBurger onClick={() => setBurger(!burger)}>
        <div className={burger ? "topLine" : "topLineActive"}></div>
        <div className={burger ? "middleLine" : "middleLineActive"}></div>
        <div className={burger ? "bottomLine" : "bottomLineActive"}></div>
      </StyledBurger>
    </StyledHeader>
  )
}

export default Navbar
