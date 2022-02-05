import React from "react";
import styled from "styled-components";
import product1 from "../assets/undraw_Apps_re_ienc.png";
import product2 from "../assets/undraw_Programming_re_kg9v.png";
import product3 from "../assets/undraw_On_the_office_re_cxds.png";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
export default function Products() {
  const data = [
    {
      image: product1,
      name: " PERSONAL STYLE",
      "desc": " I channel my energy into finding my bearings and establishing reliable benchmarks."
    },
    {
      image: product2,
      name: "I COULD BE MORE EFFECTIVE",
      "desc": "I would benefit from tackling small tasks from the start, rather than always sticking to the original plan."
    },
    {
      image: product3,
      name: "MY WAY OF MANAGING MY ENERGY",
      desc: "I might be more efficient if I focused on the essentials, rather than trying to capture everything."
    },

  ];
  return (
    <Section id="products">
      <div className="title">
        <h1>
          <span>Available </span> All the time!
        </h1>
      </div>
      <div className="products">
        {data.map((product, index) => {
          return (
            <div className="product" key={index}>
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <p>{product.desc}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      h3 {
        color: #fc4958;
      }
      p {
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      ${imageZoomEffect};
      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
      }
      button {
        border: none;
        padding: 1rem 4rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 4rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        background: linear-gradient(to right, #fc4958, #e85d04);
        text-transform: uppercase;
        &:hover {
          background: linear-gradient(to right, #e85d04, #fc4958);
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
