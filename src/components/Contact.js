import React from "react"
import styled from "styled-components"
import contactImage from "../images/Contact/Mail.gif"

const ContactPageWrapper = styled.div`
  width: 100%;
  margin-bottom: 4em;
`

const StyledPageTitle = styled.div`
  h5 {
    text-align: center;
    margin-top: 3em;

    font-size: 4rem;
    color: var(--DarkTextColor);
  }

  span {
    background: var(--DarkTextColor);
    height: 0.5em;
    width: 10em;
    display: block;
    margin: 1em auto;
    border-radius: 1em;
  }

  .bottom {
    width: 8em;
    margin-bottom: 5em;
    background: var(--MainOrange);
    position: relative;
  }

  .bottom::after {
    content: "";
    width: 2em;
    height: 2em;
    background-image: var(--MainOrange);
    /* box-shadow: rgba(240, 46, 170, 0.4) 5px 5px,
        rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px,
        rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px; */
    position: absolute;
    z-index: -10;
    bottom: -3.5em;
    left: calc(50% - 1em);
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
`
const StyledContact = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  img {
    margin-right: 5em;
  }
  @media (max-width: 1600px) {
    img {
      width: 65em;
    }
  }
  @media (max-width: 1500px) {
    img {
      width: 60em;
    }
  }
  @media (max-width: 1400px) {
    img {
      width: 55em;
    }
  }
  @media (max-width: 1300px) {
    img {
      width: 50em;
    }
  }
  @media (max-width: 1100px) {
    img {
      width: 45em;
    }
  }
  @media (max-width: 900px) {
    img {
      display: none;
    }
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-right: 3em;

  input,
  textarea,
  button,
  label {
    width: 100%;
    font-size: 2rem;
    margin-bottom: 0.4em;
    padding: 0.2em;
  }

  input,
  textarea {
    border: 1px solid #acacac;
    border-radius: 5px;
  }

  button {
    cursor: pointer;
    background-image: var(--MainPurpleHover);
    border: none;
    color: var(--White);
    letter-spacing: 1px;
    padding: 0.4em;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;

    &:hover {
      background-image: var(--MainPurple);
    }
  }

  @media (max-width: 1600px) {
    width: 50%;
  }
  @media (max-width: 1500px) {
    width: 55%;
  }
  @media (max-width: 1250px) {
    width: 65%;
  }
  @media (max-width: 900px) {
    width: 70%;
    margin: 0 auto;
  }
`

const Contact = () => {
  return (
    <ContactPageWrapper>
      <StyledPageTitle>
        <h5>Napisz Do Mnie</h5>
        <span className="bottom"></span>
      </StyledPageTitle>
      <StyledContact id="Kontakt">
        <div className="leftSideImage">
          <img src={contactImage} alt="mailguy" />
        </div>

        <StyledForm action="https://formspree.io/f/xgepdaae" method="POST">
          <label>
            E-mail:
            <input required type="email" name="_replyto" />
          </label>
          <label>
            Twoja Wiadomość:
            <textarea required cols="20" rows="10" name="message"></textarea>
          </label>

          <button type="submit">Wyślij</button>
        </StyledForm>
      </StyledContact>
    </ContactPageWrapper>
  )
}

export default Contact
