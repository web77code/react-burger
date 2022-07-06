import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';

import { ProtectedRoute } from '../protected-route';
import { checkAuthUser } from '../../services/actions/auth';

import AppHeader from '../app-header/app-header';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';

import { clearIngredientsDetails } from '../../services/actions/ingredient-details';

import { 
  HomePage, 
  LoginPage, 
  RegistrationPage, 
  ForgotPasswordPage, 
  ResetPasswordPage, 
  ProfilePage,
  NotFoundPage,
  OrdersPage,
} from '../../pages';

import styles from './app.module.css';

const App = () => {

  const dispatch = useDispatch();

  const history = useHistory();
  const location = useLocation();
  const background = location.state?.background;

  const { isAuthChecked, sendRequest } = useSelector(store => store.user);

  useEffect(() => {
    if(!isAuthChecked && !sendRequest) 
      dispatch(checkAuthUser());
  }, [isAuthChecked, sendRequest, dispatch]);

  const closeIngredientDetails = () => {
    // dispatch(clearIngredientsDetails());
    history.goBack();
  }

  return (
    <>
      <AppHeader />
      <main className={styles.content}>
        <Switch location={background || location}>
          <Route 
            path="/"
            exact
          >
            <HomePage />
          </Route>

          <Route
            path="/ingredients/:id"
            children={<IngredientDetails header="Детали ингредиента" />}
          />

          <ProtectedRoute 
            path="/login"
            anonymousOnly 
            exact
          >
            <LoginPage />
          </ProtectedRoute>

          <ProtectedRoute 
            path="/register" 
            anonymousOnly
            exact
          >
            <RegistrationPage />
          </ProtectedRoute>

          <ProtectedRoute 
            path="/forgot-password" 
            anonymousOnly
            exact
          >
            <ForgotPasswordPage />
          </ProtectedRoute>

          <ProtectedRoute 
            path="/reset-password"
            hasParrentPage="/forgot-password"
            anonymousOnly
            exact
          >
            <ResetPasswordPage  />
          </ProtectedRoute>

          <ProtectedRoute 
            path="/profile"
            authOnly
            exact
          >
            <ProfilePage  />
          </ProtectedRoute>

          <ProtectedRoute 
            path="/profile/orders"
            authOnly
            exact
          >
            <OrdersPage  />
          </ProtectedRoute>

          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>

        {background && (
          <Route
            path="/ingredients/:id"
            children={
              <Modal closeModal={closeIngredientDetails} header="Детали ингредиента">
                <IngredientDetails />
              </Modal>
            }
          />)
        }
        
      </main>
    </>
  );
}

export default App;
