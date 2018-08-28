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
import ListGroup from 'react-bootstrap/lib/ListGroup';

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

function CustomComponent({ children, header }) {
  return (
    <li className="list-group-item" onClick={() => {}}>
      <div>Внутренности { children }</div>
      <div>Хэдер { header }</div>
    </li>
  );
}

const ActionList = () => (
<div className="formblock">
  <ListGroup componentClass="ul">
    <CustomComponent header="Тест хэдера">Custom Child 1</CustomComponent>
    <CustomComponent header="Тест хэдера">Custom Child 2</CustomComponent>
    <CustomComponent header="Тест хэдера">Custom Child 3</CustomComponent>
  </ListGroup>
</div>
);

export default compose()(ActionList);
