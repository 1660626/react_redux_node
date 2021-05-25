import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "antd";
import "./style.css";
import languge from "./language";

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="nav-wrapper">
      <div className="sl-nav">
        Language:{" "}
        <ul>
          <li className="liFisrt">
            {t("language")}
            <div className="triangle"></div>
            <ul>
              {languge.map((item, index) => (
                <li key={index} onClick={() => changeLanguage(item.key)}>
                  <img className="sl-flag" src={item.url} alt={item.name} />
                  <span className={i18n.language === item.key ? "active" : ""}>
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
