import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialogSlide = ({
  open,
  title,
  content,
  handleClose,
  textButtonOk,
  textButtonCancel,
}) => {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {content}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          {textButtonOk?.length > 0 && (
            <Button onClick={handleClose} variant="outlined" color="primary">
              {textButtonOk}
            </Button>
          )}
          {textButtonCancel?.length > 0 && (
            <Button onClick={handleClose} variant="outlined" color="primary">
              {textButtonCancel}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

AlertDialogSlide.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.string,
  textButtonOk: PropTypes.string,
  textButtonCancel: PropTypes.string,
  handleClose: PropTypes.func,
};

export default AlertDialogSlide;
