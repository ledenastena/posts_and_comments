import React from 'react';
import './posts.styles.css'
import { connect } from 'react-redux';
import { selectPosts, selectFetchingAllPostsAndComments, selectCommentsByCurrentUser } from '../../redux/post/post.selectors';
import SinglePost from '../../components/singlePost/single-post.component';
import { fetchAllPostsAndCommentsStartAsync } from '../../redux/post/post.actions';
import { fetchCurrentUserIdStartAsync } from '../../redux/user/user.actions';
import { selectFetchingUserId, selectCurrentUserId } from '../../redux/user/user.selectors';
import { store } from '../../redux/store';


class PostsPage  extends React.Component {
  state = {
  }
  
  
  unsubscribe = null;
  
  componentDidMount() {
    const { fetchAllPostsAndCommentsStartAsync, fetchCurrentUserIdStartAsync } = this.props;

    
    fetchAllPostsAndCommentsStartAsync();
    fetchCurrentUserIdStartAsync();

    this.unsubscribe = store.subscribe( () => {
      console.log('kaka');
    });

    
    // this.unsubscribe = colRef.onSnapshot((colSnap) => {
    //   updateProductsState(getProducts(colSnap));
    //   if (!colSnap.metadata.fromCache){ 
    //     this.setState({                 
    //       loadMore: false               
    //     });                             
    //   }                                 
     
    // });
  }
  
  componentWillUnmount() {
    this.unsubscribe();
  }
  
  render() {
    const { posts, fetchingAllPostsAndComments, fetchingUserId } = this.props;

    if ( (!fetchingAllPostsAndComments)  && ( !fetchingUserId ) && (posts.length > 0) ) {
      return (
        <div className='shop-list-container'>
          { 
            posts.map( ( post, index )=> (
            <SinglePost key={ index } post={ post } />
            ))
          }
        </div>
      );
    } else {
      return (
        <div className='shop-list-container'>
          Loading...
        </div>
      );
    }
  }
        
}

const mapStateToProps = (state) => ({
  posts: selectPosts( state ),
  fetchingAllPostsAndComments: selectFetchingAllPostsAndComments( state ),
  fetchingUserId: selectFetchingUserId( state ),
  currentUserId: selectCurrentUserId( state ),
  commentsByCurrentUser: selectCommentsByCurrentUser( state )
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllPostsAndCommentsStartAsync: () => dispatch( fetchAllPostsAndCommentsStartAsync() ),
  fetchCurrentUserIdStartAsync: () => dispatch( fetchCurrentUserIdStartAsync() )
})

export default connect( mapStateToProps, mapDispatchToProps )( PostsPage );