(() => {
  let dinamic: string | number;
  dinamic = 1;
  dinamic = 'hola';

  function saludar(saludo: string | number) {
    if (typeof saludo === 'string') {
      console.log(`Hola, ${saludo.toLowerCase()}!`);
    } else {
      console.log(`Number, ${saludo.toFixed(1)}!`);
    }
  }

  saludar('Hola');
  saludar(12.989898);
})();
