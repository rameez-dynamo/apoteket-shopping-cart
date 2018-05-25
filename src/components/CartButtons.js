import './CartButtons.css';
import React, { Component } from 'react';
// import { Col, Row, Container } from 'react-grid-system';
import { Col, Row, Grid, Button } from 'react-bootstrap';

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
       <Grid className="Container">
        <Row>
          <Col>
            <Button
              className={buttonStyle}
              onClick={this.props.onDecrement}>{'-'}</Button>
          </Col>
          <Col md={2}>
            <span className="ItemCount">{this.state.itemCount}</span>
          </Col>
          <Col >
            <Button
              className={buttonStyle}
              onClick={this.props.onIncrement}>{'+'}</Button>
          </Col>
        </Row>
       </Grid>
     )
  }
}
