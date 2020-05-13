import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BeerButton from './BeerButton.js';
import CartView from './CartView.js';
import { Link } from 'react-router-dom'

const propTypes = {
  BeerClickHandler: PropTypes.func,
  toggleClickHandler: PropTypes.func,
  sort: PropTypes.string,
};

class HeaderButtons extends Component {
  constructor(props) {
    super();
}

  render() {
    return (
      <header>
        <div className = "button-container">
        <Link to="/"><BeerButton
         /></Link>
         <Link to="/cart"><CartView
         /></Link>
          </div>
      </header>
    );
  }
}

HeaderButtons.propTypes = propTypes;

export default HeaderButtons;