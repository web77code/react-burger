import PropTypes from 'prop-types';

import styles from "./feed-image.module.css";

const FeedImage = (props) => {
  const { image, more, overlap } = props;

  return (
    <div className={styles.container} style={{zIndex: overlap}}>
      <div className={styles.back}></div>
      <img className={styles.image} src={image} alt="" />
      {more && (
        <div className={styles.more}>
          <p className="text text_type_main-default">+{more}</p>
        </div>
      )}
    </div>
  );
};

FeedImage.propTypes = {
  image: PropTypes.string.isRequired, 
  more: PropTypes.number,
  overlap: PropTypes.number.isRequired,
};

export default FeedImage;
