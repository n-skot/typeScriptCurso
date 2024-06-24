(() => {
  let isTrue: boolean = true;
  let isEnable = true;
  console.log(isTrue);
  isEnable = false;

  const random =  Math.random();
  console.log('match.random: ', random);

  let isNew = random > 0.5 ? true : false;
  console.log(isNew);
})();
