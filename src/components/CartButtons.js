import './CartButtons.css';
import React, { Component } from 'react';
import { Col, Row, Grid, Button } from 'react-bootstrap';

export default class CartButtons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0,
      isMobile: false,
      disabled: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    // console.log('cartbuttons receiving new props', nextProps)
    this.setState({
      itemCount: nextProps.itemCount,
      isMobile: nextProps.isMobile,
      disabled: nextProps.disabled,
    })
  }

  render() {
    const buttonStyle = this.state.isMobile ? "ButtonMobile" : "Button";
     return (
       <Grid className="Container">
        <Row>
          <Col xs={4} sm={4} md={4}>
            <span className="ItemCount">{this.state.itemCount}</span>
          </Col>
          <Col >
            <Button
              bsStyle="secondary"
              className={buttonStyle}
              onClick={this.props.onIncrement}
              disabled={this.props.disabled}
              >{'Add'}</Button>
          </Col>
        </Row>
       </Grid>
     )
  }
}
