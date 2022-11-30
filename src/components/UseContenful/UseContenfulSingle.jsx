import { createClient } from 'contentful'

const UseContenfulSingle = async (id) => {
   
   const client = createClient({
      space: 'k606idtreutn',
      accessToken: 'RvVbhDfxxecRXFgHMuS2hIFz_XXjb8e1qFNRvJD9wFU',
      host: 'preview.contentful.com'
   })
   
   const entry = await client.getEntry(id)

   return entry

}

export { UseContenfulSingle }