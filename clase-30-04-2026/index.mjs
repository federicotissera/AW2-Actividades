import express from 'express'

const puerto = 3000

const app = express()

const productos = [
    {
        id: 1,
        nombre: 'pantalon',
        precio: 50000
    }, 
    {
        id: 2,
        nombre: 'remera',
        precio: 30000
    }
]

//parametros de ruta

app.get('/', (req, res)=>{

    res.json({mensaje:"Hola"})

})

app.get('/productos', (req, res)=>{


    res.json(productos)

})


app.get('/productos/:id', (req, res)=>{

    const id = Number(req.params.id)

    const productoFIltrado = productos.filter((producto)=>{
        return producto.id === id
    })

    res.json(productoFIltrado)

})

app.get('/productos_d/:descuento', (req, res)=>{

    const descuento = Number(req.params.descuento)

    const productoConDescuento = productos.map((producto)=>{

        const calculo = producto.precio * descuento/100
        const precioFinal = producto.precio - calculo
        return {
            id: producto.id,
            nombre: producto.nombre,
            precio: precioFinal 
        }
        
    })
    res.json(productoConDescuento)
})
app.listen(puerto)