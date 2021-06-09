const {readFileSync, writeFileSync}  = require('fs')
console.log('****_>start_<*********')
const first  = readFileSync('./content/first.txt','utf8')


const seconds  = readFileSync('./content/second.txt','utf8')


//console.log(first, seconds)


//if not present create one
//otherwise overwrite
//third optional-----for append
writeFileSync('./content/result-sync.txt',`here is the result \n: ${first},\n${seconds}`,{flag : 'a'})



const result  = readFileSync('./content/result-sync.txt','utf8')
console.log(result)


console.log('*****  done with this task*****')
console.log('*****starting the next one*****')