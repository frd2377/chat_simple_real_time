const socket = io()

const mensajes = document.getElementById('mensaje')
const enviar = document.getElementById('button-addon2')
let contenedor = document.getElementById('contenedor-mensajes')

enviar.addEventListener('click',()=>{
    const verificador = mensajes.value.trim()
    if (verificador == '') {
        return
    }
    socket.emit('envio-mensaje',{
        id:socket.id,
        mensaje:mensajes.value
    })
})

socket.on('envio-mensaje',(data)=>{
    const p = document.createElement('p')
    p.id = `${data.pId}`
    p.className = `${data.id}`
    p.textContent = `${data.id} dice: ${data.mensaje}`
    contenedor.append(p)
})


console.log('probando...');