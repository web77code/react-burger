import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import Modal from '../components/modal/modal';
import IngredientDetails from '../components/ingredient-details/ingredient-details';
import OrderDetails from '../components/order-details/order-details';
import BurgerIngredients from '../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../components/burger-constructor/burger-constructor';
import ShowLoading from '../components/show-loading/show-loading';
import ErrorNotification from '../components/error-notification/error-notification';

import { getData } from '../services/actions/burger-ingredients';
import {
  setIngredientsDetails,
  clearIngredientsDetails,
} from '../services/actions/ingredient-details';
import { clearConstructor } from '../services/actions/burger-constructor';
import { closeOrderPopup } from '../services/actions/order-details';

const HomePage = () => {
  const dispatch = useDispatch();

  const ingredients = useSelector((state) => state.ingredients.data);
  const { dataRequest, dataFailed } = useSelector((state) => state.ingredients);

  const showDetailsPopup = useSelector((state) => state.details.showPopup);
  const showOrderPopup = useSelector((state) => state.order.showPopup);

  useEffect(() => {
    if (!ingredients.length) dispatch(getData());
  }, [dispatch, ingredients]);

  const showIngredientDetail = (e) => {
    const { name, image_large, calories, proteins, fat, carbohydrates } = ingredients.find(
      (el) => el._id === e.target.parentElement.id
    );

    dispatch(
      setIngredientsDetails({
        showPopup: true,
        name,
        image_large,
        calories,
        proteins,
        fat,
        carbohydrates,
      })
    );
  };

  const closeIngredientDetails = () => dispatch(clearIngredientsDetails());

  const closeOrderDetails = () => {
    dispatch(clearConstructor());
    dispatch(closeOrderPopup());
  }

  return (
    <>
      {showDetailsPopup && (
        <Modal closeModal={closeIngredientDetails} header="Детали ингредиента">
          <IngredientDetails />
        </Modal>
      )}

      {showOrderPopup && (
        <Modal closeModal={closeOrderDetails}>
          <OrderDetails />
        </Modal>
      )}

      {dataRequest && <ShowLoading />}
      {dataFailed && <ErrorNotification />}
      {ingredients.length > 0 ? (
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients openPopupWindow={showIngredientDetail} />
          <BurgerConstructor />
        </DndProvider>
      ) : (
        <ErrorNotification />
      )}
    </>
  );
}

export default HomePage;
