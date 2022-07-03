import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from '../protected-route';

import AppHeader from '../app-header/app-header';
import { 
  HomePage, 
  LoginPage, 
  RegistrationPage, 
  ForgotPasswordPage, 
  ResetPasswordPage, 
  ProfilePage,
  NotFoundPage
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

          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
