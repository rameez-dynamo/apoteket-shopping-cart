import './CartButtons.css';
import React, { Component } from 'react';
import { Col, Row, Container } from 'react-grid-system';

export default class CartButtons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      itemCount: nextProps.itemCount,
      isMobile: nextProps.isMobile,
    })
  }

  render() {
    const buttonStyle = this.state.isMobile ? "ButtonMobile" : "Button";
     return (
       <Container className="Container">
        <Row>
          <Col >
            <button
              className={buttonStyle}
              onClick={this.props.onDecrement}>{'-'}</button>
          </Col>
          <Col >
            <div>
              <span className="ItemCount">{this.state.itemCount}</span>
            </div>
          </Col>
          <Col >
            <button
              className={buttonStyle}
              onClick={this.props.onIncrement}>{'+'}</button>
          </Col>
        </Row>
       </Container>
     )
  }
}
