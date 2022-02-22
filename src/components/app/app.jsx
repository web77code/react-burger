import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../services/actions/burger-ingredients';

import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import ShowLoading from '../show-loading/show-loading';
import ErrorNotification from '../error-notification/error-notification';

import { SET_INGREDIENT_DETAILS } from '../../services/actions/ingredient-details';

import styles from './app.module.css';

function App() {
  const dispatch = useDispatch();

  const ingredients = useSelector((state) => state.ingredients.data);
  const dataRequest = useSelector((state) => state.ingredients.dataRequest);
  const dataFailed = useSelector((state) => state.ingredients.dataFailed);

  const [modals, setModals] = React.useState({
    detailsModal: false,
    orderModal: false,
    data: {},
  });

  useEffect(() => {
    if (!ingredients.length) dispatch(getData());
  }, [dispatch, ingredients]);

  const showOrderDetail = (burgerIngredients) => {
    // fetch(`${CONFIG.BASE_URL}/orders`, {
    //   method: 'POST',
    //   headers: CONFIG.HEADERS,
    //   body: JSON.stringify({
    //     "ingredients": burgerIngredients,
    //   }),
    // })
    //   .then((res) => {
    //     if (res.ok) return res.json();
    //     return Promise.reject(res);
    //   })
    //   .then((res) => {
    //     setModals({
    //       detailsModal: false,
    //       orderModal: true,
    //       data: res.order.number,
    //     });
    //   })
    //   .catch((err) => {
    //     if (!err.json) {
    //       console.error("Произошла ошибка при создании заказа. :( Попробуйте еще раз. ");
    //     } else {
    //       console.error(`Произошла ошибка при создании заказа. Тип ошибки: ${err.status} ${err.statusText}`);
    //     }
    //   });
  };

  const showIngredientDetail = (e) => {
    const id = e.target.parentElement.id;

    const { name, image_large, calories, proteins, fat, carbohydrates } = ingredients.find(
      (el) => el._id === id
    );

    dispatch({
      type: SET_INGREDIENT_DETAILS,
      ingredient: {
        name,
        image_large,
        calories,
        proteins,
        fat,
        carbohydrates,
      },
    });

    setModals({
      detailsModal: true,
      orderModal: false,
      data: {},
    });
  };

  const closeModal = () => setModals({ detailsModal: false, orderModal: false, data: {} });

  return (
    <div className={styles.app}>
      {modals.detailsModal && (
        <Modal closeModal={closeModal} header="Детали ингредиента">
          <IngredientDetails data={modals.data} />
        </Modal>
      )}

      {modals.orderModal && (
        <Modal closeModal={closeModal}>
          <OrderDetails orderId={modals.data} />
        </Modal>
      )}

      <AppHeader />
      {dataRequest && <ShowLoading />}
      {dataFailed && <ErrorNotification />}
      {ingredients.length > 0 ? (
        <main className={styles.content}>
          <BurgerIngredients openPopupWindow={showIngredientDetail} />
          <BurgerConstructor openPopupWindow={showOrderDetail} />
        </main>
      ) : (
        <ErrorNotification />
      )}
    </div>
  );
}

export default App;
