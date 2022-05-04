//Create a calculator class
class Calculator {
//Initialize the total property to 0 on newly instantiated instance.
	constructor(total = 0){
		this.total = total
	}
//Instance methods should return all of the total property.
	add(num){
		return this.total += num
	}
	subtract(num){
		return this.total -= num
	}
	divide(num){
		return this.total /= num
	}
	multiply(num){
		return this.total *= num
	}

}


//add(num) adds num to the total

//subtract(num) subtracts num from total

//divide(num) divides the total by the num arg.

//multiply(num) multiply total by the num.


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}
