// All require at the top
var something= require("cat-me")
var joke =  require("knock-knock-jokes")
var faker =  require("faker")
console.log("From app.js")

console.log(something())
//console.log(something("nyan"))

console.log(joke())

console.log(faker())