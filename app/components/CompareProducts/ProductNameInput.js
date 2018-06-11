import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductNameInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
    };
  }
  toggle() {
    const { sku, toggle } = this.props;
    const { isChecked } = this.state;
    this.setState({
      isChecked: !isChecked,
    });
    toggle(sku);
  }
  render() {
    const { sku, name } = this.props;
    const { isChecked } = this.state;
    return (
      <div className="compare__product-name">
        <input
          type="checkbox"
          name="product-name"
          value={sku}
          checked={isChecked}
          onChange={() => { this.toggle(); }}
        />
        {name}
      </div>
    );
  }
}

ProductNameInput.propTypes = {
  sku: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default ProductNameInput;
