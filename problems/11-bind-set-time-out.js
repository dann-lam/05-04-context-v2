function boundFuncTimer(obj, func, delay) {
  return setTimeout(() => func.call(obj), delay)
}

//boundFuncTimer invokes function w/ object as context after a delay
//So we should Delay, bind function to Object.

class Animal {
  constructor(age) {
    this.age = age;
  }

  growOlder() {
    this.age++;
    console.log(this.age);
  }
}

const dog = new Animal(1);
const cat = new Animal(5);
//dog pushes in an age.
//grow older increments age by one.
//delay tells us how long we have to setTimerOffset

boundFuncTimer(dog, dog.growOlder, 5000); // in 5 seconds prints: 2
boundFuncTimer(cat, dog.growOlder, 7000); // in 7 seconds prints: 6
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;
