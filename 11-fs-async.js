const {readFile, writeFile}  = require('fs')



console.log('****_>start_<*********')

readFile('./content/first.txt', 'utf8', (err, result)=>{
    
if(err){
        console.log(err)
        return
    }
    const first = result

    readFile('./content/second.txt', 'utf8', (err, result)=>{
    
        if(err){
                console.log(err)
                return
            }
           const second = result

           writeFile(
               './content/result-async.txt',
               `here is the result \n: ${first},\n${second}`
               , (err, result)=>{
                   if(err){
                       console.log(err)
                       return
                   }
                   else{
                       console.log('************done with this**********')
                   }
               })


        
            
        
        })

    

})


console.log('*****  starting the new task*****')