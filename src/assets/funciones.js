const consultarBBDD  = async () => {
   //const response = await fetch('./json/productos.json')
   const response = await fetch('https://jsonplaceholder.typicode.com/users')
   const productos = await response.json()
   return productos
}

export { consultarBBDD }