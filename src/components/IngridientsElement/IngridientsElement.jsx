import React from 'react';

import ingridientStyles from './IngridientsElement.module.css';

class IngridientsElement extends React.Component {
  render () {
    return (
      <div className={ingridientStyles.ingridient}>
        <img src={this.props.image} className={ingridientStyles.image} alt={this.props.name} />
        <div className={ingridientStyles.price}>{this.props.price}</div>
        <h3 className={ingridientStyles.name}>{this.props.name}</h3>
      </div>
    );
  }
}

export default IngridientsElement;