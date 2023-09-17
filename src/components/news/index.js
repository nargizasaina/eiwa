import React from "react";
import img1 from "../../assets/Image (4).png";
import img2 from "../../assets/Image (5).png";
import img3 from "../../assets/Image (6).png";
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
              <h5>Lorem Ipsum</h5>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatu
              </p>
            </div>
            <div className="news--contents__block2">
              <img src={img2} alt="img" />
              <h5>Lorem Ipsum</h5>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatu
              </p>
            </div>
            <div className="news--contents__block3">
              <img src={img3} alt="img" />
              <h5>Lorem Ipsum</h5>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
