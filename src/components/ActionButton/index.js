import React from 'react';
import { Redirect } from 'react-router';
import { compose, lifecycle } from 'recompose';

import Button from 'react-bootstrap/lib/Button';

class ActionButton extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);

    this.state = { redirect: false }; 
  }

  handleClick() {
    console.log("click!");
    this.setState({redirect: true});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={ this.props.target } />;
    }

    return (
      <Button
        onClick={this.handleClick}
      >{ this.props.text }</Button> 
    );
  }
}

export default compose()(ActionButton);