import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber } from "../../shared/store/slice/numberadd";
import { Link } from "react-router-dom";


function Contact() {
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
            <div> <Link to="/">Home</Link></div>
    </div>
  );
}

export default Contact;
