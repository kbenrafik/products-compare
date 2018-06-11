import { Products } from './Product';

const ProductsCompareApi = {
  getProductsAndFeatures: (productsId) => {
    const endPoint = `https://www.zamro.nl/actions/ViewProduct-ProductCompare?SKU=${productsId}`;
    return fetch(endPoint)
      .then(res => res.json())
      .then((result) => {
        const products = new Products(result.products, { hasBadgeConvert: true });
        return {
          features: products.getCompareFeatures(),
          products: products.getProducts(),
        };
      })
      .catch((error) => {
        return {
          error,
        };
      });
  },
};

export default ProductsCompareApi;
