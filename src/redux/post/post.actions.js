import postActionTypes from './post.types.js';
import POST_DATA from './post-data';
import COMMENT_DATA from './comment-data';
import { fetchCurrentUserIdStart, fetchCurrentUserIdSucess } from '../user/user.actions.js';

export const addNewComment = ( commentObj ) => ({
  type: postActionTypes.ADD_NEW_COMMENT,
  payload: commentObj
});

export const likePost = ( likeObj ) => ({
  type: postActionTypes.LIKE_POST,
  payload: likeObj
});

export const fetchAllPostsAndCommentsStart = () => ({
  type: postActionTypes.FETCH_ALL_POSTS_AND_COMMENTS_START
});

export const fetchAllPostsAndCommentsSuccess = ( data ) => ({
  type: postActionTypes.FETCH_ALL_POSTS_AND_COMMENTS_SUCCESS,
  payload: data
});

export const fetchAllPostsAndCommentsFailure = ( errorMessage ) => ({
  type: postActionTypes.FETCH_ALL_POSTS_AND_COMMENTS_FAILURE,
  payload: errorMessage
});

export const fetchAllPostsAndCommentsStartAsync = () => {
  return dispatch => {
    dispatch( fetchCurrentUserIdStart() );

    const posts = POST_DATA;
    const comments = COMMENT_DATA;  // this would correspond to API call for this data

    if ( posts !== null && comments !== null ) {
      dispatch( fetchAllPostsAndCommentsSuccess( { posts, comments } ) );
    } else {
      dispatch( fetchAllPostsAndCommentsFailure( 'An error ocurred') );
    }
  }
}

//comments for current user

export const fetchCommentsForUserStart = () => ({
  type: postActionTypes.FETCH_COMMENTS_FOR_USER_START
});

export const fetchCommentsForUserSuccess = ( data ) => ({
  type: postActionTypes.FETCH_COMMENTS_FOR_USER_SUCCESS,
  payload: data
});

export const fetchCommentsForUserFailure = ( errorMessage ) => ({
  type: postActionTypes.FETCH_COMMENTS_FOR_USER_FAILURE,
  payload: errorMessage
});

export const fetchCommentsForUserStartAsync = ( currentUserId ) => {
  return dispatch => {
    dispatch( fetchCommentsForUserStart() );

    const commentsForUser = COMMENT_DATA.filter( commentObj => commentObj.user_id == currentUserId );  // this would correspond to API call for this data

    if ( commentsForUser !== null ) {
      dispatch( fetchCommentsForUserSuccess( commentsForUser ) );
    } else {
      dispatch( fetchCommentsForUserFailure( 'An error ocurred') );
    }
  }
}