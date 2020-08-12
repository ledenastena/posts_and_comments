import userActionTypes from './user.types';

const INITIAL_STATE = {
  currentUserId: '0',
  fetchingUserId: false,
  errorMessage: ''
}

const userReducer = ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
    case ( userActionTypes.FETCH_CURRENT_USER_ID_START ): {
      return {
        ...state, 
        fetchingUserId: true
      }
    }
    case ( userActionTypes.FETCH_CURRENT_USER_ID_SUCCESS ): {
      return {
        ...state, 
        fetchingUserId: false,
        currentUserId: action.payload
      }
    }
    case ( userActionTypes.FETCH_CURRENT_USER_ID_FAILURE ): {
      return {
        ...state, 
        fetchingUserId: false,
        errorMessage: action.payload
      }
    }
    default : {
      return state
    }
  }
}

export default userReducer;