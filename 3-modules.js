//CommonJs, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

//accessing modules
//command enter === next line
const names  = require('./4-name')
const data  =require('./6-alternativeSyntax')
const sayHii = require('./5-utils')

require('./7-mind-grenade')
//invoke by default

const mind = require('./7-mind-grenade')
//retrive function only not execute
//mind has function body ,,, defination


// console.log(mind)
//print function name

mind();
//invoke function



 //console.log(data);

// console.log(data.person)
// console.log(data.person.name)

 //console.log(sayHii)
//console.log(names)

// sayHii('susan')
//  sayHii(names.john)
//sayHii(names.peter)



