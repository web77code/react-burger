import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getData } from "../../services/actions/burger-ingredients";

import FeedUnit from "../feed-unit";

import styles from "./feed-list.module.css";

const FeedList = () => {
  const dispatch = useDispatch();
  
  const orders = useSelector((store) => store.feed.orders);
  const ingredientsList = useSelector((store) => store.ingredients.data);

  useEffect(() => {
    if (!ingredientsList.length) dispatch(getData());
  }, [ingredientsList, dispatch]);

  const getPrice = (orderIngredients) => {
    const res = orderIngredients.reduce((prev, item) => {
      const currentIngredient = ingredientsList.find((el) => el._id === item);

      return prev + currentIngredient.price;
    }, 0);

    return res;
  };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {orders.length > 0 &&
          ingredientsList.length > 0 &&
          orders.map(({ _id, ingredients, name, number, updatedAt }) => {
            const price = getPrice(ingredients);
            return (
              <FeedUnit
                key={_id}
                id={_id}
                name={name}
                number={number}
                price={price}
                updatedAt={updatedAt}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default FeedList;
