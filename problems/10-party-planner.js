class PartyPlanner {
	constructor(guestList = []){
		this.guestList = guestList
	}
	addToGuestList(name){
		this.guestList.push(name)
	}
	throwParty(){
		if(this.guestList.length === 0){
			return 'Gotta add people to the guest list'
		} else{
			if (this.guestList.length > 0){
				return `Welcome to the party ${this.guestList}`
			}
		}
	}
}

//Create a partyPlanner class
//Instance has a guestList property initilalized to an empty array
//two instnace methods
//addToGuesList(name) -- adds name to the guestList
//throwParty() -- returns a string depending on the length of the gueslist
//If no guest - returns "Gotta add peeps to the gues list"
//If are guest, return guests names.
//return "Welcome to the party name1 and name2"
//Make an array

const party = new PartyPlanner();

console.log(party.throwParty()); // prints "Gotta add people to the guest list"

party.addToGuestList("James");
console.log(party.throwParty()); // prints "Welcome to the party James"

party.addToGuestList("Alvin");
console.log(party.throwParty()); // prints "Welcome to the party James and Alvin"
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
