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

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ windowIsMobile: window.innerWidth < 500 });
  };

  render() {
    const { cart } = this.props;
    const { windowIsMobile } = this.state;
    const cartIsEmpty = (!cart || cart.length == 0)
    return (
      <div className={`CartContainer${ windowIsMobile ? "Mobile" : "" }`}>
        <ul>
          {
            cartIsEmpty && <li>
              <div className="EmptyCart">
                <p>Cart is empty</p>
              </div>
            </li>
          }
          {
            cart.map((cartItem) => {
              return <CartItem isMobile={this.state.windowIsMobile} product={cartItem} key={cartItem.Id}/>
            })
          }
          <li>
            <Button
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
