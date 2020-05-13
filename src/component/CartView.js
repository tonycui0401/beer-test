import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FancyButton from './FancyButton.js';

const propTypes = {
  text: PropTypes.string,
};

const defaultProps = {
  text: 'Cart',
};

class CartView extends Component {
  render() {
    return <FancyButton {...this.props} />;
  }
}

CartView.propTypes = propTypes;
CartView.defaultProps = defaultProps;

export default CartView;