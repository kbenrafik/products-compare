import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Product from '../Product';

import './style/compareProduct.scss';

class CompareProduct extends Component {
  /**
   * Render Badges as images
   * @param badges {Array}
   * @returns {Array}
   */
  renderBadges(badges) {
    return (badges || []).map((badge) => {
      return (
        <img
          className="compare__product-badge"
          src={badge}
          alt=""
          key={badge}
        />
      );
    });
  }

  renderFeatures() {
    const { product, features } = this.props;
    if (!product && !features) {
      return;
    }
    return (features || []).map((feature) => {
      const featureValueClasses = classNames(
        'compare__product-feature',
        {
          'compare__product-feature--different': feature.isDifferent,
        },
      );

      if (feature.key === 'badges') {
        return (
          <div className={featureValueClasses} key={feature.key}>
            {this.renderBadges(product[feature.key])}
          </div>
        );
      }

      return (
        <div className={featureValueClasses} key={feature.key}>
          {product[feature.key]}
        </div>
      );
    });
  }

  render() {
    const { isHidden, product } = this.props;
    const producteClasses = classNames(
      'compare__product',
      {
        'compare__product--hidden': isHidden,
      },
    );
    return (
      <div className={producteClasses}>

        <Product product={product} />

        <div className="compare__features">
          {this.renderFeatures()}
        </div>
      </div>
    );
  }
}

CompareProduct.defaultProps = {
  isHidden: false,
};

CompareProduct.propTypes = {
  product: PropTypes.shape({}).isRequired,
  features: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isHidden: PropTypes.bool,
};

export default CompareProduct;
