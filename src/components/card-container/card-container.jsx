import React from 'react';
import PropTypes from 'prop-types';
import styles from './card-container.module.scss';

const CardContainer = ({ children }) => (
  <div elevation={2} className={`${styles.container}`}>
    {children}
  </div>
);

CardContainer.propTypes = {
  children: PropTypes.object,
};

CardContainer.defaultProps = {
  children: {},
};

export default CardContainer;
