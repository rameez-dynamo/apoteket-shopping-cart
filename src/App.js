import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { Switch, Route } from 'react-router-dom'

class App extends Component {

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
    this.setState({ windowIsMobile: window.innerWidth < 580 });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={ProductList}/>
          <Route path='/cart' component={Cart}/>
        </Switch>
      </div>
    );
  }
}

export default App;
