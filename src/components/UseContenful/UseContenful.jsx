import { createClient } from 'contentful'

const UseContenful = async (type="productos") => {
   
   const client = createClient({
      space: 'k606idtreutn',
      accessToken: process.env.CONTENFUL_API_KEY,
      host: 'preview.contentful.com'
   })
   
   const entries = await client.getEntries({
      content_type: type,
      select: 'fields'
   })

   return entries.items

}

export { UseContenful }