import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

import PropTypes from 'prop-types';

const Search = ({
  predictiveResults,
  onChangeHandler,
  isLoading,
  onChangeSelectHandler,
}) => {
  return (
    <Autocomplete
      id="autocomplete"
      freeSolo
      options={isLoading ? [] : predictiveResults}
      getOptionLabel={option => option.title}
      onChange={(event, value) =>
        value !== null && onChangeSelectHandler(value)
      }
      renderInput={params => (
        <TextField
          {...params}
          fullWidth
          margin="normal"
          variant="outlined"
          onChange={event => onChangeHandler(event.target.value)}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

Search.propTypes = {
  predictiveResults: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
  isLoading: PropTypes.bool,
  onChangeHandler: PropTypes.func,
  onChangeSelectHandler: PropTypes.func,
};

export default Search;
