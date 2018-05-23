import React, { Component } from 'react';
import './ShopListItem.css'
import { Col, Row, Container } from 'react-grid-system'

export default class ShopListItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      windowIsMobile: false
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ windowIsMobile: window.innerWidth < 500 });
  };

  render() {
    const { onBuyPressed, product } = this.props;
    const { Name, Description, Pic, Price, Buyable } = product;
    const thumbNailStyle = this.state.windowIsMobile ? 'ShopListItemThumbnailMobile' : 'ShopListItemThumbnail'
    return (
      <Container className="ShopListItem">
        <Row>
          <Col xs={2.5} sm={2.5} md={2.5} lg={2} xl={2} className="ThumbnailContainer">
            <img className={thumbNailStyle} src={Pic} />
          </Col>
          <Col className="MidSection">
            <h3 className="ShopListItemTitle">{Name}</h3>
            <p className="ShopListItemDescription">{Description}</p>
            <p className="ShopListItemPrice">{`SEK ${Price}:-`}</p>
          </Col>

        </Row>
      </Container>
    )
  }
}
