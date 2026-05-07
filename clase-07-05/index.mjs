import express from 'express'
import {obtenerProductos} from './funciones.mjs'

const puerto = 3000

const app = express()

//Configurar Api rest

//modulo productos
//get api/v1/productos
app.get('/api/v1/productos',obtenerProductos)

//get /api/v1/productos/:id
// app.get('/api/v1/productos/:id')

//post /api/v1/productos
// app.post('/api/v1/productos')


//put /api/v1/productos/:id
// app.put('/api/v1/productos/:id')


//delete /api/v1/productos/:id
// app.delete('/api/v1/productos/:id')



app.listen(puerto, ()=>{
    console.log(`http://localhost:${puerto}`)
})