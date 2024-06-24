(() => {
  let price = 123;
  price = 456;
  console.log('Produc price: ', price);

  let customAge: number = 25;
  //customAge = customAge + '25'; da errors, customAge must be a number
  customAge = customAge + 2; // no error

  let productInStock: number;
  if (productInStock === 10) {
    console.log('es mayor que 10');
  }

  let discount: number = parseInt('10');
  console.log(discount);

  let hex = 0xfff;
  console.log(hex);

  let bin = 0b1010;
  console.log(bin);

})();
