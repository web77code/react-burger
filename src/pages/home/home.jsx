import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import Modal from "../../components/modal";
import OrderDetails from "../../components/order-details";
import BurgerIngredients from "../../components/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor";
import AnimatedLoader from "../../components/animated-loader";
import ErrorNotification from "../../components/error-notification";

import { getData } from "../../services/actions/burger-ingredients";
import { clearConstructor } from "../../services/actions/burger-constructor";
import { closeOrderPopup } from "../../services/actions/order-details";

const Home = () => {
  const dispatch = useDispatch();

  const ingredients = useSelector((state) => state.ingredients.data);
  const { dataRequest, dataFailed } = useSelector((state) => state.ingredients);

  const showOrderPopup = useSelector((state) => state.order.showPopup);

  useEffect(() => {
    if (!ingredients.length) dispatch(getData());
  }, [dispatch, ingredients]);

  const closeOrderDetails = () => {
    dispatch(clearConstructor());
    dispatch(closeOrderPopup());
  };

  return (
    <>
      {showOrderPopup && (
        <Modal closeModal={closeOrderDetails}>
          <OrderDetails />
        </Modal>
      )}

      {dataRequest && <AnimatedLoader />}
      {dataFailed && <ErrorNotification />}

      {ingredients.length && (
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      )}
    </>
  );
};

export default Home;
