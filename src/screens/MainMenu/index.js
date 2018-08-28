import React from 'react';
import PropTypes from 'prop-types';
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
import ActionButton from 'components/ActionButton'

class LoginButton extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("click!");
  }

  render() {
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
    <FormGroup>
      <Col sm={12}>
        <ActionButton target="/action" text="тест"/>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col sm={12}>
        <LoginButton text="Ready for action"/>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col sm={12}>
        <LoginButton text="Look previous actions"/>
      </Col>
    </FormGroup>
  </Form>
</div>
);

export default compose()(LoginScreen);
