import { initializeApp } from "firebase/app"
import { getFirestore, getDocs, getDoc, collection, doc, updateDoc, deleteDoc, addDoc } from 'firebase/firestore'
import { getStorage, ref, getDownloadURL } from "firebase/storage"

const firebaseConfig = {
   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
   authDomain: "yerba-mate-talca-99af7.firebaseapp.com",
   projectId: "yerba-mate-talca-99af7",
   storageBucket: "yerba-mate-talca-99af7.appspot.com",
   messagingSenderId: "695147579825",
   appId: "1:695147579825:web:8851388063bd92a2fb9590"
}

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore()

const storage = getStorage()

/* CRUD = Create, read, update, delete */

const getProductos = async () => {
   const productos = await getDocs(collection(db, "productos"))
   const items = await Promise.all(
      productos.docs.map( async (prod) => {

         const galeriaFinal = await Promise.all(
            prod.data().galeria.map(async (url) => {
               return await getDownloadURL(ref(storage, url))
            })
         )

         return {
            ...prod.data(), id: prod.id, galeria: galeriaFinal
         }
      })
   )
   return items
}

const getProducto = async (id) => {
   const prod = await getDoc(doc(db, "productos", id))
   
   const galeriaFinal = await Promise.all(
      prod.data().galeria.map(async (url) => {
         return await getDownloadURL(ref(storage, url))
      })
   )
   return { ...prod.data(), id: prod.id, galeria: galeriaFinal }
}

const updateProducto = async (id, info) => {
   const estado = await updateDoc(doc(db, "productos", id), info)
   return estado
}

const deleteProducto = async (id) => {
   const estado = await deleteDoc(doc(db, "productos", id))
   return estado
}

// Crear y leer orden de compra

const createOrdenCompra = async (cliente, fecha, pTotal) => {
   const ordenCompra = await addDoc(collection(db, "ordenesDeCompra"), {
      nombre: cliente.nombre,
      email: cliente.email,
      rut: cliente.rut,
      telefono: cliente.telefono,
      direccion: cliente.direccion,
      comuna: cliente.comuna,
      fecha: fecha,
      precioTotal: pTotal
   })
   return ordenCompra
}

const getOrdenCompra =  async (id) => {
   const ordenCompra = await getDoc(doc(db, "ordenesDeCompra", id))
   const item = {...ordenCompra.data(), id: ordenCompra.id}
   return item
}

export { firebaseApp, firebaseConfig, getProductos, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra }