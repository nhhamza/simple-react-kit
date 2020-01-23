import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Button, DatePicker } from 'antd';

import {
  selectSearchPredictiveResults,
  selectSearchIsLoading,
} from '../../redux/search/search.selectors';
import { fetchSearchResultsStart } from '../../redux/search/search.actions';

import Search from '../../components/search/search.component';

const Home = ({ fetchSearchResults, predictiveResults, isLoading }) => {
  const onSearch = text => {
    if (text.length >= 3) {
      fetchSearchResults(text);
    }
  };
  return (
    <div>
      <Button type="primary">PRESS ME</Button>
      <DatePicker />
      <Search
        predictiveResults={predictiveResults}
        onSearchHandler={onSearch}
        isLoading={isLoading}
      />
    </div>
  );
};

Home.propTypes = {
  fetchSearchResults: PropTypes.func,
  predictiveResults: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
  isLoading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  predictiveResults: selectSearchPredictiveResults,
  isLoading: selectSearchIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchSearchResults: text => dispatch(fetchSearchResultsStart(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
