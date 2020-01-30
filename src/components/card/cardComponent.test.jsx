import React from 'react';
import { mount } from 'enzyme';
import Typography from '@material-ui/core/Typography';
import imageTest from '../../assets/images/image1.png';
import CardComponent from './CardComponent.jsx';

describe('<CardComponent />', () => {
  const MOCK_PROPS = {
    isCategory: false,
    title: 'Perspective exterieure',
    subTitle: '00019 - Emile Ripert',
    description: 'Lille',
    alt: 'Contemplative Reptile',
    height: '140',
    image: imageTest,
  };

  const wrapper = mount(<CardComponent {...MOCK_PROPS} />);

  it('should render card component', () => {
    expect(wrapper.exists()).toMatchSnapshot();
  });

  it('should render card with title when isCategory is true', () => {
    const MOCK_PROP = {
      isCategory: true,
      title: 'Perspective exterieure',
      subTitle: '00019 - Emile Ripert',
      description: 'Lille',
      alt: 'Contemplative Reptile',
      height: '140',
      image: imageTest,
    };
    const newWrapper = mount(<CardComponent {...MOCK_PROP} />);
    expect(
      newWrapper
        .find(Typography)
        .first()
        .text(),
    ).toEqual('Perspective exterieure');
  });
});
