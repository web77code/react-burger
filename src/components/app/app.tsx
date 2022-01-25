import React from 'react';
import { apiConfig } from '../../utils/constants';
import ModalOverlay from '../modal-overlay/modal-overlay';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './app.module.css';

const App = () => {

  const [state, setState] = React.useState({
    isLoading: false,
    hasError: false,
    data: []
  });

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setState({ ...state, hasError: false, isLoading: true });

    fetch(apiConfig.baseUrl, {
      headers: apiConfig.headers,
    }).then(res => res.json())
      .then(res => {
        setState({ ...state, hasError: !res.success, data: res.data, isLoading: false })
      })
      .catch(e => {
        setState({ ...state, hasError: true, isLoading: false });
      });
  }

  const { data, isLoading, hasError } = state;

  return (
    <div className={styles.app}>
      <ModalOverlay />
      <Modal>
        {/* <IngredientDetails /> */}
        <OrderDetails />
      </Modal>
      <AppHeader />
      {isLoading && <h2>Загрузка...</h2>}
      {hasError && <h2>Ошибка</h2>}
      {
        !isLoading &&
        !hasError &&
        data.length &&
        <main className={styles.content}>
          <BurgerIngredients data={data} />
          <BurgerConstructor data={data} />
        </main>
      }
    </div>
  );
}

export default App;
