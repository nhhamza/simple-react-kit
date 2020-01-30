import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import logo from '../../../assets/images/logo.png';
import texts from '../../../constants/translates';
import styles from './style.jsx';
import './style.scss';

const Header = () => {
  const userName = 'GILES'; // TODO:@JAVI: change for state user name
  const header = (
    <div>
      <AppBar position="static">
        <Toolbar disableGutters>
          <img src={logo} alt="logo" className="menu__logo" />
          <p className="menu__tittle">{texts.header.menuTittle}</p>
          <section className="menu__rightToolbar">
            <IconButton color="inherit" aria-label="menu">
              <PersonOutlineOutlinedIcon style={styles.iconStyle} />
              <Typography style={styles.userText}>
                {texts.formatString(texts.header.welcome, { userName })}
              </Typography>
              <KeyboardArrowDownOutlinedIcon />
            </IconButton>
            <section className="menu__button--grease">
              <IconButton color="inherit" aria-label="menu">
                <AppsIcon style={styles.iconStyleWhite} />
                <Typography variant="body1" className="menu__text--white">
                  {texts.header.collection}
                </Typography>
              </IconButton>
            </section>
          </section>
        </Toolbar>
      </AppBar>
    </div>
  );
  return header;
};
export default Header;
