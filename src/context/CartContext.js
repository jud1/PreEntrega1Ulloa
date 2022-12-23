import { useContext, useState, createContext } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = props => {
   const [cart, setCart] = useState([])

   const isInCart = id => {
      // true o false if exists
      return cart.find(product => product.id === id)
   }

   const addItem = (product, quantity) => {
      if(isInCart(product.id)){
         const index = cart.findIndex(prod => prod.id === product.id)
         const aux = [...cart]
         aux[index].quantity = quantity
         setCart(aux)
      }
      else{
         const newProduct = {
            ...product,
            quantity: quantity
         }
         setCart([...cart, newProduct])
      }
   }
   
   const emptyCart = () => setCart([])
   
   const removeItem = (id) => setCart(cart.filter(prod => prod.id !== id))
   
   const getItemQuantity = () => {
      return cart.reduce((acum, prod) => acum += prod.quantity, 0)
   }
   
   const totalPrice = () => {
      return cart.reduce((acum, prod) => acum += (prod.quantity * prod.precio), 0)
   }
   
   return(
      <CartContext.Provider value={{cart, isInCart, addItem, removeItem,emptyCart,getItemQuantity, totalPrice}}>
         { props.children }
      </CartContext.Provider>
   )
}
