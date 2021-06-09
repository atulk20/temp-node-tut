//local
const secret = 'super secret'
//share
const john = 'john123'
const peter = 'peter123'

//console.log(module)
//module is a global varaible which is a object and has a property called exports
//exports is also a object which stores the the values to be shared 
module.exports = {john, peter}
//export return the object
//{ john: 'john123', peter: 'peter123' }