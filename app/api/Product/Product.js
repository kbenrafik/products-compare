class Product {
  constructor(product, options) {
    this.product = product;

    if (options && options.hasBadgeConvert) {
      this.convertBadgeFeature(product);
    }
  }

  getProduct() {
    return this.product;
  }

  convertBadgeFeature() {
    this.product.badges = this.product.badges.split('|');
  }
}

export default Product;
