import React from "react";
import "./style.scss";

import HeadPlant from "./HeadPlant";
import BannerPlant from "./BannerPlant";
import Products from "./Products";

function Home() {
  return (
    <div className="root__plant">
      <HeadPlant />
      <BannerPlant />
      <Products />
    </div>
  );
}

export default Home;
