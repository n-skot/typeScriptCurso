(() => {
  let myNumber: number | null = null;
  let myString: string | undefined = undefined;

  function printType(value: string | null) {
    let hello = 'hola';
    if (value) {
      hello += value.toLowerCase();
    } else  {
      hello = 'World!';
    }
    console.log(hello);
  }

  function printType2(value: string | null) {
    let hello = 'hola';
      hello += value?.toLowerCase() || 'World!';
    console.log(hello);
  }
  printType('Richard');
  printType(null);
})();
