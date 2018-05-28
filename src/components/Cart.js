import React, { Component } from 'react';
import './Cart.css';
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import CartItem from './CartItem'
import { clearCart } from '../actions'
import { Button } from 'react-bootstrap'

class Cart extends Component {

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
  };

  render() {
    const { cart } = this.props;
    const { windowIsMobile } = this.state;
    const cartIsEmpty = (!cart || cart.length == 0)
    return (
      <div className={`CartContainer${ windowIsMobile ? "Mobile" : "" }`}>
        <ul>
          <li><h2>Cart</h2></li>
          {
            cartIsEmpty && <li>
              <div className="EmptyCart">
                <p>Cart is empty</p>
              </div>
            </li>
          }
          {
            cart.map((cartItem) => {
              return <li
                style={{
                  marginLeft: windowIsMobile ? 25 : 0
                }}
              >
                <CartItem
                  isMobile={this.state.windowIsMobile}
                  product={cartItem}
                  key={cartItem.Id}
                />
              </li>
            })
          }
          { !cartIsEmpty && <li
              style={{
                marginLeft: windowIsMobile ? 25 : 0
              }}
            >
            <CartItem isMobile={this.state.windowIsMobile} total={{
              value: _.sumBy(cart, (obj) => {
                return obj.Price * obj.Quantity;
              })
            }} />
          </li> }
          <li>
            <Button
              style={{
                marginRight: windowIsMobile ? 25 : 0
              }}
              bsStyle="danger"
              className="ClearCart"
              onClick={this.props.clearCart}
              disabled={this.props.deleteCartInProgress || cartIsEmpty}
              >{'Clear Cart'}
              </Button>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  deleteCartInProgress: state.deleteCartInProgress
})

const mapDispatchToProps = (dispatch) => {
  return ({
    clearCart: () => dispatch(clearCart())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
