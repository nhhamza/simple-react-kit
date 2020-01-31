import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import styles from './style.jsx';

const SnackbarAlert = ({
  handleClose,
  open,
  message,
  severity,
  position = { vertical: 'bottom', horizontal: 'left' },
}) => {
  const classes = makeStyles(styles)();

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{
          vertical: position.vertical,
          horizontal: position.horizontal,
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity={severity}
        >
          <span className={classes.text}>{message}</span>
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

SnackbarAlert.propTypes = {
  handleClose: PropTypes.func,
  open: PropTypes.bool,
  message: PropTypes.string,
  severity: PropTypes.string,
  position: PropTypes.objectOf(PropTypes.object()),
};

export default SnackbarAlert;
