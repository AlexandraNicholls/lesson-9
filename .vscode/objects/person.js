//app.ts uses typescript, so we get CODE HINTING!!!
//tsc app.ts in command line makes app.js
//this is a namespace, surrounding all things
var objects;
(function (objects) {
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
    objects.Person = Person;
})(objects || (objects = {}));
