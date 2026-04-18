import fsp from 'node:fs/promises'
import path from 'node:path'

try {
    const repuesta = await fetch('https://api.escuelajs.co/api/v1/users')
    const usuarios = await repuesta.json()

    const usuariosModificados = usuarios.map((usuario) => {
        const usuarioModificado = {
            id: usuario.id,
            email: usuario.email,
            nombre: usuario.name

        }
        return usuarioModificado
    })

    const ruta = path.resolve('usuarios.json')
    const datosJson = JSON.stringify(usuariosModificados, null, 4)
    await fsp.writeFile(ruta, datosJson)

    const usuariosLocales = await fsp.readFile(ruta, 'utf8')
    console.log(usuariosLocales)
} catch (error) {
    console.log(error)
}