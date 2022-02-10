import PropTypes from 'prop-types';
import styles from './ingredient-details.module.css';

const IngredientDetails = props => {

  return (
    <div className={styles.container + " mt-10 mr-10 mb-15 ml-10"}>
      <h2 className="text text_type_main-large">Детали ингредиента</h2>
      <div className={styles.card}>
        <img className={styles.image + " mb-4"} src={props.data.image_large} alt={props.data.name} />
        <h3 className={styles.name + " mb-8 text text_type_main-medium"}>{props.data.name}</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h4 className="text text_type_main-default">Калории,ккал</h4>
            <p className="text text_type_digits-default">{props.data.calories}</p>
          </li>
          <li className={styles.item}>
            <h4 className="text text_type_main-default">Белки, г</h4>
            <p className="text text_type_digits-default">{props.data.proteins}</p>
          </li>
          <li className={styles.item}>
            <h4 className="text text_type_main-default">Жиры, г</h4>
            <p className="text text_type_digits-default">{props.data.fat}</p>
          </li>
          <li className={styles.item}>
            <h4 className="text text_type_main-default">Углеводы, г</h4>
            <p className="text text_type_digits-default">{props.data.carbohydrates}</p>
          </li>
        </ul>
      </div>
      

    </div>
  );
}

IngredientDetails.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    image_large: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
  }),
};

export default IngredientDetails;