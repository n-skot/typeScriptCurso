(() => {
  const calculo = (price: number[]): number => {
    let total = 0;
    for (let i = 0; i < price.length; i++) {
      total += price[i];
    }
    return total;
  }

  const printTotal = (price: number[]): void => {
    const rta = calculo(price);
    console.log(rta);

  }

  const respuesta = calculo([10, 20, 30, 40,]);
  const respuesta1 = printTotal([10, 20, 30, 40,]);
  console.log('calculo', respuesta);
  console.log('total', respuesta1);

})();
