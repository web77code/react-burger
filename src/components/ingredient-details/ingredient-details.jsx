import styles from './ingredient-details.module.css';

const IngredientDetails = () => {
  return (
    <div className={styles.container + " mt-10 mr-10 mb-15 ml-10"}>
      <h2 className="text text_type_main-large">Детали ингредиента</h2>
      <div className={styles.card}>
        <img className={styles.image + " mb-4"} src="https://code.s3.yandex.net/react/code/bun-02-large.png" alt="" />
        <h3 className={styles.name + " mb-8 text text_type_main-medium"}>Биокотлета из марсианской Магнолии</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h4 className="text text_type_main-default">Калории,ккал</h4>
            <p className="text text_type_digits-default">244,4</p>
          </li>
          <li className={styles.item}>
            <h4 className="text text_type_main-default">Белки, г</h4>
            <p className="text text_type_digits-default">12,2</p>
          </li>
          <li className={styles.item}>
            <h4 className="text text_type_main-default">Жиры, г</h4>
            <p className="text text_type_digits-default">17,2</p>
          </li>
          <li className={styles.item}>
            <h4 className="text text_type_main-default">Углеводы, г</h4>
            <p className="text text_type_digits-default">10,2</p>
          </li>
        </ul>
      </div>
      

    </div>
  );
}

export default IngredientDetails;