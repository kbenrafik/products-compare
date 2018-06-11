import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ProductsCompareApi } from '../../api';

import CompareProduct from './CompareProduct';
import CompareLoader from './CompareLoader';
import ProductNameInput from './ProductNameInput';

import './style/compareProducts.scss';

class CompareProducts extends Component {
  componentDidMount() {
    ProductsCompareApi.getProductsAndFeatures(this.getProdutsSku())
      .then((data) => {
        const { products, features } = data;
        this.products = products;
        this.setState({
          products,
          features,
        });
      });
  }

  /**
   * Get Products SKU
   * @returns {CompareProducts.props.productsSku}
   */
  getProdutsSku() {
    const { productsSku } = this.props;
    return productsSku;
  }

  /**
   * Toggle Product (show/hide)
   * @param sku
   */
  toggleProduct(sku) {
    if (!sku) {
      return;
    }

    let { products } = this.state;
    products = (products || []).map((currentProduct) => {
      const product = currentProduct;
      if (product.sku === sku) {
        product.isHidden = !product.isHidden;
      }
      return product;
    });
    this.setState({
      products,
    });
  }

  /**
   * Has products to compare
   * @returns {boolean}
   */
  hasProducts() {
    return this.state && this.state.products && this.state.features;
  }

  /**
   * hasn't products to compare
   * @returns {boolean}
   */
  hasNoProducts() {
    return this.state && !this.state.products && !this.state.features;
  }

  /**
   * Render Products names as input checkbox
   * @returns {Array}
   */
  renderProductNames() {
    const { products } = this;
    return (products || []).map((product) => {
      const { sku, name } = product;
      return (
        <ProductNameInput
          sku={sku}
          name={name}
          toggle={() => { this.toggleProduct(sku); }}
          key={`product-name${sku}`}
        />
      );
    });
  }

  /**
   * Render Products
   * @param products
   * @param features
   * @returns {Array}
   */
  renderProducts(products, features) {
    return (products || []).map((product) => {
      const { sku, isHidden } = product;
      return (
        <CompareProduct
          product={product}
          features={features}
          key={`product-${sku}`}
          isHidden={isHidden}
        />
      );
    });
  }

  /**
   * Render list of features
   * @returns {Array}
   */
  renderFeatures() {
    const { features } = this.state;

    return (features || []).map((feature) => {
      const { isDifferent, key } = feature;
      const featureClasses = classNames(
        'compare__product-feature',
        {
          'compare__product-feature--different': isDifferent,
        },
      );
      return (
        <div className={featureClasses} key={key}>
          {key}
        </div>
      );
    });
  }

  /**
   * Render number of products to compare
   * @returns {Number}
   */
  renderNumberOfProduct() {
    return (this.getProdutsSku() || '').split(',').length;
  }

  render() {
    if (this.hasProducts()) {
      const { products, features } = this.state;
      return (
        <div className="compare">
          <h2 className="compare__title">You have selected {this.renderNumberOfProduct()} product(s)</h2>
          <div className="compare__container">
            <div className="compare__left">
              <div className="compare__product-names">
                <h4 className="compare__name-title">Your selection</h4>
                {this.renderProductNames()}
              </div>

              <div className="compare__features">
                {this.renderFeatures()}
              </div>
            </div>

            <div className="compare__product-container">
              {this.renderProducts(products, features)}
            </div>
          </div>
        </div>
      );
    } else if (this.hasNoProducts()) {
      return (
        <div className="compare compare__not-found">
          <h2 className="compare__title">No product found</h2>
        </div>
      );
    }

    return (
      <CompareLoader />
    );
  }
}

CompareProducts.propTypes = {
  productsSku: PropTypes.string.isRequired,
};

export default CompareProducts;
