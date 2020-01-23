import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
// import Spinner from '../spinner/spinner.component';
// import classNames from './search.styles.scss';

const Search = ({ predictiveResults, onSearchHandler, isLoading }) => {
  return (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      onChange={onSearchHandler}
      options={predictiveResults}
      renderInput={params => (
        <TextField {...params} margin="normal" variant="outlined" fullWidth />
      )}
    />
  );
};

Search.propTypes = {
  predictiveResults: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
};

export default Search;
