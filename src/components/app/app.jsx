import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from '../protected-route';

import AppHeader from '../app-header/app-header';
import { 
  HomePage, 
  LoginPage, 
  RegistrationPage, 
  ForgotPasswordPage, 
  ResetPasswordPage, 
  ProfilePage 
} from '../../pages';

import styles from './app.module.css';

function App() {
  return (
    <Router>
      <AppHeader />
      <main className={styles.content}>
        <Switch>
          <ProtectedRoute 
            path="/" 
            authOnly
            exact
          >
            <HomePage />
          </ProtectedRoute>

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
