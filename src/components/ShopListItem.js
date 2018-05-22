import React, { Component } from 'react';
import './ShopListItem.css'
import { Col, Row, Container } from 'react-grid-system'

export default class ShopListItem extends Component {
  render() {
    const { onBuyPressed, product } = this.props;
    const { Name, Description, Pic, Price, Buyable } = product;
    return (
      <Container className="ShopListItem">
        <Row>
          <Col sm={1} md={1}>
            <img className="ShopListItemThumbnail" src={Pic} />
          </Col>
          <Col sm={6}>
            <h3 className="ShopListItemTitle">{Name}</h3>
            <p className="ShopListItemDescription">{Description}</p>
            <p className="ShopListItemPrice">{`SEK ${Price}:-`}</p>
          </Col>

        </Row>
      </Container>
    )
  }
}
