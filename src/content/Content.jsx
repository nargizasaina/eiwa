import React from "react";
import AIChat from "../assets/icons/AIChat.svg";
import iconTwo from "../assets/icons/iconTwo.svg";
import iconThree from "../assets/icons/iconthree.svg";
import Book from "../assets/icons/book.svg";

import styled from "styled-components";

export const Content = () => {
  return (
    <Container>
      <h1>Потрясающие возможности</h1>
      <ChildContainer>
        <ContentContainer>
          <img src={AIChat} alt="images" />
          <h3>AI Chat: Ваш компаньон для заботы</h3>
          <p>
            AI Chat - виртуальный помощник, готовый предоставить вам информацию
            в любое время суток.
          </p>
        </ContentContainer>
        <ContentContainer>
          <img src={iconTwo} alt="images" />
          <h3>Трекер беременности по неделям</h3>
          <p>
            Помогает мамам отслеживать беременность, получать рекомендации и
            доступ к полезным материалам.
          </p>
        </ContentContainer>
        <ContentContainer>
          <img src={iconThree} alt="images" />
          <h3>Сообщество для поддержки</h3>
          <p>
            Мы создаем активное сообщество для обмена опытом и поддержки между
            участниками.
          </p>
        </ContentContainer>
        <ContentContainer>
          <img src={Book} alt="images" />
          <h3>Адаптированные курсы на различные темы</h3>
          <p>
            Мы заботимся о вашем образовании и уверенности в период беременности
            и после рождения малыша
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
  justify-content: start;
  align-items: flex-start;
  width: 18.75rem;
  height: auto;
  /* gap: 1rem; */
  h3 {
    color: var(--neutral-100, #101010);
    text-align: start;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    height: 2.5rem;
    width: 18rem;
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
