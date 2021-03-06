import React, { Component } from 'react';
import './ProductList.css';
import ShopListItem from './ShopListItem'
import { connect } from 'react-redux'
import { loadProducts, getCart } from '../actions'
import Loader from 'react-loader-spinner'

class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      windowIsMobile: false,
      products: null,
    }
  }

  componentWillReceiveProps(nextProps) {
    // console.log('Component will receive props', nextProps)
    if (nextProps.hasOwnProperty('products') && nextProps.products) {
      this.setState({
        products: nextProps.products,
      })
    }
  }

  componentWillMount() {
    this.props.loadProducts();
    // this.props.getCart();
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

  renderListItem = (item) => {
    const { Name, Price, Buyable, Id } = item;
    if (!Name || !Price || !Buyable || !Id) return null;

    return (
      <li>
        <ShopListItem
          product={item}
          onBuyPressed={() => {
            console.log('Buy pressed');
          }}
         />
      </li>
    )
  }

  renderProductList() {
    const { products } = this.state;
    return (
      <ul>
        <li><h2>Product list</h2></li>
        { products.map(this.renderListItem) }
      </ul>
    )
  }

  renderLoader() {
    return (
      <div className="LoaderContainer">
        <Loader type="TailSpin" color="#somecolor" height={80} width={80} />
      </div>
    );
  }

  render() {
    const { products } = this.state;
    const contentContainerStyle = this.state.windowIsMobile ? "ProductListContainerMobile" : "ProductListContainer";
    return (
      <div className={contentContainerStyle}>
        { products ? this.renderProductList() : this.renderLoader() }
        <div className="Footer" />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadProducts: () => dispatch(loadProducts()),
    getCart: () => dispatch(getCart()),
  };
};

const mapStateToProps = state => ({
  products: state.products,
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
