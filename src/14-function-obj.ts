(() => {
  const login = (data: { email: string, password: string }): void => {
    console.log(data.email, data.password);

  };

  //login('john.doe@example.com', 'P@ssw0rd');
  login({ email: 'john.doe@example.com', password: 'P@ssw0rd', });

  type Size = 'S' | 'M' | 'L';

  const productArray: any[] = [];

  const addProduct = (product: { name: string, price: number, stock: number, size?: Size }): void => {
    productArray.push(product);
  };

  addProduct({ name: 'Shirt', price: 19.99, stock: 100 });
  addProduct({ name: 'Shirt', price: 19.99, stock: 100, size: 'M' });
  console.log(productArray);

})();
