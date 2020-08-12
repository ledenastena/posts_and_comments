import { createSelector } from 'reselect';

const selectPost = state => state.post;

export const selectPosts = createSelector(
  [ selectPost ],
  post => post.posts
);

export const selectComments = createSelector(
  [ selectPost ],
  post => post.comments
);

export const selectLikesByCurrentUser = createSelector(
  [ selectPost ],
  post => post.likesByCurrentUser
);

export const selectCommentsByCurrentUser = createSelector(
  [ selectPost ],
  post => post.commentsByCurrentUser
);

export const selectFetchingAllPostsAndComments = createSelector(
  [ selectPost ],
  post => post.fetchingAllPostsAndComments
);

export const selectFetchingCommentsForUser = createSelector(
  [ selectPost ],
  post => post.fetchingCommentsForUser
);

export const selectErrorMessage = createSelector(
  [ selectPost ],
  post => post.errorMessage
);
