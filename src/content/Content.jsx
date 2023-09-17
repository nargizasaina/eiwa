import React from "react";
import iconOne from "../assets/icons/iconOne.svg";
import iconTwo from "../assets/icons/iconTwo.svg";
import iconThree from "../assets/icons/iconthree.svg";
import styled from "styled-components";

export const Content = () => {
  return (
    <Container>
      <h1>Потрясающие возможности</h1>
      <ChildContainer>
        <ContentContainer>
          <img src={iconOne} alt="images" />
          <h3>Инновационное приложение</h3>
          <p>
            Помогает мамам отслеживать беременность, получать рекомендации и
            доступ к полезным материалам.
          </p>
        </ContentContainer>
        <ContentContainer>
          <img src={iconTwo} alt="images" />
          <h3>Инновационное приложение</h3>
          <p>
            Помогает мамам отслеживать беременность, получать рекомендации и
            доступ к полезным материалам.
          </p>
        </ContentContainer>
        <ContentContainer>
          <img src={iconThree} alt="images" />
          <h3>Инновационное приложение</h3>
          <p>
            Помогает мамам отслеживать беременность, получать рекомендации и
            доступ к полезным материалам.
          </p>
        </ContentContainer>
      </ChildContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 3rem 0 3rem 0;
    color: var(--neutral-100, #101010);
    text-align: center;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
  }
`;
const ChildContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 26rem;
  height: auto;
  h3 {
    color: var(--neutral-100, #101010);
    text-align: center;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
  }
  p {
    margin-top: 0;
    padding-top: 0;
    color: var(--neutral-60, #757b8a);
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
  }
`;
