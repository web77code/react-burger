import React from 'react';
import styles from './HeaderButton.module.css';

const HeaderButton = (props) => {
  let buttonTextStyle = "ml-2 text text_type_main-default";

  if(props.inactive) {
    buttonTextStyle += " text_color_inactive";
  }

  return (
    <div className={styles.button + " pt-4 pr-5 pb-4 pl-5"}>
      {props.children}
      <p className={buttonTextStyle}>{props.name}</p>
    </div>
  );
}

export default HeaderButton;
