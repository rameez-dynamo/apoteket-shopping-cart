import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShopListItem from './components/ShopListItem'
import { connect } from 'react-redux'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      windowIsMobile: false,
      products: null,
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

  getProductList = () => {
    return ([
    {
        "Id": 1,
        "Name": "Postafen®",
        "Description": "Tablett 25 mg 10 styck Blister",
        "Pic": "https://www.apoteket.se/produktbilder/Validoo/165787s.jpg",
        "Price": 63.2,
        "Buyable": true
    },
    {
        "Id": 2,
        "Name": "Novalucol®",
        "Description": "Tuggtablett 100 styck Blister",
        "Pic": "https://www.apoteket.se/produktbilder/Validoo/478248s.jpg",
        "Price": 82,
        "Buyable": true
    },
    {
        "Id": 3,
        "Name": "Scholl Velvet Smooth Slipytor",
        "Description": "Slipytor till Elektrisk fotfil 2 st",
        "Pic": "https://www.apoteket.se/produktbilder/custom/211748s.jpg",
        "Price": 119.2,
        "Buyable": true
    },
    {
        "Id": 4,
        "Name": "Apoteket Senap Original",
        "Description": "",
        "Pic": "https://www.apoteket.se/produktbilder/custom/331413s.jpg",
        "Price": 69,
        "Buyable": true
    },
    {
        "Id": 5,
        "Name": "Nasonex®",
        "Description": "Nässpray, suspension 50 mikrogram/dos 140 dos(er) Flaska",
        "Pic": "https://www.apoteket.se/produktbilder/Validoo/023195s.jpg",
        "Price": 183.2,
        "Buyable": true
    },
    {
        "Id": 6,
        "Name": "Scholl VS nagelvårdskit refill",
        "Description": "",
        "Pic": "https://www.apoteket.se/produktbilder/custom/687228s.jpg",
        "Price": 87.2,
        "Buyable": true
    },
    {
        "Id": 7,
        "Name": "Invisibobble Original Crystal Clear",
        "Description": "Extra skonsam för håret 1 st",
        "Pic": "https://www.apoteket.se/produktbilder/custom/212650s.jpg",
        "Price": 59,
        "Buyable": true
    },
    {
        "Id": 8,
        "Name": "Invisibobble You´re Golden",
        "Description": "Extra skonsam för håret 1 st",
        "Pic": "https://www.apoteket.se/produktbilder/custom/212665s.jpg",
        "Price": 59,
        "Buyable": false
    },
    {
        "Id": 9,
        "Name": "Apoteket Vätskeersättning",
        "Description": "Svartvinbär 20 st",
        "Pic": "https://www.apoteket.se/produktbilder/custom/212000s.jpg",
        "Price": 39.2,
        "Buyable": true
    },
    {
        "Id": 10,
        "Name": "Apoteket Mjölksyrabak C+Selen",
        "Description": "Kapslar 60 kapsl",
        "Pic": "",
        "Price": 148,
        "Buyable": true
    },
    {
        "Id": 11,
        "Name": "Ibuprofen Orifarm",
        "Description": "Filmdragerad tablett 400 mg 30 styck Blister",
        "Pic": "https://www.apoteket.se/produktbilder/custom/061379s.jpg",
        "Price": 15,
        "Buyable": true
    },
    {
        "Id": 12,
        "Name": "Nexcare Postpartum Support",
        "Description": "Medium 1 st",
        "Pic": "https://www.apoteket.se/produktbilder/Validoo/210912s.jpg",
        "Price": 379,
        "Buyable": false
    },
    {
        "Id": 13,
        "Name": "Nurofen Apelsin",
        "Description": "Oral suspension 40 mg/ml 100 milliliter Flaska",
        "Pic": "https://www.apoteket.se/produktbilder/custom/598925s.jpg",
        "Price": 59.5,
        "Buyable": true
    },
    {
        "Id": 14,
        "Name": "Mabs armbågsbandage universal",
        "Description": "Kompression, stöd, avlastning 1 st",
        "Pic": "https://www.apoteket.se/produktbilder/Validoo/689050s.jpg",
        "Price": 249,
        "Buyable": true
    },
    {
        "Id": 15,
        "Name": "Apoteket Saffran",
        "Description": "",
        "Pic": "https://www.apoteket.se/produktbilder/custom/823667s.jpg",
        "Price": 35,
        "Buyable": true
    },
    {
        "Id": 16,
        "Name": "",
        "Description": "",
        "Pic": "",
        "Price": 0,
        "Buyable": true
    },
    {
        "Id": 17,
        "Name": "Apoliva Cremetvål",
        "Description": "Lätt parfymerad 250 ml",
        "Pic": "https://www.apoteket.se/produktbilder/custom/207679s.png",
        "Price": 10,
        "Buyable": false
    }
])
  }

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

  render() {
    const products = this.getProductList()
    const contentContainerStyle = this.state.windowIsMobile ? "ContentContainerMobile" : "ContentContainer";
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Apoteket</h1>
        </header>
        <div className={contentContainerStyle}>
          <ul>
            { products.map(this.renderListItem)}
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

const mapStateToProps = state => {
  products: state.products
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
