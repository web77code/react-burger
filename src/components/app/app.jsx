import React from "react";
import { CONFIG } from "../../utils/constants";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import ShowLoading from "../show-loading/show-loading";
import ErrorNotification from "../error-notification/error-notification";
import { IngredientsContext } from "../../contexts/appContext";
import styles from "./app.module.css";

function App() {
  const [ingredients, setIngredients] = React.useState({
    isLoading: false,
    hasError: false,
    data: [],
  });

  const [modals, setModals] = React.useState({
    visible: false,
    detailsModal: false,
    orderModal: false,
    data: {},
  });

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setIngredients({ 
      ...ingredients, 
      hasError: false, 
      isLoading: true 
    });

    fetch(`${CONFIG.BASE_URL}/ingredients`, {
      headers: CONFIG.HEADERS,
    })
      .then((res) => res.json())
      .then((res) => {
        setIngredients({
          hasError: !res.success,
          data: res.data,
          isLoading: false,
        });
      })
      .catch((err) => {
        setIngredients({ ...ingredients, hasError: true, isLoading: false });

        if (!err.json) {
          console.error("Что-то пошло не так... :( ");
        } else {
          err.json().then((err) => {
            console.error(err.message);
          });
        }
      });
  };

  function handleOpenModal(id, e) {
    if (e.currentTarget.type === "submit") {
      fetch(`${CONFIG.BASE_URL}/orders`, {
        method: 'POST',
        headers: CONFIG.HEADERS,
        body: JSON.stringify({
          "ingredients": id,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setModals({ 
            visible: true, 
            detailsModal: false, 
            orderModal: true,
            data: res.order.number,
          });
        })
        .catch((err) => {
          if (!err.json) {
            console.error("Что-то пошло не так... :( ");
          } else {
            err.json().then((err) => {
              console.error(err.message);
            });
          }
        })
        .finally(() => {
          
        });
      
    } else {
      const { name, image_large, calories, proteins, fat, carbohydrates } =
        ingredients.data.find((el) => el._id === id);

      setModals({
        visible: true,
        detailsModal: true,
        orderModal: false,
        data: { 
          name, 
          image_large, 
          calories, 
          proteins, 
          fat, 
          carbohydrates 
        },
      });
    }
  }

  function handleCloseModal(e) {
    if (e.code) {
      if (e.code === "Escape") {
        setModals({ 
          visible: false, 
          detailsModal: false, 
          orderModal: false 
        });
      }
    } else {
      e.stopPropagation();
      setModals({ 
        visible: false, 
        detailsModal: false, 
        orderModal: false 
      });
    }
  }

  const { isLoading, hasError } = ingredients;

  return (
    <div className={styles.app}>
      {modals.visible && (
        <Modal closePopupWindow={handleCloseModal}>
          {modals.detailsModal && <IngredientDetails data={modals.data} />}
          {modals.orderModal && <OrderDetails orderId={modals.data} />}
        </Modal>
      )}
      <AppHeader />
      {isLoading && <ShowLoading />}
      {hasError && <ErrorNotification />}
      {!isLoading && !hasError && ingredients.data.length && (
        <main className={styles.content}>
          <IngredientsContext.Provider value={{ ingredients }}>
            <BurgerIngredients 
              openPopupWindow={handleOpenModal} 
            />
            <BurgerConstructor 
              openPopupWindow={handleOpenModal} 
            />
          </IngredientsContext.Provider>
        </main>
      )}
    </div>
  );
}

export default App;
