import { useHistory, useLocation } from "react-router-dom";

import styledDate from "../../utils/date";

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./feed-unit.module.css";

const FeedUnit = (props) => {
  const location = useLocation();
  const history = useHistory();

  const { id, number, updatedAt, name, price, previews } = props;
  const styledUpdateAt = styledDate(updatedAt);

  return (
    <li
      className={styles.item + " p-6"}
      onClick={() =>
        history.push(`/feed/${id}`, { background: location })
      }
    >
      <div className={styles.details}>
        <p className="text text_type_digits-default">#{number}</p>
        <p className="text text_type_main-default text_color_inactive">
          {styledUpdateAt}
        </p>
      </div>
      <h2 className="text text_type_main-medium">{name}</h2>
      <div className={styles.content}>
        <div className={styles.ingredients}>
          {previews.map((item, index) => {
            return <img key={index} src={item} alt="" />;
          })}
        </div>
        <div className={styles.price}>
          <span className="text text_type_digits-default mr-2 ml-6">{price}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  );
};

export default FeedUnit;
