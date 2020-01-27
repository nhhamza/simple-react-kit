import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import classNames from './footer.scss';
import texts from '../../../constants/translates';

const Footer = () => {
  return (
    <div className={classNames.container}>
      <Typography variant="body1" className={classNames.footerText}>
        <Grid container spacing={3}>
          <Grid item xs>
            {texts.footer.copyright}
          </Grid>
          <Grid item xs className={classNames.alignCenter}>
            {texts.footer.aide}
          </Grid>
          <Grid item xs className={classNames.alignRight}>
            {texts.footer.contact}
          </Grid>
        </Grid>
      </Typography>
    </div>
  );
};

export default Footer;
