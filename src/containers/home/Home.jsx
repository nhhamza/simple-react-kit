import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import {
  selectSearchPredictiveResults,
  selectSearchIsLoading,
} from '../../redux/search/search.selectors';
import { fetchSearchResultsStart } from '../../redux/search/search.actions';

import Search from '../../components/search/search.jsx';
import ListCategories from '../listCategories/ListCategories.jsx';
import Gallery from '../gallery/gallery.jsx';

const Home = ({ fetchSearchResults, predictiveResults, isLoading }) => {
  const onChangeHandler = text => {
    if (text.length >= 3) {
      fetchSearchResults(text);
    }
  };

  const onChangeSelectHandler = text => {
    if (text.title.length >= 3) {
      fetchSearchResults(text.title);
    }
  };
  return (
    <div>
      <Gallery />
      <Search
        predictiveResults={predictiveResults}
        onChangeHandler={onChangeHandler}
        isLoading={isLoading}
        onChangeSelectHandler={onChangeSelectHandler}
      />
      <ListCategories />
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
