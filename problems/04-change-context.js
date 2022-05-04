//should return result of the function func when invoked with the object obj.
//"As it's context."

function changeContext(func, obj) {
  // return func.call(obj)
  // return func.apply(obj)
  let aFunc = func.bind(obj)
  return aFunc()
}
//change context of function.
//function should return the result of the function invoked w/ object as tit's context.
//Bind returns a function
//Call and apply immediately invoked.
//This is my example!! Delete me when done!!!

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// function extractName() {
//   return this.name;
// }

// const kristen = new Person('Kristen');
// console.log(changeContext(extractName, kristen)); // => Kristen


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
