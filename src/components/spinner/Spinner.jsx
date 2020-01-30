import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import styles from './Style.jsx';

const Spinner = ({ isLoading }) => {
  const style = makeStyles(styles)();
  return (
    <>
      <Backdrop className={style.backdrop} open={isLoading}>
        <CircularProgress className={style.spinnerActive} size={200} />
      </Backdrop>
    </>
  );
};

Spinner.propTypes = {
  isLoading: PropTypes.bool,
};

export default Spinner;
