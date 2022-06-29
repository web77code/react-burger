import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import { HomePage, LoginPage, RegisterPage, ForgotPasswordPage, ResetPasswordPage, ProfilePage } from '../../pages';
import styles from './app.module.css';

function App() {
  return (
    <Router>
      <AppHeader />
      <main className={styles.content}>
        <Switch>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
          <Route path="/login" exact={true}>
            <LoginPage />
          </Route>
          <Route path="/register" exact={true}>
            <RegisterPage />
          </Route>
          <Route path="/forgot-password" exact={true}>
            <ForgotPasswordPage />
          </Route>
          <Route path="/reset-password" exact={true}>
            <ResetPasswordPage  />
          </Route>
          <Route path="/profile" exact={true}>
            <ProfilePage  />
          </Route>
          {/* <Route path="/ingredients/:id" exact={true}>
            <IngredientPage  />
          </Route> 
          <Route>
            <NotFound404 />
          </Route>*/}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
