import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import "antd/dist/antd.css";

import "./App.css";
import Children from "./components/Chilrend";
import Navbarr from "./components/Navbar/Navbar";

function App() {
  const [formnumber] = useState(useSelector((state) => state.numberSlice)); // chạy 1 lần khi render
  const formDatanumber = useSelector((state) => state.numberSlice); // lấy lại giá trị mỗi lần dispatch
  const { t } = useTranslation();

  return (
    <div className="App">
      <Navbarr />
      <header className="App-header">
        <span>
          {/* <h5 style={{ fontSize: 26 }}>{formDatanumber.default} </h5> */}
          <h1>{t("hello")}</h1>
          <h1>{t("thankyou")}</h1>

        </span>
        {/* <Children /> */}
      </header>
    </div>
  );
}

export default App;
