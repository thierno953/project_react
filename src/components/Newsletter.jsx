import React from "react";
import styled from "styled-components";
import { TitleStyles } from "./ReusableStyles";
export default function Newsletter() {
  return (
    <Section id="newsletter">
      <div className="title">
        <h1>
          <span>PROBLEMS I CAN </span> HANDLE
        </h1>
        <p>
          Brilliant from an intellectual point of view, I tend to easily adapt
          concepts that were initially foreign. I am able to understand new or
          complex subjects without having to see them in practice. This means I
          can develop his skills by researching and reading about a wide range
          of topics. I need to be intellectually stimulated by my work,
          otherwise I risk getting bored quickly. Cautious in my approach, I
          prefer to rely on proven strategies. I tend to observe and adapt
          knowledge that has proven itself and in which I have complete
          confidence. In this sense, it is easier to learn from the information
          provided.
        </p>
      </div>
  
    </Section>
  );
}

const Section = styled.section`
  border: 0.01rem solid black;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  ${TitleStyles};
 
    button {
      padding: 1rem 5rem;
      background-color: transparent;
      border: none;
      font-size: 1.3rem;
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        letter-spacing: 0.6rem;
        padding: 1rem 4.7rem;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      padding: 0.8rem;
      border-radius: 0.5rem;
      input {
        width: 75vw;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
      button {
        margin-top: 0.5rem;
        width: 100%;
        padding: 0.5rem;
        &:hover {
          padding: 0.5rem 1rem;
        }
      }
    }
  }
`;
