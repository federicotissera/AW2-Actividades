import express from 'express'
import * as controlador from './controlador.produtos.mjs'

//modulo productos
const rutasProductos = express.Router()

//get api/v1/productos
rutasProductos.get('/productos',controlador.obtenerProductos)

//get /api/v1/productos/:id
// rutasProductos.get('/productos/:id')

//post /api/v1/productos
//rutasProductos.post('/productos')


//put /api/v1/productos/:id
//rutasProductos.put('/productos/:id')


//delete /api/v1/productos/:id
//rutasProductos.delete('/productos/:id')

export default rutasProductos