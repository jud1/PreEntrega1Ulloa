import { createClient } from 'contentful'

const UseContenfulSingle = async (id) => {
   
   const client = createClient({
      space: 'k606idtreutn',
      accessToken: process.env.CONTENFUL_API_KEY,
      host: 'preview.contentful.com'
   })
   
   const entry = await client.getEntry(id)

   return entry

}

export { UseContenfulSingle }