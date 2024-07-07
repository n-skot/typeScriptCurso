(() => {
  let cualquier: any = 'Hello, World!';
  cualquier = 123;
  cualquier = true;
  cualquier = [];
  cualquier = {};

  cualquier = 'Hola, mundo!';

  const rta = (cualquier as string).toLowerCase();
  console.log(rta);

  const rta1 = (<string>cualquier).toLowerCase();
  console.log(rta1);
  const string: (string | number)[] = [];

})();
