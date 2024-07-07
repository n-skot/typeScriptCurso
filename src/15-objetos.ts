(() => {
  type Size = 'S' | 'M' | 'L';
  type Product = { name: string, price: number, stock: number, size?: Size };

  const productArray: Product[] = [];

  const addProduct = (product: Product): void => {
    productArray.push(product);
  };

  addProduct({ name: 'Shirt', price: 19.99, stock: 100 });
  addProduct({ name: 'Shirt', price: 19.99, stock: 100, size: 'M' });
  console.log(productArray);
  productArray.push({ name: 'Shirt', price: 19.99, stock: 1})

})();
