import { createSelector } from 'reselect';

const selectSubeBaja = state => state.subeBaja;

export const selectSubeBajaNumber = createSelector(
  [selectSubeBaja],
  subeBaja => subeBaja.number,
);
