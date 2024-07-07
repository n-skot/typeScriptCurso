(() => {
  let price = [1, 2, 3];
  let product = ['hola', true]

  let mixed: (string | number | object)[] = [];
  mixed.push('hola');
  mixed.push([]);
  mixed.push({});

  let prueba: Array<string> = ['a', 'b', 'c'];
})();
