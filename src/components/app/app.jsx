import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import { HomePage } from '../../pages';
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
          {/* <Route path="/login" exact={true}>
            
          </Route>
          <Route path="/register" exact={true}>
            
          </Route>
          <Route path="/forgot-password" exact={true}>
            
          </Route>
          <Route path="/reset-password" exact={true}>
            
          </Route>
          <Route path="/profile" exact={true}>
            
          </Route> */}
        </Switch>
      </main>
      
    </Router>
  );
}

export default App;
