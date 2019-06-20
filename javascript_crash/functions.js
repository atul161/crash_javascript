let printsometingh = function() {
    console.log("helllo")
}

printsometingh()

//function with return type

let returnSomething = function() {
    return "Somethingh returned"
}

console.log(returnSomething())

//function with parameter

let functionWithParameter = function(someparameter) {
    console.log(someparameter)
    return "hello  this is atul anand and hoe are you"

}

console.log(functionWithParameter("Kaise ho bhy"));

//

let funOverloading = function(param1 = "heelo", param2 = "hi", param3 = "kasie ho") {
    console.log(param1 + param2 + param3)
}

funOverloading("Atul Anand")