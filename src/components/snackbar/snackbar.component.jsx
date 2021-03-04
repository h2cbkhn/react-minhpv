import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hideSnackbar } from '../../store/common/actions/common.actions';

function Alert(props) {
  return <div elevation={6} variant="filled" {...props}> </div>;
}

const CustomizedSnackbars = ({ type, message, show, action__hideSnackbar }) => {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(show);
  }, [show]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    action__hideSnackbar();
  };

  return (
    <div
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      vertical="top"
      horizontal="center"
    >
      <Alert onClose={handleClose} severity={type}>
        {message}
      </Alert>
    </div>
  );
};

CustomizedSnackbars.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  message: PropTypes.string,
  show: PropTypes.bool,
  action__hideSnackbar: PropTypes.func,
};

CustomizedSnackbars.defaultProps = {
  type: 'success',
  message: '',
  show: false,
  action__hideSnackbar: () => {},
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      action__hideSnackbar: hideSnackbar,
    },
    dispatch,
  );

const CustomSnackbar = connect(null, mapDispatchToProps)(CustomizedSnackbars);
export default CustomSnackbar;
