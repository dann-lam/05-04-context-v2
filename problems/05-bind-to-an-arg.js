function bindToAnArg(func, arg) {
                          //2
  return func.bind(func, arg)
//Should return passed in function, modified to always be invoked with the passed in argument.
}

//EXAMPLES DELETE ME!!!

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
