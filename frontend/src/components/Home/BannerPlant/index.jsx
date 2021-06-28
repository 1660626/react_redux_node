import React from "react";
import plant1 from "../img/41785_concreteblack_zoom_01.png";
import plant2 from "../img/67-678433_small-houseplant-png-transparent-png.png";
import plant3 from "../img/149_1499551.png";
const BannerPlant = () => {
  return (
    <section className="section__BANNER">
      <div className="container">
        <div className="block">
          <div className="spesies_plants">
            <div className="plants_text_banner">
              <div className="plants_text_banner_discount"> discount 20%</div>
              <div className="plants_text_banner_title">spesies of plants</div>
              <div className="plants_text_banner_content">
                Plants make us happier, healthier, more efficient and boots our
                creativity.
              </div>
            </div>
            <div className="plants_img_banner">
              <img src={plant1} alt="Plant" />
            </div>
          </div>
          <div className="plants">
            <div className="plants_wide">
              <div className="plants_text_banner">
                <div className="plants_text_banner_discount">sale 40%</div>
                <div className="plants_text_banner_title">wide plants</div>
                <div className="plants_text_banner_content">
                  We.re here to inspire confidence in the next generation of
                  plant parents.
                </div>
              </div>

              <div className="plants_img_banner">
                <img src={plant2} alt="Plant" />
              </div>
            </div>
            <div className="plants_natural">
              <div className="plants_text_banner">
                <div className="plants_text_banner_discount">up to 40% off</div>
                <div className="plants_text_banner_title">natural plants</div>
                <div className="plants_text_banner_content">
                  Plants make us happier, healthier, more efficient and boots
                  our creativity.
                </div>
              </div>
              <div className="plants_img_banner">
                <img src={plant3} alt="Plant" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerPlant;