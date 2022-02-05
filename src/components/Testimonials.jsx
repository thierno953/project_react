import React from "react";
import styled from "styled-components";
import avatar1 from "../assets/undraw_Advanced_customization_re_wo6h.png";
import avatar2 from "../assets/undraw_Apps_re_ienc.png";
import avatar3 from "../assets/undraw_Interview_re_e5jn.png";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="container">
        <div className="title">
          <h1>
            <span>My</span> objective
          </h1>
        </div>
        <div className="testimonials">
          <div className="testimonial">
            <div className="image">
              <img src={avatar1} alt="" />
            </div>
            <p>
            Producing quality work is a priority for me. Thorough, precise and structured, strives to avoid errors in my work.
            </p>
          </div>
          <div className="testimonial">
            <div className="image">
              <img src={avatar2} alt="" />
            </div>
            <p>
            I listen to ideas, suggestions and comments. So it's easy to work with me.
            </p>
          </div>
          <div className="testimonial">
            <div className="image">
              <img src={avatar3} alt="" />
            </div>
            <p>
              I am reactive, very energetic and I have a sense of urgency. I radiate enthusiasm and see the bright side of things. 
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5vw;
  padding: 0.2rem;
  position: relative;
  .container {
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: white;
    border-radius: 1rem;
    ${TitleStyles};
    .title {
      padding: 0 2rem;
      background-color: white;
    }
    .testimonials {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 6vw;
      margin-top: 3vw;
      .testimonial {
        padding: 0 4vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        p {
          font-size: 1.1rem;
          line-height: 2rem;
          letter-spacing: 0.1rem;
          span {
            color: #fc4958;
          }
        }
        ${imageZoomEffect};
        .image {
          overflow: hidden;
          width: max-content;
          max-height: 10rem;
          border-radius: 10rem;
          img {
            height: 10rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      .title {
        position: initial;
        background-color: transparent;
      }
      .testimonials {
        flex-direction: column;
      }
    }
  }
`;
