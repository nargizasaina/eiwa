import styled from "styled-components";
import styles from "./Phone.module.scss";
import Applle from "../../assets/icons/Icon-Mac.svg.png";
import Google from "../../assets/icons/Google.svg";

const Phone = () => {
  return (
    <div className={styles.phoneBlock}>
      <div className={styles.phoneBlock__textPart}>
        <h3 className={styles.phoneBlock__textPart__title}>
          Погрузитесь в Мир Заботы о Здоровье
        </h3>
        <p className={styles.phoneBlock__textPart__text}>
          Получите доступ к уникальному приложению которое поможет вам
          отслеживать каждый этап вашей беременности и заботиться о здоровье
          вашего малыша.
        </p>
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
      </div>
    </div>
  );
};

export default Phone;
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
const GoogleImage = styled.img`
  width: 20px;
  height: 32px;
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
