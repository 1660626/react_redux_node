import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber } from "../store/slice/numberadd";


function Children() {
  const dispatch = useDispatch();

  const formDatanumber = useSelector((state) => state.numberSlice);
  const click = (e) => {

    
    dispatch(addNumber(e));
  };
  return (
    <div>
      <h5 style={{ fontSize: 26 }}>{JSON.stringify(formDatanumber)} </h5>
      <input
            onChange={(e) => click(e.target.value)}
            type="text"
            placeholder="First Name"
          />
    </div>
  );
}

export default Children;
