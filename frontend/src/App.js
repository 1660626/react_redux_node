import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Children from "./components/Chilrend";

function App() {
  const [formnumber] = useState(useSelector((state) => state.numberSlice)); // chạy 1 lần khi render
  const formDatanumber = useSelector((state) => state.numberSlice); // lấy lại giá trị mỗi lần dispatch

  console.log(formnumber);
  console.log(formDatanumber);

  useEffect(() => {
    if (formDatanumber.default !== formnumber.default) {
      console.log("khác nè");
    } else {
      console.log("giống nè");
    }
  }, [formDatanumber.default]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <h5 style={{ fontSize: 26 }}>{formDatanumber.default} </h5>
        </span>
        <Children />
      </header>
    </div>
  );
}

export default App;
