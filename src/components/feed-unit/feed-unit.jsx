import { useHistory, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import FeedStatus from "../feed-status";
import FeedImage from "../feed-image";

import styledDate from "../../utils/date";

import styles from "./feed-unit.module.css";

const FeedUnit = (props) => {
  const location = useLocation();
  const history = useHistory();
  const { pathname } = location;

  const { id, number, updatedAt, name, price, previews, status } = props;

  const styledUpdateAt = styledDate(updatedAt);
  const previewsList = previews.slice(0, 6);
  const hasMoreIngredients = previews.length - previewsList.length;

  return (
    <li
      className={styles.item + " p-6"}
      onClick={() =>
        history.push(`${pathname}/${id}`, { background: location })
      }
    >
      <div className={styles.details}>
        <p className="text text_type_digits-default">#{number}</p>
        <p className="text text_type_main-default text_color_inactive">
          {styledUpdateAt}
        </p>
      </div>
      <div>
        <h2 className="text text_type_main-medium">{name}</h2>
        {status && (
          <div className="mt-2">
            <FeedStatus status={status} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.ingredients}>
          {previewsList.map((item, index) => {
            const overlap = previewsList.length - index;

            if (index === previewsList.length - 1 && hasMoreIngredients > 0) {
              return (
                <FeedImage
                  key={index}
                  image={item}
                  more={hasMoreIngredients}
                  overlap={overlap}
                />
              );
            }

            return <FeedImage key={index} image={item} overlap={overlap} />;
          })}
        </div>
        <div className={styles.price}>
          <span className="text text_type_digits-default mr-2 ml-6">
            {price}
          </span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  );
};

FeedUnit.propTypes = {
  id: PropTypes.string.isRequired, 
  number: PropTypes.number.isRequired,
  updatedAt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  previews: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.string,
};

export default FeedUnit;
