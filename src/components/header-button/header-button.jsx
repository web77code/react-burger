import React from 'react';
import PropTypes from 'prop-types';
import styles from './header-button.module.css';

const HeaderButton = props => {

  const [buttonStyle, setButtonstyle] = React.useState('ml-2 text text_type_main-default')

  React.useEffect(() => {
    if(props.inactive) setButtonstyle(buttonStyle + " text_color_inactive")
  }, []);

  return (
    <div className={styles.button + " pt-4 pr-5 pb-4 pl-5"}>
      {props.children}
      <p className={buttonStyle}>{props.name}</p>
    </div>
  );
}

HeaderButton.propTypes = {
  name: PropTypes.string,
  inactive: PropTypes.bool
};

export default HeaderButton;
