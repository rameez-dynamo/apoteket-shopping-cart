import './CartPreview.css';
import React, { Component } from 'react';
import { Col, Row, Container } from 'react-grid-system';
import cart from '../cart.gif'
import LinkButton from './LinkButton'
import { connect } from 'react-redux'
import _ from 'lodash'

class CartPreview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      windowIsMobile: false,
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentDidMount() {
    this.handleWindowSizeChange()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ windowIsMobile: window.innerWidth < 580 });
  }

  componentWillReceiveProps(nextProps) {
    console.log('CartPreview receiving new props', nextProps)
  }

  render() {
    const { windowIsMobile } = this.state;

    const items = _.sumBy(this.props.cart, (item) => {
      return item.Quantity;
    })

    const cartMessage = this.props.cart.length == 0 ? "Cart is empty" : `${items} items.`
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

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(mapStateToProps, {})(CartPreview)
