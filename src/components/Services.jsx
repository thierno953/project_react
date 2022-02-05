import React from "react";
import styled from "styled-components";
import Services1 from "../assets/undraw_Security_re_a2rk.png";
import Services2 from "../assets/undraw_Programming_re_kg9v.png";
import Services3 from "../assets/undraw_On_the_office_re_cxds.png";
import { TitleStyles } from "./ReusableStyles";
export default function Services() {
  return (
    <Section id="services">
      <div className="title">
        <h1 className="yellow">Web developer frontend & backend</h1>
        <p>
        I'm a junior web developer looking for work
        </p>
      </div>
      <div className="services">
        <div className="service">
          <img src={Services2} alt="" />
          <p>
          I develop complete web applications using HTML, CSS, JavaScript, React, Redux, Node, Express (MERN Stack)
          </p>
        </div>
        <div className="service yellow">
          <img src={Services1} alt="" />
          <p>
          I do ui / ux design for the website which helps the website to achieve a unique and performing look.


          </p>
        </div>
        <div className="service">
          <img src={Services3} alt="" />
          <p>
          But above all I like to evolve in a team
          </p>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 2rem 4rem;
  ${TitleStyles};
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 3vw;
      img {
        height: 2.8rem;
      }
      p {
        text-align: center;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 0.6rem 3rem;
        letter-spacing: 0.2rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        border: none;
        color: white;
        background-color: #fc4958;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
    .yellow {
      button {
        background-color: #f9c74f;
        &:hover {
          background-color: #fc4958;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin: 2rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
