import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Modal from '../modal/modal';
import AppHeader from '../app-header/app-header';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import ShowLoading from '../show-loading/show-loading';
import ErrorNotification from '../error-notification/error-notification';
import { getData } from '../../services/actions/burger-ingredients';
import {
  setIngredientsDetails,
  clearIngredientsDetails,
} from '../../services/actions/ingredient-details';
import { clearConstructor } from '../../services/actions/burger-constructor';
import { closeOrderPopup } from '../../services/actions/order-details';
import styles from './app.module.css';

function App() {
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
    <div className={styles.app}>
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

      <AppHeader />
      {dataRequest && <ShowLoading />}
      {dataFailed && <ErrorNotification />}
      {ingredients.length > 0 ? (
        <main className={styles.content}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients openPopupWindow={showIngredientDetail} />
            <BurgerConstructor />
          </DndProvider>
        </main>
      ) : (
        <ErrorNotification />
      )}
    </div>
  );
}

export default App;
