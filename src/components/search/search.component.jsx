import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import PropTypes from 'prop-types';
// import Spinner from '../spinner/spinner.component';
// import classNames from './search.styles.scss';

const Search = ({ predictiveResults, onSearchHandler, isLoading }) => {
  return (
    <Autocomplete
      id="autocomplete"
      freeSolo
      options={isLoading ? [] : predictiveResults}
      loading={true}
      loadingText={'loading...'}
      renderInput={params => (
        <>
          <TextField
            {...params}
            margin="normal"
            variant="outlined"
            onChange={onSearchHandler}
          />
          <IconButton
            aria-label="search"
            onClick={() => (window.location = 'www.google.es')}
          >
            <SearchIcon s />
          </IconButton>
        </>
      )}
    />
  );
};

Search.propTypes = {
  predictiveResults: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
  onSearchHandler: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default Search;
