import React from "react";
import img1 from "../../assets/news1.jpg";
import img2 from "../../assets/news3.jpg";
import img3 from "../../assets/news2.jpg";
import "../news/style.scss";
const News = () => {
  return (
    <div id="news">
      <div className="container">
        <div className="news">
          <div className="news--text">
            <h1>Наши последние новости</h1>
          </div>
          <div className="news--contents">
            <div className="news--contents__block1">
              <img src={img1} alt="img" />
              <p>
                В апреле прошел мастштабный фестиваль для беременных девушек
                MAMA FEST
              </p>
            </div>
            <div className="news--contents__block2">
              <img src={img2} alt="img" />
              <p>
                Наша гинекологиня провела лекцию на открытом воздухе на тему:
                Как подготовиться к беременности и какие анализы сдавать
              </p>
            </div>
            <div className="news--contents__block3">
              <img src={img3} alt="img" />
              <p>
                Наши партнеры проводят розыгрыш призов в честь Нового года,
                участвовать могут все желающие
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
