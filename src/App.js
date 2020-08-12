import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import PostsPage from './pages/posts/posts.component';
// import CommentsPage from './pages/comments/comments.component';

class App extends React.Component {
  
  
  componentDidMount() {
  }
  
  render() {
    return (
      <div className="App">
          <Switch>
            <Route path='/' component={ PostsPage } />
          </Switch>
      </div>
    );
  }
}

export default App;
