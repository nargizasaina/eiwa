import React from "react";
import img1 from "../../assets/Image.png";
import img2 from "../../assets/Image (1).png";
import img3 from "../../assets/Image (2).png";
import img4 from "../../assets/Image (3).png";
import "../experts/style.scss";
const Experts = () => {
  return (
    <div id="experts">
      <div className="container">
        <div className="experts">
          <div className="experts--text">
            <h1>Эксперты в Заботе о Здоровье</h1>
            <h6>
              Мы стремимся к достижению лучших результатов в здравоохранении и
              образовании для будущих поколений, и гордимся работой, которую
              выполняем.
            </h6>
          </div>
          <div className="experts--contents">
            <div className="experts--contents__block1">
              <img src={img1} alt="img" />
              <h2>Гулназа Халманбетова</h2>
              <p>Founder, CTO</p>
            </div>
            <div className="experts--contents__block2">
              <img src={img2} alt="img" />
              <h2>Нуржигит Акылбеков</h2>
              <p>Founder, CTO</p>
            </div>
            <div className="experts--contents__block2">
              <img src={img3} alt="img" />
              <h2> Бегайым Мусабаева</h2>
              <p>Account Executive</p>
            </div>
            <div className="experts--contents__block2">
              <img src={img4} alt="img" />
              <h2> Ейва Ап</h2>
              <p>Admin Bro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
