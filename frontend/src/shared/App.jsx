import React from "react";
import { Switch } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./App.scss";
import "antd/dist/antd.css";

import routerRules from "./router";
import Navbarr from "../components/Navbar/Navbar";
import SideBar from "../components/SideBar/SideBar";

const App = () => {
  // const [formnumber] = useState(useSelector((state) => state.numberSlice)); // chạy 1 lần khi render
  // const formDatanumber = useSelector((state) => state.numberSlice); // lấy lại giá trị mỗi lần dispatch
  const { ready } = useTranslation();
  return (
    <>
      {!ready ? (
        <span />
      ) : (
        <div className="App">
          {/* <Navbarr /> */}
          <SideBar/>
          <div className="App-header">
            <Switch>{routerRules}</Switch>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
