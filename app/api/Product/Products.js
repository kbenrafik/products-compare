import _ from 'lodash';
import Product from './Product';

class Products {
  constructor(products, options) {
    this.products = products;

    if (options && options.hasBadgeConvert) {
      const optionForProduct = {
        hasBadgeConvert: true,
      };

      this.products = (products || []).map((product) => {
        const newProduct = new Product(product, optionForProduct);

        return newProduct.getProduct();
      });
    }
  }

  getProducts() {
    return this.products;
  }

  /**
   * Get features
   * @param productList {Array}
   * @returns {Array}
   */
  getCompareFeatures() {
    let features = [];
    const { products } = this;
    (products || []).map((item) => {
      const product = item;
      features = [...features, ...Object.keys(product)];
      return features;
    });
    //  if features have length
    features = [...new Set(features)];
    features = this.excludeFeatures(features);
    features = this.sortFeaturesAlph(features);

    return (features || []).map((key) => {
      const isDifferent = !(_.every(products, [key, products[0][key]]));

      return {
        isDifferent,
        key,
      };
    });
  }

  /**
   * Exclude features
   * @param features {Array}
   * @returns {Array}
   */
  excludeFeatures(features) {
    const featuresToExclude = [
      'salePrice',
      'manufacturerName',
      'grossPrice',
      'BUP_UOM',
      'BUP_Value',
      'uom',
      'productImage',
      'BUP_Conversion',
      'minQuantity',
      'manufacturerImage',
      'name',
      'sku',
      'listPrice',
      'channel',
      'display',
      'atp',
    ];

    return _.pullAll(features, featuresToExclude);
  }

  /**
   * sort features alphabetical
   * @param featureList {Array}
   * @returns {Array}
   */
  sortFeaturesAlph(featureList) {
    let features = featureList;
    if (features && features.length) {
      const badgesLabel = 'badges';

      features = features
        .filter(featureKey => featureKey !== badgesLabel)
        .sort((featureKey1, featureKey2) => featureKey1.toLowerCase() > featureKey2.toLowerCase());

      features.unshift(badgesLabel);
    }

    return features;
  }
}

export default Products;
