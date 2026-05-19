
import * as modelo from "./modelo.productos.mjs";

// modelo es un objeto
/*
const modelo = {
    obtenerPRoductos: obtenerProductos
}

*/


export function obtenerProductos(req, res){
    const productos = modelo.obtenerProductos()
    //const vista = vista.obtenerProductos(productos)// <------ reestructuramos los datos
    res.json(productos)
}

