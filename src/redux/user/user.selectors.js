import { createSelector } from 'reselect';

const selectUser = ( state ) => state.user;

export const selectCurrentUserId = createSelector(
  [ selectUser ],
  user => user.currentUserId
);

export const selectFetchingUserId = createSelector(
  [ selectUser ],
  user => user.fetchingUserId
);

export const selectErrorMessage = createSelector(
  [ selectUser ],
  user => user.errorMessage
);