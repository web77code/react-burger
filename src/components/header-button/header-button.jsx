import { useCallback } from "react";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";

import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from "./header-button.module.css";

const HeaderButton = (props) => {

  const { icon, text, url, exact } = props;

  const location = useLocation();

  const getIcon = useCallback(
    () => {
      let iconType = undefined;
      if(exact) {
        iconType = location.pathname === url ? 'primary' : 'secondary';
      } else {
        iconType = location.pathname.includes(url) ? 'primary' : 'secondary';
      }
      
      switch(icon) {
        case 'BurgerIcon': 
          return <BurgerIcon type={iconType} />;
        case 'ListIcon': 
          return <ListIcon type={iconType} />;
        case 'ProfileIcon': 
          return <ProfileIcon type={iconType} />;
        default:
          return undefined;
      }
    },
    [icon, location.pathname, url, exact],
  );

  const iconItem = getIcon(icon);

  return (
    <NavLink
      to={url}
      className={
        styles.linkContainer +
        " pt-4 pr-5 pb-4 pl-5 text text_type_main-default text_color_inactive"
      }
      activeClassName={styles.activePage}
      exact={exact}
    >
      {iconItem}
      <span className="ml-2">{text}</span>
    </NavLink>
  );
};

HeaderButton.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

export default HeaderButton;
