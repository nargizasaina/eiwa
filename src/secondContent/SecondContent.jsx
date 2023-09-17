import React from "react";
import styled from "styled-components";
import Play from "../assets/icons/play.svg";
import image from "../assets/img/Image.svg";

export const SecondContent = () => {
  return (
    <Container>
      <ImageContainer>
        <img src={image} alt="" />
        <img src={Play} alt="" />
      </ImageContainer>
      <ContentContainer>
        <h1>Наша Миссия: Забота о Вашем Материнстве</h1>
        <p>
          Мы - команда преданных профессионалов, врачей, специалистов по
          здравоохранению и образованию, работающих в сфере улучшения здоровья
          матерей и новорожденных. Наша миссия - обеспечить каждую семью
          надежной информацией и ресурсами, необходимыми для счастливой и
          здоровой беременности и первых шагов вашего малыша.
        </p>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 45rem;
  background-color: #fff1ed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const ImageContainer = styled.div`
  width: 50%;
  text-align: center;
  :last-child {
    position: absolute;
    left: 23.5rem;
    top: 102rem;
  }
`;

const ContentContainer = styled.div`
  width: 34.125rem;
  margin-right: 10rem;
  h1 {
    color: var(--neutral-100, #101010);
    font-size: 3rem;
    font-weight: 700;
    line-height: 120%;
  }
  p {
    color: var(--neutral-60, #757b8a);
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
  }
`;
