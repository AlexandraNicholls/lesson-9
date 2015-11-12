//app.ts uses typescript, so we get CODE HINTING!!!
//tsc app.ts in command line makes app.js
//this is a namespace, surrounding all things
module objects {
	export class Person {
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
}