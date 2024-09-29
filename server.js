const http = require('http')
const PORT = 4700
const fs=require('fs')
const server = http.createServer((req,res)=>{
    res.writeHead(47, {'Content-Type':'text/html'})
    fs.readFile('index.html',(data,error)=>{
        if(error){
            res.writeHead(475)
            res.write('Page not found')
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(PORT,(error)=>{
    if(error){
        console.log(error)
    } else{
        console.log('Server is running on' + PORT)
    }
})