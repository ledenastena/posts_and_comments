import React from 'react';
import './single-post.styles.css'
import { connect } from 'react-redux';
import { addNewComment, likePost } from '../../redux/post/post.actions';
import { selectCurrentUserId } from '../../redux/user/user.selectors';
import { selectComments, selectCommentsByCurrentUser, selectLikesByCurrentUser } from '../../redux/post/post.selectors';


class SinglePost  extends React.Component {
  state = {
    comment: '',
    liked: false
  }

  handleButtonClick = () => {
    const { addNewComment, post, currentUserId } = this.props;
    const newComment = {
      post_id: post.id,
      user_id: currentUserId,
      content: this.state.comment
    };

    // console.log( currentUserId );
    // console.log( newComment);

    addNewComment( newComment );

    this.setState({
      comment: ''
    });
  }
  
  commentsForPost = ( id ) => {
    const { comments, commentsByCurrentUser } = this.props;
    const allComments = comments.concat( commentsByCurrentUser );

    return  allComments.filter( commentObj => commentObj.post_id == id );
  }  
  
  handleChange = (e) => {
    this.setState({
      comment: e.target.value
    });
  }

  handleLike = () => {
    const { post, likePost } = this.props; 

    if ( !this.state.liked ) {
      likePost({
        post_id: post.id
      });

      this.setState({
        liked: true
      });
    }
  }

  determineLikes = () => {
    const { likesByCurrentUser, post } = this.props;

    if ( likesByCurrentUser.filter( like => like.post_id === post.id ).length > 0 ) {
      return parseInt( post.likes ) + 1;
    }

    return parseInt( post.likes );

  }

  render() {
    const { post, comments } = this.props;
    const likes = this.determineLikes();

    return (
      <div className='single-post-container'>
        <h2>{ post.title }</h2>
        <div>
          Likes: { this.determineLikes() }
          <button onClick={ this.handleLike } >Like</button>
        </div>
        <p className='content'>{ post.content }</p>
        <div className='comments'>
          <textarea value={ this.state.comment } onChange={ this.handleChange } />
          <button onClick={ this.handleButtonClick }  >Submit</button>
          <h3>Comments:</h3>
          { 
            this.commentsForPost( post.id ).map( ( comment, index ) => (
              <div key={ index }>
                <span>by user { comment.user_id }:</span>
                <p  key={ index } className='single-comment'>
                  { comment.content }
                </p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUserId: selectCurrentUserId( state ),
  comments: selectComments( state ),
  commentsByCurrentUser: selectCommentsByCurrentUser( state ),
  likesByCurrentUser: selectLikesByCurrentUser( state )
});

const mapDispatchToProps = (dispatch) => ({
  addNewComment: ( payload ) => dispatch( addNewComment( payload )),
  likePost: ( payload ) => dispatch( likePost( payload ))
})

export default connect( mapStateToProps, mapDispatchToProps )( SinglePost );

// export default SinglePost;
