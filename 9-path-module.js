const path  = require('path')


//path sepatator
console.log(path.sep)



const filePath = path.join('./content','sub', 'test.txt')
console.log(filePath);



//base file
const base =path.basename(filePath)
console.log(base)

//full path
const absolute  = path.resolve(__dirname,'content','sub', 'test.txt')
console.log(absolute);