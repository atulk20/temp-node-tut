const http = require('http')

//paramters ->both are objects and we can call them anything
/*first parameter represents the incoming requests
    response is what server send to client
*/

const server  = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('In the home page')
    }
    else if(req.url === '/about'){
        res.end('In the about')
    }
    else{
        res.end(
        ` <h1>Oops !</h1>
         <p>we cant find the page</p>
         <a href = "/">back home</a>
         `
     )
        }

    

})


server.listen(5000)