import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './header-button.module.css';

const HeaderButton = (props) => {

  const { text, url, children } = props;

  return (
    <NavLink 
      to={url} 
      className={styles.linkContainer + " pt-4 pr-5 pb-4 pl-5 text text_type_main-default text_color_inactive"}
      activeClassName={styles.activePage}
      exact
    >
      {children}
      <span className="ml-2">{text}</span>
    </NavLink>
  );
}

HeaderButton.propTypes = {
  text: PropTypes.string.isRequired,
  url:  PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default HeaderButton;
