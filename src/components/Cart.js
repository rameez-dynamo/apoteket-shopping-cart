import React, { Component } from 'react';
import './Cart.css';
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import CartItem from './CartItem'
import { clearCart } from '../actions'

class Cart extends Component {

  render() {
    const { cart } = this.props;
    return (
      <div className="CartContainer">
        <ul>
          {
            cart.map((cartItem) => {
              return <CartItem product={cartItem}/>
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = (dispatch) => {
  return ({
    clearCart: () => dispatch(clearCart())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
