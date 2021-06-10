import React from "react";
import "./style.scss";
import Pland from "./plant/plant1.png";
function Home() {
  return (
    <div className="root__plant">
      <section className="section__HEAD">
        <div className="container">
          <div className="banner">
            <div className="text">
              <div className="left_banner_text">
                <p className="text__title">Potted</p>
                <p className="text__title">Plants Store</p>
                <p className="text__content">
                  We have the best plants. Check out our plants in the shop
                  right now.
                </p>
              </div>
            </div>
            <div className="img__sold">
              <div className="sold"></div>
              <div className="sold__immage">
              </div>
            </div>
            <div className="text">
              <div className="right_banner_text">
                <p className="text__title">Peace Lily</p>
                <p className="text__author">Spathiphyllum</p>
                <p className="text__content">
                  This granceful bal brings a bright, calming presence to any
                  room she enters. Her vivid leaves, elegant white flowers, and
                  forgiving nature will quickly make her one of your favorite
                  houseplants.
                </p>
                <div className="shop__now">
                  Shop now
                  <span> &#10230;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section__BANNER">
        <div></div>
      </section>
    </div>
  );
}

export default Home;
