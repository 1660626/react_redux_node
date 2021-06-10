import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import  './style.scss'

function Translate() {
  const { t } = useTranslation();

  return (
    <div className="translate">
      <h1 className="text_trans">{t("hello")}</h1>
      <h1 className="text_trans">{t("thankyou")}</h1>
      <div>
        <Link to="/contact">Terms and Conditions</Link>
      </div>
    </div>
  );
}

export default Translate;
