//app.ts uses typescript, so we get CODE HINTING!!!
//tsc app.ts in command line makes app.js
var Person = (function () {
    //this is the constructor
    function Person(name) {
        this._name = name;
    }
    Person.prototype.sayName = function () {
        console.log("Your name is " + this._name);
    };
    return Person;
})();
var alex = new Person("Alex");
alex.sayName();
