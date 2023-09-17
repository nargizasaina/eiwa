import styled from "styled-components";
import woman from "../assets/img/wooman.svg";
import Arrow from "../assets/icons/Arrow.svg";
import Applle from "../assets/icons/Icon-Mac.svg.png";
import Google from "../assets/icons/Google.svg";

export const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <InformationContainer>
          <h1>EIWA</h1>
          <LinkTagContainer>
            <a href="e">О нас</a>
            <a href="e">Новости</a>
            <a href="e">Контакты</a>
          </LinkTagContainer>
        </InformationContainer>
        <ContainerButtonLink>
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
              <GoogleImage src={Google} alt="GooglePlay" />
            </div>
            <div className="text-button">
              <p>GET IT ON</p>
              <h2>Google Play</h2>
            </div>
          </LinkButtonContainer>
        </ContainerButtonLink>
      </HeaderContainer>
      <SecondContainer>
        <ImageArrowContainer>
          <img src={Arrow} alt="go" />
        </ImageArrowContainer>
        <ContentContainer>
          <h1>Добро пожаловать в мир заботы о матерях и новорожденных!</h1>
          <p>
            Мы рады приветствовать вас на нашем проекте, посвященном здоровью
            матерей и младенцев в Кыргызской Республике. Наша цель - снижение
            показателей материнской и неонатальной смертности и обеспечение
            доступа к информации и поддержке для будущих мам и их детей.
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
  gap: 23.0625rem;
`;
const ContainerButtonLink = styled.div`
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
const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  h1 {
    color: #a76b51;
    margin-right: 2rem;
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
  }
  h2 {
    color: #fff;
    font-size: 20px;
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
  padding-top: 24rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50%;
`;

const WomanImage = styled.div`
  position: absolute;
  right: 0.5%;
  top: 11.5%;
`;
const GoogleImage = styled.img`
  width: 20px;
  height: 32px;
`;
