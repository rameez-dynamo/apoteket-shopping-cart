import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShopListItem from './components/ShopListItem'
import Header from './components/Header'
import { connect } from 'react-redux'
import { loadProducts } from './actions'
import Loader from 'react-loader-spinner'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      windowIsMobile: false,
      products: null,
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('Component will receive props', nextProps)
    if (nextProps.hasOwnProperty('products') && nextProps.products) {
      this.setState({
        products: nextProps.products,
      })
    }
  }

  componentWillMount() {
    this.props.loadProducts();
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ windowIsMobile: window.innerWidth < 500 });
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
    const contentContainerStyle = this.state.windowIsMobile ? "ContentContainerMobile" : "ContentContainer";
    return (
      <div className="App">
        <Header />
        <div className={contentContainerStyle}>
          { products ? this.renderProductList() : this.renderLoader() }
          <div className="Footer" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadProducts: () => dispatch(loadProducts())
  };
};

const mapStateToProps = state => ({
  products: state ? state.products : []
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
