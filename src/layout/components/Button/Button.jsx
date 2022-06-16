import React from "react";
import styles from "./Button.module.scss"
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles)
// import PropTypes from "prop-types";
const Button = ({href,to,children,primary=false,onClick, ...props}) => {
  const propsButton = {
    onClick,
    ...props
  }
  let Comp = 'button'
  if (to){
    propsButton.to = to
    Comp = Link
  }else if(href){
    propsButton.href = href
    Comp = 'a'
  }
  const classes = cx("wrapper",{primary})
  return <Comp className={classes} {...propsButton}>{children}</Comp>;
};

Button.propTypes = {};

export default Button;
