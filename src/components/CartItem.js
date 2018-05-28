import './CartItem.css';
import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-bootstrap';

const CartItem = (props) => {
  const { product, isMobile, total } = props;
  const styles = getStyles()
  return (
    <Grid style={styles.container}>
      <Row style={styles.row}>
        <Col style={styles.picContainer}>
          { !total && <img src={product.Pic} className="CartItemPic" /> }
        </Col>
        <Col style={styles.productName}>
          { !total && <p className="CartItemProductName">{product.Name}</p> }
        </Col>
        <Col style={styles.quantity}>
          <p>{total ? "Total" : `Qty: ${product.Quantity}`}</p>
        </Col>
        <Col style={styles.price}>
          <p className="CartItemPrice">{`SEK ${total ? (total.value).toFixed(2) : product.Price * product.Quantity}`}</p>
        </Col>
      </Row>
    </Grid>
  )
}

const getStyles = (function() {
  const isMobile = window.innerWidth < 580;
  return ({
    container: {
      fontSize: isMobile ? 12 : 18,
    },
    row: {
      width: isMobile ? "100%" : 500,
    },
    picContainer: {
      // backgroundColor: 'blue',
      flex: 0.25,
      borderWidth: 2,
      borderColor: 'grey'
    },
    productName: {
      // backgroundColor: 'red',
      flex: 3,
      paddingLeft: 10,
    },
    quantity: {
      // backgroundColor: 'yellow',
      flex: 0.5,
      textAlign: 'right',
      color: 'grey'
    },
    price: {
      // backgroundColor: 'salmon',
      float: 'right',
      flex: 0.75
    }
  })
})

export default CartItem;
