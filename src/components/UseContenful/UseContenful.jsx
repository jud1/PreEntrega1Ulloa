import { createClient } from 'contentful'
import { sanitizarProducto } from "../../assets/funciones"

const client = createClient({
   space: 'k606idtreutn',
   accessToken: process.env.REACT_APP_API_KEY,
   host: 'preview.contentful.com'
})

const useContenful = async (type = "productos") => {
   const entries = await client.getEntries({
      content_type: type,
      select: "fields",
   })

   return entries.items.map(item => sanitizarProducto(item))
}

const useContenfulSingle = async (id) => {
   const entry = await client.getEntry(id)

   return sanitizarProducto(entry)
}

export { useContenful, useContenfulSingle }
