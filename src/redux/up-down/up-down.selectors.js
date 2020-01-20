import { createSelector } from 'reselect';

const selectUpDown = state => state.upDown;

export const selectUpDownNumber = createSelector(
  [selectUpDown],
  upDown => upDown.number,
);
