const Calculator = require('./02-calculator')
//Import Calculator Class
class FancyCalculator extends Calculator {
		constructor(total = 0){
			super(total)
			this.total = total
		}
		setTotal(newTotal){
			return this.total = newTotal
		}
		modulo(num){
			return this.total = (this.total % num)
		}
		squared(){
			return this.total = (this.total ** 2);
		}
}

//Create FancyCalculator
//add following instance methods:
//Should all return the TOTAL property of the instance
//setTotal(newTotal) -- Sets the total to the newTotal
//modulo(num) -- sets the total to the remainder of dividing by num
//squared() - multiplies the total by itself.

let fancyCalculator = new FancyCalculator();
console.log(fancyCalculator.setTotal(5)); // => 5
console.log(fancyCalculator.squared());   // => 25
console.log(fancyCalculator.modulo(4));   // => 1
console.log(fancyCalculator.total)        // => 1

// can use instance methods on the Calculator class
console.log(fancyCalculator.add(9))       // => 10
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}
