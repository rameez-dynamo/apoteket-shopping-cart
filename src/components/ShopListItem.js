import React, { Component } from 'react';
import './ShopListItem.css';
import CartButtons from './CartButtons';
import { Col, Row, Container } from 'react-grid-system';
import { connect } from 'react-redux'
import { addItemToCart } from '../actions'
import _ from 'lodash';

class ShopListItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      windowIsMobile: false,
      itemCount: 0,
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  componentDidMount() {
    this.handleWindowSizeChange()
    this.resolveItemCount(this.props)
  }

  handleWindowSizeChange = () => {
    this.setState({ windowIsMobile: window.innerWidth < 580 });
  }

  componentWillReceiveProps(nextProps) {
    this.resolveItemCount(nextProps)
  }

  resolveItemCount = (myProps) => {
    const { cart } = myProps;
    const items = _.filter(cart, (item) => {
      return item.Id == this.props.product.Id;
    })
    this.setState({
      itemCount: items.length > 0 ? items[0].Quantity : 0
    })
  }

  render() {
    const { onBuyPressed, product } = this.props;
    const { Name, Description, Pic, Price, Buyable, Id } = product;
    const thumbNailStyle = this.state.windowIsMobile ? 'ShopListItemThumbnailMobile' : 'ShopListItemThumbnail'
    return (
      <Container className="ShopListItem">
        <Row>
          <Col xs={2} sm={2} md={2.5} lg={2} xl={2} className="ThumbnailContainer">
            <img className={thumbNailStyle} src={Pic} />
          </Col>
          <Col className="MidSection" xs={7} sm={6}>
            <h3 className="ShopListItemTitle">{Name}</h3>
            <p className="ShopListItemDescription">{Description}</p>
            <p className="ShopListItemPrice">{`SEK ${Price}:-`}</p>
          </Col>
          <Col xs={2} sm={3} md={2.5} lg={2} xl={2} className="CartButtonsContainer">
            <CartButtons
              isMobile={this.state.windowIsMobile}
              itemCount={this.state.itemCount}
              disabled={this.props.addItemToCartInProgress}
              onIncrement={() => {
                this.props.addItemToCart({
                  ...product,
                  Quantity: 1,
                })
              }}
              onDecrement={() => {
                var count = this.state.itemCount-1;
                this.setState({
                  itemCount: (count >= 0) ? count : 0
                })
              }}
            />
          </Col>

        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  addItemToCartInProgress: state.addItemToCartInProgress,
  cart: state.cart
})

const mapDispatchToProps = (dispatch) => {
  return ({
    addItemToCart: (cartItem) => dispatch(addItemToCart(cartItem))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopListItem)
