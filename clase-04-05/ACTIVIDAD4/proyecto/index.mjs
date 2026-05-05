import express from 'express'

const PUERTO = 3000

const app = express()

const validarCodigo = async (req, res, next)=>{

    const codigo = Number(req.params.codigo)

    const respuesta = await fetch('http://localhost:4321/usuarios')
    
    

    const usuario = await respuesta.json()
    const codigoApi = usuario.codigo
    
    if(codigo === codigoApi){
        return next()
    }

    res.status(400).json({mensaje:'El codigo es incorrecto'})

}

app.get('/:codigo',validarCodigo, (req, res)=>{
    res.status(200).json({mensaje:'El codigo es correcto'})
})

app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}`)
})
