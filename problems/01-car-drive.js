class Car { //Blueprint
	constructor(speed = 0){ //Factory
	this.speed = speed
	}

	drive(newSpeed){
		// console.log(speed)
		// console.log(this.speed)
		return this.speed = newSpeed
	}


}

// let car = new Car(); //We have a 'car' that came out of the factory.

// let test1 = car.drive(10);
// console.log(test1)
// let result1 = car.speed;
// console.log(result1)

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Car;
} catch {
	module.exports = null;
}
