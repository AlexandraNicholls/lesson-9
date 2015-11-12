//app.ts uses typescript, so we get CODE HINTING!!!
//tsc app.ts in command line makes app.js
class Person {
	//private instance variables!! only in typescript, not js
	private _name;
	
	//this is the constructor
	constructor(name:string){
		this._name = name;
	}
	
	public sayName():void{
		console.log("Your name is " + this._name);
	}
}

var alex = new Person("Alex");
alex.sayName();