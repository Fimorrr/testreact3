import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { compose, lifecycle } from 'recompose';

import 'assets/screens.scss';
import './style.scss';

import FormControl from 'react-bootstrap/lib/FormControl';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';

class LoginButton extends React.Component {
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
      return <Redirect push to="/menu" />;
    }

    return (
      <Button
        onClick={this.handleClick}
      >{ this.props.text }</Button> 
    );
  }
}

const LoginScreen = () => (
<div className="formblock">
  <Form horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={3}>
      Email
    </Col>
    <Col sm={9}>
      <FormControl type="email" placeholder="Email" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={3}>
      Password
    </Col>
    <Col sm={9}>
      <FormControl type="password" placeholder="Password" />
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={3} sm={9}>
      <Checkbox>Remember me</Checkbox>
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={3} sm={9}>
      <LoginButton text="Sign in"/>
    </Col>
  </FormGroup>
  </Form>
</div>
);

export default compose()(LoginScreen);
