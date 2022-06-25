import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderButton from '../header-button/header-button';
import styles from './app-header.module.css';

const AppHeader = () => {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            <li>
              <HeaderButton text="Конструктор" url="/">
                <BurgerIcon type="secondary" />
              </HeaderButton>
            </li>
            <li className="ml-2">
              <HeaderButton text="Лента заказов" url="/all-orders">
                <ListIcon type="secondary" />
              </HeaderButton>
            </li>
          </ul>
        </nav>
        <Logo />
        <div className={styles.rightSide}>
          <HeaderButton text="Личный кабинет" url="/profile">
            <ProfileIcon type="secondary" />
          </HeaderButton>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
