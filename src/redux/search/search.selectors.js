import { createSelector } from 'reselect';

const selectSearch = state => state.search;

export const selectSearchPredictiveResults = createSelector(
  [selectSearch],
  search => search.predictiveResults,
);

export const selectSearchIsLoading = createSelector(
  [selectSearch],
  search => search.isLoading,
);
