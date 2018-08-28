import React from 'react';
import PropTypes from 'prop-types';
import { compose, lifecycle } from 'recompose';
import { Link } from 'react-router-dom';
import apiHOCs from 'components/apiHOCs';
import ActionButton from 'components/ActionButton'

import 'assets/screens.scss';
import './style.scss';

function Halp() {
  return <p>Hello</p>
}

const HomeScreen = ({ redditPosts }) => (
  <div>
    <Halp/>
    <Link to="/login">Log in</Link>
    {console.log(redditPosts)}
    {
      /*redditPosts.map(post =>
        <div key={post.get('id')} style={{ marginTop: 50 }}>
          {post.get('title')}
        </div>
      ).toArray()*/
    }
  </div>
);

HomeScreen.propTypes = {
  redditPosts: PropTypes.any,
};

export default compose(
  apiHOCs.RedditApiHOC(),

  lifecycle({
    componentDidMount() {
      this.props.getReddit({ redditName: 'reactjs' });
    }
  })
)(HomeScreen);
