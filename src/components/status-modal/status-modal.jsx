import React from 'react';
import PropTypes from 'prop-types';
import styles from './status-modal.module.scss';
import success from '../../assets/images/success.svg';
import failed from '../../assets/images/failed.svg';

const StatusModal = (props) => {
  const { message, status, onClose } = props;
  return (
    <div className={styles['backdrop']}>
      <div className={styles['backdrop__container']}>
        <img
          alt="status"
          src={status === 'failed' ? failed : success}
          width="136"
        />
        <p className={styles['backdrop__container__title']}>
          {status === 'failed' ? 'Failed' : 'Success'}
        </p>
        <p className={styles['backdrop__container__subtitle']}>{message}</p>
        <button type="button" variant="outlined" color="primary" onClick={() => onClose()}>
          Go Back
        </button>
      </div>
    </div>
  );
};

StatusModal.propTypes = {
  message: PropTypes.string,
  status: PropTypes.string,
  onClose: PropTypes.func,
};

StatusModal.defaultProps = {
  message: '',
  status: '',
  onClose: Function,
};

export default StatusModal;
