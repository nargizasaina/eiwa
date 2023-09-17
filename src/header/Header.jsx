import styled from "styled-components";
import woman from "../assets/img/wooman.svg";
import Arrow from "../assets/icons/Arrow.svg";
import Applle from "../assets/icons/Icon-Mac.svg.png";
import Google from "../assets/icons/Google.svg";
import Logo from "../assets/icons/logo.svg";

export const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <InformationContainer>
          <img src={Logo} alt="" />
          <LinkTagContainer>
            <a href="#">О нас</a>
            <a href="#">Новости</a>
            <a href="#">Контакты</a>
          </LinkTagContainer>
        </InformationContainer>
      </HeaderContainer>
      <SecondContainer>
        <ImageArrowContainer>
          <img src={Arrow} alt="go" />
        </ImageArrowContainer>
        <ContentContainer>
          <h4>EMPATHY | INNOVATION | WOMEN | AI</h4>
          <h1>Мы рады приветствовать вас на нашем проекте!</h1>
          <p>
            EIWA - это платформа для беременных и планирующих беременность
            женщин. Наше решение предлагает разносторонние возможности для
            оказания поддержки женщинам в этот самый уязвимый период
          </p>
          <SecondContainerButton>
            <LinkButtonContainer>
              <div>
                <img src={Applle} alt="AppStore" />
              </div>
              <div className="text-button">
                <p>DOWNLOAD ON THE</p>
                <h2>App Store</h2>
              </div>
            </LinkButtonContainer>
            <LinkButtonContainer>
              <div>
                <img src={Google} alt="GooglePlay " />
              </div>
              <div className="text-button">
                <p>GET IT ON</p>
                <h2>Google Play</h2>
              </div>
            </LinkButtonContainer>
          </SecondContainerButton>
        </ContentContainer>
        <WomanImage>
          <img src={woman} alt="few" />
        </WomanImage>
      </SecondContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 49.875rem;
  background-color: #fff1ed;
`;
const HeaderContainer = styled.div`
  width: 100%;
  height: 114px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 35rem;
  width: 100%;
  img {
    margin-right: 5rem;
  }
`;
const LinkTagContainer = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1rem;
  font-weight: 400;
  a {
    text-decoration: none;
    color: #757b8a;
  }
  :first-child {
    color: #a76b51;
  }
  :active {
    color: #a76b51;
  }
`;
const LinkButtonContainer = styled.div`
  background-color: #9b6a63;
  width: 193px;
  height: 61px;
  border-radius: 73px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  .text-button {
    height: 55px;
  }
  img {
    width: 32px;
  }
  p {
    font-size: 10px;
    color: #e2dfdf;
    margin-bottom: -12px;
    margin-top: 0.3rem;
  }
  h2 {
    color: #fff;
    font-size: 20px;
    margin-top: 0.5rem;
  }
`;

const SecondContainer = styled.div`
  padding-left: 3.5rem;
  display: flex;

  h1 {
    height: 12rem;
    color: #2e2f3a;
    font-size: 3.875rem;
    font-weight: 700;
  }
`;

const SecondContainerButton = styled.div`
  display: flex;
  gap: 1.5rem;
  :hover {
    background-color: #9b6952;
  }
  :active {
    background-color: #9b6a63;
  }
  cursor: pointer;
`;

const ImageArrowContainer = styled.div`
  height: 28rem;
  padding-top: 25rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 50%;
  h1 {
    margin-top: -3rem;
  }
  h4 {
    color: #9b6a63;
    font-family: Inter;
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    margin-top: 5rem;
  }
  p {
    line-height: 1.5rem;
  }
`;

const WomanImage = styled.div`
  position: absolute;
  right: 0.5%;
  top: 11.5%;
`;
