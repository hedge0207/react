import React from "react";
// classnames/bind 에서 import
import classNames from "classnames/bind";
import styles from "./CSSModule.module.scss";

// 미리 styles를 받아오고
const cx = classNames.bind(styles);

const CSSModule = () => {
  return (
    <div className={cx("wrapper", "inverted")}>
      안녕하세요, 저는 <span className="something">CSS Module 입니다!</span>
    </div>
  );
};

export default CSSModule;
