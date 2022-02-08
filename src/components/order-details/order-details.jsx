import PropTypes from 'prop-types';
import doneIconPath from '../../images/done.svg'
import styles from './order-details.module.css';

const OrderDetails = ({ orderId }) => {

  OrderDetails.propTypes = {
    orderId: PropTypes.string,
  };

  return (
    <div className={styles.container + " mt-30 mb-30"}>
      <h2 className={styles.orderNumber + " text text_type_digits-large mb-8"}>{orderId}</h2>
      <h3 className="text text_type_main-medium mb-15">идентификатор заказа</h3>
      <img  className="mb-15" src={doneIconPath} alt=""></img>
      <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
      <p className={styles.waitFor + " text text_type_main-default"}>Дождитесь готовности на орбитальной станции</p>
    </div>
  );
}

export default OrderDetails;
