function allTheArgs(func, ...args) {

  return func.bind(func, ...args)
  //sums.bind(sums, (3 , 1 , 2)
  //Should return func modified to always be invoked with passed in args.
}


function sum(...nums) {
  return nums.reduce((acc, num) => acc + num);
}

const onePlusTwo = allTheArgs(sum, 1, 2);

const onePlusTwoPlusThree = onePlusTwo(3);


console.log(onePlusTwoPlusThree); // => 6


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
