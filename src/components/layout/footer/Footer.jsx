import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './style.scss';
import texts from '../../../constants/translates';

const Footer = () => {
  return (
    <div className="footer__container">
      <Typography variant="body1" className="footer__text">
        <Grid container spacing={3}>
          <Grid item xs>
            {texts.footer.copyright}
          </Grid>
          <Grid item xs className="footer__text--alignCenter">
            {texts.footer.aide}
          </Grid>
          <Grid item xs className="footer__text--alignRight">
            {texts.footer.contact}
          </Grid>
        </Grid>
      </Typography>
    </div>
  );
};

export default Footer;
