import './CartPreview.css';
import React, { Component } from 'react';
import { Col, Row, Container } from 'react-grid-system';
import cart from '../cart.gif'
import LinkButton from './LinkButton'

class CartPreview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      windowIsMobile: false,
      cartItems: []
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
    const { cartItems, windowIsMobile } = this.state;
    const cartMessage = cartItems.length == 0 ? "Cart is empty" : `${cartItems.length} items.`
    const mobile = windowIsMobile ? 'Mobile' : '';
    return (
      <div>
        <Container className={`CartPreviewContainer${mobile}`}>
          <Row>
            <Col xs={3} md={3}>
              <img src={cart} className={`CartIcon${mobile}`} />
            </Col>
            <Col xs={8} md={7}>
              <p className={`CartMessage${mobile}`}><span>{cartMessage}</span></p>
            </Col>
          </Row>
          <Row>
            <LinkButton
              to={'/cart'}
              className={`GoToCart${mobile}`}
              bsSize={windowIsMobile ? "xsmall" : "small"}
            >
              Go to cart ->
            </LinkButton>
          </Row>
        </Container>
      </div>
    )
  }
}

export default CartPreview;
