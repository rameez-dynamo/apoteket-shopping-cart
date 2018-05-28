import './CartItem.css';
import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-bootstrap';

const CartItem = (props) => {
  const { product, isMobile, total } = props;
  return (
    <Grid className="CartItemContainer">
      <Row className={`CartItemRow${ isMobile ? "Mobile" : "" }`}>
        <Col xs={1} sm={1} md={1}>
          { !total && <img src={product.Pic} className="CartItemPic" /> }
        </Col>
        <Col xs={3} sm={5} md={5}>
          { !total && <p className="CartItemProductName">{product.Name}</p> }
        </Col>
        <Col xs={2} sm={3} md={3}>
          <p>{total ? "Total" : `Qty: ${product.Quantity}`}</p>
        </Col>
        <Col xs={2} sm={3} md={3}>
          <p className="CartItemPrice">{`SEK ${total ? (total.value).toFixed(2) : product.Price * product.Quantity}`}</p>
        </Col>
      </Row>
    </Grid>
  )
}

export default CartItem;
