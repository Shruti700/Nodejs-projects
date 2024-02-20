//golobals

// console.log(__dirname)
// setInterval(()=>{
//     console.log('sdjh')
// },10000)
 

//Modules- Only sharing minimum - every file is a module(encapsulated code)


const names =require('./2-names')
const sayHi= require('./3-utils')
const she=require('./4-alternativeexport')
console.log(names)
require('./5-withoutexport')

// sayHi(secret)
sayHi(names.shruti)
sayHi(names.superman)
sayHi(she.individual.name)

