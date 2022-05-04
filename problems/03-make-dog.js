class Dog {
	constructor(name){
		this.name = name
	}
	static makeJet(){
		// return this.name = 'Jet'
		return new Dog('Jet')
	}
	changeName(newName){
		return this.name = newName
	}
	speak(word){
		return `${this.name} says ${word}`
	}
}
let dog1 = Dog.makeJet(); // returns an object


// const fido = new Dog('Fido')
// fido.changeName('Clock')
// let fidobarking = fido.speak('Bark!!!!!')
// console.log(fidobarking)

// const dog = new Dog('Jet')
// makeJet() we need 'do this'
// const dog1 = Dog.makeJet()
// console.log(dog1.name)


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}
