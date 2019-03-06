var Mustache = require("mustache");

var aboutMe = Mustache.render("Hey My name is {{name}} and I'm {{age}} years old", {
	name: "Su Myat",
	age: 23
});

console.log(aboutMe);