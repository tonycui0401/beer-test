import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FancyButton from './FancyButton.js';

const propTypes = {
  text: PropTypes.string,
};

const defaultProps = {
  text: 'Beers',
};

class BeerButton extends Component {
  render() {
    return <FancyButton {...this.props} />;
  }
}

BeerButton.propTypes = propTypes;
BeerButton.defaultProps = defaultProps;

export default BeerButton;