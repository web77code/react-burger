import inredientpreview from "../../images/ingredient-preview.png";

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./feed-unit.module.css";

const FeedUnit = () => {
  return (
    <li className={styles.item + " p-6"}>
      <div className={styles.details}>
        <p className="text text_type_digits-default">#034535</p>
        <p className="text text_type_main-default text_color_inactive">
          Сегодня, 16:20 i-GMT+3
        </p>
      </div>
      <h2 className="text text_type_main-medium">
        Death Star Starship Main бургер
      </h2>
      <div className={styles.content}>
        <div className={styles.ingredients}>
          <img src={inredientpreview} alt="" />
          <img src={inredientpreview} alt="" />
          <img src={inredientpreview} alt="" />
          <img src={inredientpreview} alt="" />
          <img src={inredientpreview} alt="" />
        </div>
        <span className="text text_type_digits-default mr-2 ml-6">480</span>
        <CurrencyIcon type="primary" />
      </div>
    </li>
  );
};

export default FeedUnit;
