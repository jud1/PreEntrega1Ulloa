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

initializeApp(firebaseConfig)

const db = getFirestore()

const storage = getStorage()

/* CRUD = Create, read, update, delete */

const getProductos = async () => {
   const productos = await getDocs(collection(db, "productos"))
   const items = productos.docs.map(prod => {
      const newGaleria = prod.data().galeria.map(async(img) => {
         return await getDownloadURL(ref(storage, img))
      })
      console.log(newGaleria)
      return {
         ...prod.data(), id: prod.id
      }
   })
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

const createOrdenCompra = async (cliente, fecha, precioTotal) => {
   const ordenCompra = await addDoc(collection(db, "ordenesDeCompra"), {
      nombre: cliente.nombre,
      email: cliente.email,
      rut: cliente.rut,
      direccion: cliente.direccion,
      telefono: cliente.telefono,
      fecha: fecha
   })
   return ordenCompra
}



export { getProductos, getProducto, updateProducto, deleteProducto, createOrdenCompra }