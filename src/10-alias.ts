(() => {
  //alias named type
  type Product = string | number;
  let product: Product = 'hola';

  function productType(product: Product) {
    if (typeof product ==='string') {
      console.log(`string ${product.toLowerCase()}`);
    }
  }

  //literal type
  type Color = 'red' | 'blue' | 'green';
  let color: Color = 'blue';

  // let color = 'yellow'; // error, 'yellow' is not in the Color type
  // let talla = 'S' | 'M' | 'L';

  function printColor(color: Color) {
    console.log(`Color: ${color}`);
  }

  printColor('red');

  //type inference
  let myNumber = 123;
  let myString = 'hola';

  let inferredType = myNumber + myString; // error, cannot concatenate a number and a string
  console.log(inferredType);
})();
