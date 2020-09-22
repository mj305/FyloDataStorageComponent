import React from "react";

import styles from "./FyloComponent.module.scss";

import logo from "../src/assets/logo.svg";

import document from "../src/assets/document.svg";
import folder from "../src/assets/folder.svg";
import upload from "../src/assets/upload.svg";

const FyloComponent = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.subContainer}`}>
          <div className={`${styles.box1}`}>
            <img src={logo} alt="fylo logo" />
            <div className={`${styles.box1Icons}`}>
              <img
                src={document}
                alt="document icon"
                className={`${styles.icon}`}
              />
              <img
                src={folder}
                alt="folder icon"
                className={`${styles.icon}`}
              />
              <img
                src={upload}
                alt="upload icon"
                className={`${styles.icon}`}
              />
            </div>
          </div>

          <div className={`${styles.box2}`}>
            <div className={`${styles.warningBox}`}>
              <div className={`${styles.text1}`}>
                <span className={`${styles.bubbleText1}`}>185 </span>
                <span className={`${styles.bubbleText2}`}> GM LEFT</span>
              </div>
            </div>

            <div className={`${styles.textBox}`}>
              <div>
                You've used <strong>815 GB</strong> of your storage
              </div>

              <div className={`${styles.line}`}>
                <div className={`${styles.innerLine}`}></div>
                <div className={`${styles.innerDot}`}></div>
              </div>
              <div className={`${styles.bottomTextWrapper}`}>
                <div>0 GM</div>
                <div>1000 GM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FyloComponent;

/* className={`${styles.container}`} */
