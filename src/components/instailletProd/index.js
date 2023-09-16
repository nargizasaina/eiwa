import React from "react";
import "../instailletProd/style.scss";
import logoApple from "../../assets/apple-logo.png";
import GooglePlay from "../../assets/google-play.webp";
import iphone from "../../assets/iPhone 12 Pro.png";
import vector from "../../assets/Vector.png";
const InstailletProd = () => {
  return (
    <div id="instailletProd">
      <div className="container">
        <div className="instailletProd">
          <div className="instailletProd--block">
            <div className="instailletProd--block__content">
              <h1>Загрузите наше мобильное приложение</h1>
              <p>
                {" "}
                Скачайте приложение прямо сейчас и откройте множество
                возможностей для заботы о своем здоровье и здоровье вашего
                малыша
              </p>
              <div className="instailletProd--block__content--btns">
                <div className="instailletProd--block__content--btns__btnApple">
                  <img
                    style={{
                      width: "30px",
                      marginLeft: "20px",
                    }}
                    src={logoApple}
                    alt="img"
                  />
                  <div className="instailletProd--block__content--btns__btnApple--text">
                    <h6>DOWNLOAD ON THE</h6>
                    <h2>App Store</h2>
                  </div>
                </div>
                <div className="instailletProd--block__content--btns__btnGooglePlay">
                  <img
                    style={{
                      width: "30px",
                      marginLeft: "20px",
                    }}
                    src={GooglePlay}
                    alt="img"
                  />
                  <div className="instailletProd--block__content--btns__btnGooglePlay--text">
                    <h6>GET IT ON</h6>
                    <h2>Google Play</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="instailletProd--block__img">
              <img
                className="instailletProd--block__img--imgIphone"
                src={iphone}
                alt="img"
              />
              <img
                className="instailletProd--block__img--imgVector"
                src={vector}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstailletProd;
