import { Product } from './16-product.model';

const products: Product[] = [];

const addProduct = (product: Product): void => {
  products.push(product);
};

/*const calcStockValue = (product: Product): number => {
  return products.price * products.stock;
};*/

const calcStock = (): number => {
  return products.reduce((acc, product) => acc + product.stock, 0);
};

export { addProduct, calcStock, products };
