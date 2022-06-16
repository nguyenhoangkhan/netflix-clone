import React from "react";
import classNames from "classnames/bind";
import styles from "./SectionBanner.module.scss";
import EmailInput from "../EmailInput"
const cx = classNames.bind(styles);
const SectionBanner = (props) => {
  return (
    <div
      className={cx("wrapper")}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className={cx("card")}>
      <div className={cx("title")}><h1>Unlimited movies, TV shows, and more.</h1></div>
      <p className={cx("sub-title")}>Watch anywhere. Cancel anytime.</p>
      <div className={cx("email")}>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <EmailInput/>
      </div>
      </div>
    </div>
  );
};

export default SectionBanner;
