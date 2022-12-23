const consultarBBDD  = async () => {
   //const response = await fetch('./json/productos.json')
   const response = await fetch('https://jsonplaceholder.typicode.com/users')
   const productos = await response.json()
   return productos
}

const sanitizarProducto = (item) => {
   const id = item.sys.id
   const galeria = (item.fields.galeria).map(image => {
      const id = image.sys.id
      return {
         ...image.fields, id
      }
   })
   return {
      ...item.fields, id, galeria
   }
}

const precioConDescuento = (precio, descuento) => {
   return Math.trunc(precio * (1 - descuento / 100))
}

export { consultarBBDD, sanitizarProducto, precioConDescuento }