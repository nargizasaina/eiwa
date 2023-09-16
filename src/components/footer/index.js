import React from "react";
import "../footer/style.scss";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--block">
            <div className="footer--block__icons">
              <p className="footer--block__icons--facebook">
                <BsFacebook />
              </p>
              <p className="footer--block__icons--twitter">
                <BsTwitter />
              </p>
              <p className="footer--block__icons--instagram" >
                <BsInstagram />
              </p>
              <p className="footer--block__icons--linkedin">
                <BsLinkedin />
              </p>
            </div>
            <div className="footer--block__text">
              <h2>Политика Конфиденциальности</h2>
              <h2>Условия использования</h2>
              <h2>Поддерживать</h2>
            </div>
            <div className="footer--block__nurichIo">
              <h3>© nurich.io</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
