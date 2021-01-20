import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import codeIcon from "../images/socialIcons/CodeIconTwo.svg"
import liveIcon from "../images/socialICons/liveDemoIcon.svg"

const getProjects = graphql`
  {
    file: allContentfulProject(sort: { fields: contentful_id }) {
      nodes {
        id
        title
        websiteLink
        githubLink
        projectImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        technologies {
          Technologies
          id
        }
        projectInfo {
          projectInfo
        }
      }
    }
  }
`

const StyledArticle = styled.article`
  width: 90%;
  margin: 0 auto;
  .pageTitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0em auto 2em auto;
    padding: 1em;
    background: white;
    font-size: 3rem;
    letter-spacing: 1px;
    color: var(--DarkTextColor);

    h2 {
      position: relative;
      z-index: 10;

      span {
        color: white;
        z-index: 100;
        position: relative;
      }
    }

    h2::before {
      border-top-left-radius: 20px;
      content: "";
      width: 2.73em;
      height: 1.8em;
      background-image: var(--MainOrange);
      position: absolute;
      left: -0.74em;
      top: -0.5em;
      z-index: 50;
    }

    h2::after {
      content: "";
      width: 0.5em;
      height: 0.5em;
      background-image: var(--MainOrange);
      position: absolute;
      right: -0.6em;
      bottom: 0;
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
  }
  .projects {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    color: var(--DarkTextColor);
  }
  .project {
    width: 42%;
    margin: 3em auto;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .titleAndLinks {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .Title {
    font-size: 3rem;
    margin: 0.3em;
    font-weight: bold;
  }
  .titleSeparation {
    height: 0.5em;
    background-image: var(--MainPurpleHover);
  }

  .desc {
    height: 15em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 100%;
  }
  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      margin: 0 0.3em;
      border-radius: 0.3em;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        padding: 0.4em;
        text-decoration: none;
        color: var(--White);
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          margin-left: 0.5em;
        }
      }
    }
  }
  .linkCode {
    background-image: var(--MainPurple);
  }
  .linkSite {
    background-image: var(--MainOrange);
  }

  .info {
    font-size: 2.3rem;
    letter-spacing: 1px;
    margin: 0.3em;
  }

  .technologies .title {
    color: grey;
    font-size: 1.4rem;
    margin: 0.5em;
  }

  .languages {
    font-size: 2rem;
    padding: 0.3em;
    background-image: var(--MainOrange);
    display: block;
    width: 100%;
    color: var(--White);
    text-align: center;
  }

  @media only screen and (max-width: 1650px) {
    .info {
      font-size: 2rem;
    }
    .languages {
      font-size: 1.9rem;
    }
  }
  @media only screen and (max-width: 1600px) {
    .pageTitle {
      font-size: 2.7rem;
    }
  }
  @media only screen and (max-width: 1500px) {
    .project {
      width: 45%;
    }
    .links div a {
      font-size: 2rem;
    }
    .languages {
      font-size: 1.8rem;
    }
  }

  @media only screen and (max-width: 1300px) {
    .Title {
      font-size: 2.5rem;
    }

    .info {
      font-size: 1.9rem;
    }
    .languages {
      font-size: 1.7rem;
    }
    .links div a {
      font-size: 1.6rem;
    }
  }
  @media only screen and (max-width: 1150px) {
    .Title {
      font-size: 2.3rem;
    }
    .info {
      font-size: 1.8rem;
    }
    .languages {
      font-size: 1.5 rem;
    }

    .links div a {
      font-size: 1.4rem;
      padding: 0.2em;
    }
  }

  @media only screen and (max-width: 1100px) {
    .languages {
      font-size: 1.3rem;
    }
  }

  @media only screen and (max-width: 1000px) {
    .projects {
      flex-direction: column;
    }
    .project {
      width: 80%;
    }
    .languages {
      font-size: 1.8rem;
    }
    .info {
      font-size: 2rem;
    }
    .links div a {
      font-size: 1.5rem;
      padding: 0.4em;
    }
    .Title {
      font-size: 2.5rem;
    }
    .pageTitle {
      font-size: 2.2rem;
      margin: 2em;
    }
  }
  @media only screen and (max-height: 800px) {
    .pageTitle {
      margin-top: 1em;
    }
  }

  @media only screen and (max-width: 750px) {
    .info {
      font-size: 1.8rem;
    }
    .Title {
      font-size: 2.3rem;
    }
    .links div a {
      padding: 0.3em;
      font-size: 1.4rem;
    }
  }
  // HEIGHT
  @media only screen and (max-height: 730px) {
    .pageTitle {
      margin-top: 1em;
    }
  }
  @media only screen and (max-height: 650px) {
    .pageTitle {
      margin-top: 4em;
    }
  }
  @media only screen and (max-height: 500px) {
    .pageTitle {
      margin-top: 8em;
    }
  }
  @media only screen and (max-height: 420px) {
    .pageTitle {
      margin-top: 12em;
    }
  }
  @media only screen and (max-height: 380px) {
    .pageTitle {
      margin-top: 13.5em;
    }
  }
  @media only screen and (max-height: 330px) {
    .pageTitle {
      margin-top: 19em;
    }
  }
  //---
  @media only screen and (max-width: 650px) {
    .info {
      font-size: 1.6rem;
    }
    .languages {
      font-size: 1.6rem;
    }
    .Title {
      font-size: 2.1rem;
    }
    .links div a {
      padding: 0.25em;
      font-size: 1.3rem;
    }
  }

  @media only screen and (max-width: 560px) {
    .project {
      width: 95%;
    }
  }

  @media only screen and (max-width: 430px) {
    .languages {
      font-size: 1.4rem;
    }
    .Title {
      font-size: 1.9rem;
    }
    .links div a {
      font-size: 1.2rem;
      padding: 0.2em;
    }

    .links img {
      width: 1.7em;
    }
  }

  @media only screen and (max-width: 380px) {
    .languages {
      font-size: 1.25rem;
    }
    .Title {
      font-size: 1.7rem;
    }
    .links div a {
      font-size: 1rem;
      padding: 0.1em;
    }

    .info {
      font-size: 1.45rem;
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(getProjects)
  const project = data.file.nodes
  console.log(project)
  return (
    <StyledArticle id="Projekty">
      <div className="pageTitle">
        <h2>
          <span>Proj</span>ekty
        </h2>
      </div>
      <section className="projects">
        {project.map(project => {
          const {
            id,
            title,
            websiteLink,
            technologies,
            projectInfo,
            projectImage,
            githubLink,
          } = project
          return (
            <div key={id} className="project">
              <div className="projectImgBox">
                <Image
                  className="projectImg"
                  fluid={projectImage.fluid}
                ></Image>
              </div>
              <div className="titleAndLinks">
                <div className="Title">{title}</div>
                <div className="links">
                  {githubLink === null ? (
                    ""
                  ) : (
                    <div className="linkCode">
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noreferrer"
                        alt="github"
                      >
                        Kod
                        <img src={codeIcon} alt="code" />{" "}
                      </a>
                    </div>
                  )}

                  <div className="linkSite">
                    <a
                      href={websiteLink}
                      target="_blank"
                      rel="noreferrer"
                      alt="liveweb"
                    >
                      Live Demo
                      <img src={liveIcon} alt="live" />
                    </a>
                  </div>
                </div>
              </div>
              <hr className="titleSeparation" />
              <div className="desc">
                <div className="info">{projectInfo.projectInfo}</div>
                <div className="technologies">
                  <span className="title">Technologie</span>
                  <div className="languages">{technologies.Technologies}</div>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </StyledArticle>
  )
}

export default Projects
