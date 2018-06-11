import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './style/product.scss';
import deleteIcon from './img/icon--delete.svg';

class Product extends PureComponent {
  render() {
    const { product } = this.props;
    return (
      <div className="product">
        <button className="product__delete">
          <img
            src={deleteIcon}
            alt=""
          />
        </button>
        <a href="/" className="product__image-container">
          <img
            src={product.productImage}
            alt={product.name}
            className="product__image"
          />
        </a>
        <h3 className="product__name-container">
          <a href={`/product/${product.sku}`} className="product__name">
            {product.name}
          </a>
        </h3>
        <div className="product__price-container">
          <div className="product__price">
            {product.salePrice}
          </div>
          <span className="product__price-unit">
            per stuk / exl, btw
          </span>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({}).isRequired,
};

export default Product;
