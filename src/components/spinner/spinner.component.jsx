import React from 'react';
import PropTypes from 'prop-types';

import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" spin />;

const Spinner = ({ size = 'default' }) => (
  <Spin indicator={antIcon} size={size} />
);

Spinner.propTypes = {
  size: PropTypes.string,
};

export default Spinner;
