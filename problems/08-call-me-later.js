//Create a callcenter class
class CallCenter{
	constructor(name){
		this.name = name
	}
	sayHello(){
		console.log(`Hello this is ${this.name}`)
	}
	callMeLater(delay){
		setTimeout( () => this.sayHello(this.name), delay)
	}
}
let melan = new CallCenter("Melan");
melan.sayHello();        // prints "Hello this is Melan"
melan.callMeLater(1000); // waits one second then prints "Hello this is Melan"


//Constructor should take in Name,
//Set name property of newly instanced instance.
//Two methds: sayHello()
//CallmeLater(delay)
//This thing will call sayHello after a delay!
//Why are you shooting me???



/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}
