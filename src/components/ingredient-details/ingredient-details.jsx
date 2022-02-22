import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import styles from './ingredient-details.module.css';

const IngredientDetails = () => {
  //const { name, image_large, calories, proteins, fat, carbohydrates } = props.data;
  const { name, image_large, calories, proteins, fat, carbohydrates } = useSelector(state => state.details);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img className={styles.image + " mb-4"} src={image_large} alt={name} />
        <h3 className={styles.name + " mb-8 text text_type_main-medium"}>{name}</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h4 className="text text_type_main-default">Калории,ккал</h4>
            <p className="text text_type_digits-default">{calories}</p>
          </li>
          <li className={styles.item}>
            <h4 className="text text_type_main-default">Белки, г</h4>
            <p className="text text_type_digits-default">{proteins}</p>
          </li>
          <li className={styles.item}>
            <h4 className="text text_type_main-default">Жиры, г</h4>
            <p className="text text_type_digits-default">{fat}</p>
          </li>
          <li className={styles.item}>
            <h4 className="text text_type_main-default">Углеводы, г</h4>
            <p className="text text_type_digits-default">{carbohydrates}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default IngredientDetails;
