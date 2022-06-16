import React from 'react'
import styles from "./EmailInput.module.scss"
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)
const EmailInput = () => {
  return (
    <div className={cx("wrapper")}>
        <span>Email address</span>
        <input/><button>Get Started <FontAwesomeIcon icon={faAngleRight}/></button>
    </div>
  )
}

export default EmailInput