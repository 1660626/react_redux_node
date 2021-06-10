import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/icon/svg/001-layers.svg";
import Logout from "../../assets/img/icon/svg/logout.svg";

import { SidebarData } from "./SidebarData";

function SideBar() {
  const [toggle, settoggle] = useState(0);
  const handleToggle = () => {
    if (toggle === 0) {
      settoggle(1);
    }
    if (toggle === 1) {
      settoggle(2);
    }
    if (toggle === 2) {
      settoggle(0);
    }
  };

  return (
    <div
      className={
        toggle === 0
          ? "sidebar"
          : toggle === 1
          ? "sidebar active2"
          : "sidebar active"
      }
    >
      <div className="logo_content">
        <div className="logo">
          <div className="img_logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="logo_name">CodingLab</div>
        </div>
        <div
          className={
            toggle === 0
              ? "hamberger"
              : toggle === 1
              ? "hamberger active2"
              : "hamberger change"
          }
          onClick={() => handleToggle()}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      <ul className="nav_list">
        {SidebarData.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>
              <img className="bx" src={item.icon} alt={item.title} />
              <span className="links_name">{item.title}</span>
            </Link>
            <span className="tooltip">{item.title}</span>
          </li>
        ))}
        ;
      </ul>
      <div className="profile_content">
        <div className="profile">
          <img className="bx-log-out" src={Logout} alt="logout" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
