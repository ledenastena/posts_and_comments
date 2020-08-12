import postActionTypes from './post.types.js';
import { returnArray } from './post.utils.js';

const INITIAL_STATE = {
  posts: [],
  comments: [],
  commentsByCurrentUser: [],
  likesByCurrentUser: [],
  fetchingAllPostsAndComments: false,
  fetchingCommentsForUser: false,
  errorMessage: ''
}

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ( postActionTypes.ADD_NEW_COMMENT ): {
      return {
        ...state,
        commentsByCurrentUser: returnArray( state.commentsByCurrentUser, action.payload )
      }
    }
    case ( postActionTypes.FETCH_ALL_POSTS_AND_COMMENTS_START ): {
      return {
        ...state,
        fetchingAllPostsAndComments: true
      };
    }
    case ( postActionTypes.LIKE_POST ): {
      return {
        ...state,
        likesByCurrentUser: returnArray( state.likesByCurrentUser, action.payload )
      }
    }
    case ( postActionTypes.FETCH_ALL_POSTS_AND_COMMENTS_SUCCESS ): {
      return {
        ...state,
        fetchingAllPostsAndComments: false,
        posts: action.payload.posts,
        comments: action.payload.comments
      };
    }
    case ( postActionTypes.FETCH_ALL_POSTS_AND_COMMENTS_FAILURE ): {
      return {
        ...state,
        fetchingAllPostsAndComments: false,
        errorMessage: action.payload
      };
    }
    case ( postActionTypes.FETCH_COMMENTS_FOR_USER_START ): {
      return {
        ...state,
        fetchingCommentsForUser: true
      };
    }
    case ( postActionTypes.FETCH_COMMENTS_FOR_USER_SUCCESS ): {
      return {
        ...state,
        fetchingCommentsForUser: false,
        commentsByCurrentUser: action.payload
      };
    }
    case ( postActionTypes.FETCH_COMMENTS_FOR_USER_FAILURE ): {
      return {
        ...state,
        fetchingCommentsForUser: false,
        errorMessage: action.payload
      };
    }
    default: {
      return state;
    }       
  }
}

export default postReducer;

