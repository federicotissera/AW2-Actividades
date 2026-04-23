import express from 'express'

const puerto = 3912
const app = express()

const obtenerCosas = (req, res) =>{
    res.set('content-type', 'text/html')
    res.status(200)
    res.end('<h1>hola<h1>')
}

app.get('/',obtenerCosas)

app.get('/saludo',(req, res)=>{
    res.status(200)
    res.end('hola')
})

app.post('/', (req, res)=>{
    res.end('Estoy en post')
})

app.listen(puerto, ()=>{
    console.log(`http://localhost:${puerto}`)
})