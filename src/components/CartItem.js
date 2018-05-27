import './CartItem.css';
import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-bootstrap';

const CartItem = (props) => {
  const { product } = props;
  return (
    <Grid>
      <Row>
        <Col>
          <p>{product.Name}</p>
        </Col>
        <Col>
          <p>{`Qty: ${product.Quantity}`}</p>
        </Col>
        <Col>
          <p>{`SEK ${product.Price * product.Quantity}`}</p>
        </Col>
      </Row>
    </Grid>
  )
}

export default CartItem;
