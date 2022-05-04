function callOnTarget(func, obj1, obj2) {
  //return the result of func invoked with obj1 as context
  //Obj2 as first argument
  //greet(other)
  // let newFunc = func.call(obj1)
  // return newFunc(obj2)
        //func.bind(obj1) (obj2)
  // return ((func.bind(obj1))(obj2))
  return (func.call(obj1, obj2))
}

const cat = {
  name: "Breakfast"
};

const mouse = {
  name: "Jerry"
};

function greet(other) {
  return "I'm " + this.name + ". Nice to meet you, " + other.name;
}

console.log(callOnTarget(greet, cat, mouse));
// "I'm Breakfast. Nice to meet you, Jerry"

console.log(callOnTarget(greet, mouse, cat));
// "I'm Jerry. Nice to meet you, Breakfast"

const dog = {
  name: "Noodles",
  chase: function(animal) {
    return "Woof, my name is " + this.name + " and I'm chasing " + animal.name;
  }
};

console.log(callOnTarget(dog.chase, cat, dog));
// "Woof, my name is Breakfast and I'm chasing Noodles"
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;
