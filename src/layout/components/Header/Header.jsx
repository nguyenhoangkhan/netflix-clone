import React from "react";
// import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "../../../assets/images/";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo")}>
        <img className="logoIcon" src={images.logo} alt="" />
      </div>
      <div className={cx("interactive")}>
        <div className={cx("languages")}>
          <select name="languages" id="" label="">
            <option value="en">English</option>
            <option value="vn">Tiếng Việt</option>
          </select>
          <span><FontAwesomeIcon icon={faGlobe}/></span>
        </div>
        <div className={cx("login")}>
          <Button primary to="/signin">Sign In</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;


