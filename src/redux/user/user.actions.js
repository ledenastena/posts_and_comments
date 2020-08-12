import userActionTypes from './user.types';
import USER_DATA from './user.data';

export const fetchCurrentUserIdStart = () => ({
  type: userActionTypes.FETCH_CURRENT_USER_ID_START
});

export const fetchCurrentUserIdSucess = ( fetchedId ) => ({
  type: userActionTypes.FETCH_CURRENT_USER_ID_SUCCESS,
  payload: fetchedId
});

export const fetchCurrentUserIdFailure = ( errorMessage ) => ({
  type: userActionTypes.FETCH_CURRENT_USER_ID_FAILURE,
  payload: errorMessage
});

export const fetchCurrentUserIdStartAsync = () => {
  return dispatch => {
    dispatch( fetchCurrentUserIdStart() ); //initiating the fetching of current user id ( API call )

    const currentUserId = USER_DATA.current_user_id; //this would be API call 

    if ( currentUserId !== null ) {
      dispatch( fetchCurrentUserIdSucess( currentUserId ) ); //successfully retrieved data

    } else {
      dispatch( fetchCurrentUserIdFailure( 'No user id available' ) ); //error while retrieving data
    }

  }
}