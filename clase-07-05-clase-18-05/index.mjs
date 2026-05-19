import express from 'express'
import rutasProductos from './rutas.mjs'

const puerto = 3000

const app = express()

//Configurar Api rest



//modulo productos


app.use('/api/v1', rutasProductos)

app.listen(puerto, ()=>{
    console.log(`http://localhost:${puerto}`)
})