import './Header.css';
import React, { Component } from 'react';
import CartPreview from './CartPreview'
import { Col, Row, Container } from 'react-grid-system';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <Container>
          <Row>
            <Col><h1 className="App-title">Apoteket</h1></Col>
            <Col><CartPreview /></Col>
          </Row>
        </Container>
      </header>
    )
  }
}

export default Header
