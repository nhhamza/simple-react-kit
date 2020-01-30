import React from 'react';
import Grid from '@material-ui/core/Grid';
import texts from '../../constants/translates';
import './style.scss';
import CardComponent from '../../components/card/CardComponent.jsx';

import imageTest from '../../assets/images/image1.png';

// TODO:@JAVI: display categories with categories data (mock or backend)
const ListCategories = () => {
  return (
    <div className="categoriesContainer">
      <p className="menu_tittle">{texts.listCategories.tittle}</p>
      <Grid container spacing={3}>
        <Grid item xs>
          <CardComponent
            isCategory
            title="Perspective exterieure"
            subTitle="00019 - Emile Ripert"
            description="Lille"
            alt="Contemplative Reptile"
            height="140"
            image={imageTest}
          />
        </Grid>
        <Grid item xs className="alignCenter">
          <CardComponent
            isCategory
            title="Perspective exterieure"
            subTitle="00019 - Emile Ripert"
            description="Lille"
            alt="Contemplative Reptile"
            height="140"
            image={imageTest}
          />
        </Grid>
        <Grid item xs className="alignRight">
          <CardComponent
            title="Perspective exterieure"
            subTitle="00019 - Emile Ripert"
            description="Lille"
            alt="Contemplative Reptile"
            height="140"
            image={imageTest}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default ListCategories;
