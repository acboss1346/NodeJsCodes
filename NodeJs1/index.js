const {
    max, 
    sum
} = require('./localmodule')// given path of module


const randomNumber = require("./localemodule2")
const result = max(20, 30)
const result2 = sum(20, 30)

console.log(result, result2)

console.log(randomNumber())

