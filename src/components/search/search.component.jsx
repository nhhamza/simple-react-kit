import React from 'react';
import { Icon, Input, AutoComplete } from 'antd';
import PropTypes from 'prop-types';
import Spinner from '../spinner/spinner.component';
import classNames from './search.styles.scss';

const Search = ({ onSearchHandler, predictiveResults, isLoading }) => {
  return (
    <div className={classNames.search}>
      <AutoComplete
        dataSource={isLoading ? [] : predictiveResults}
        placeholder="input here"
        onSearch={onSearchHandler}
      >
        <Input
          suffix={<Icon type="search" className="certain-category-icon" />}
        />
      </AutoComplete>
      {isLoading ? (
        <div className={classNames.search__spinner}>
          <Spinner />
        </div>
      ) : null}
    </div>
  );
};

Search.propTypes = {
  onSearchHandler: PropTypes.func,
  isLoading: PropTypes.bool,
  predictiveResults: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
};

export default Search;
