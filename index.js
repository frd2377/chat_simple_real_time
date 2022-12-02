const express = require('express')
const http = require('http')
const { join } = require('path')
const {Server} = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

let pId = 0

app.use(express.static(join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.app.render('index.html')
})

app.get('/profile',(req,res)=>{
    res.sendFile(join(__dirname,'public','profile.html'))
})

io.on('connection',(socket)=>{
    console.log('connection detected');
    socket.on('envio-mensaje',(data)=>{
        data['pId'] = pId
        io.emit('envio-mensaje',data)
        pId++
    })
})

server.listen(3001)

