import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ingridientStyles from './IngridientsElement.module.css';

class IngridientsElement extends React.Component {
  render () {
    return (
      <div className={ingridientStyles.ingridient}>
        <img src={this.props.image} className={"mb-1 " + ingridientStyles.image} alt={this.props.name} />
        <div className={"mb-1 " + ingridientStyles.priceContainer}>
          <p className={"text text_type_digits-default " + ingridientStyles.price}>{this.props.price}</p>
          <CurrencyIcon type="primary" />
          </div>
        <h3 className={"text text_type_main-default " + ingridientStyles.name}>{this.props.name}</h3>
      </div>
    );
  }
}

export default IngridientsElement;