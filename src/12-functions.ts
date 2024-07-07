(() => {
  type Size = 'S' | 'M' | 'L';
  function createProduct(name: string, price: number, createAt: Date, stock: number, size: Size) {
    return {
      name,
      price,
      createAt,
      stock,
      size,
    };
  }

  const createProduct1 = (name: string, price: number, createAt: Date, stock: number, size?: Size) => {
    return {
      name,
      price,
      createAt,
      stock,
      size,
    };
  }

  const product = createProduct('Shirt', 19.99, new Date(), 100, 'M');
  console.log(product);
  console.log(product.size);

  const product1 = createProduct1('Shirt', 19.99, new Date(), 100);
  console.log(product1.size);

})();
