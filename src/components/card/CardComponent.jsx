import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import LibraryAddOutlinedIcon from '@material-ui/icons/LibraryAddOutlined';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import styles from './style.jsx';

const CardComponent = ({
  isCategory,
  title,
  subTitle,
  description,
  alt,
  height,
  image,
}) => {
  const classes = makeStyles(styles)();

  return (
    <Card className={classes.card}>
      {!isCategory && (
        <div className={classes.cardIconGroup}>
          <IconButton
            color="inherit"
            aria-label="menu"
            className={classes.cardIconPadding}
          >
            <FileCopyOutlinedIcon className={classes.cardIcon} />
          </IconButton>

          <IconButton
            color="inherit"
            aria-label="menu"
            className={classes.cardIconPadding}
          >
            <LibraryAddOutlinedIcon className={classes.cardIcon} />
          </IconButton>
        </div>
      )}
      <CardActionArea>
        <CardMedia alt={alt} height={height} image={image} component="img" />
        <CardContent>
          {isCategory ? (
            <Typography gutterBottom className={classes.cardTitleCategory}>
              {title}
            </Typography>
          ) : (
            <>
              <Typography gutterBottom className={classes.cardTitle}>
                {title}
              </Typography>
              <Typography gutterBottom className={classes.subTitle}>
                {subTitle}
              </Typography>
              <Typography gutterBottom className={classes.description}>
                {description}
              </Typography>
            </>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CardComponent.propTypes = {
  isCategory: PropTypes.bool,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.string,
  image: PropTypes.string,
};

export default CardComponent;
