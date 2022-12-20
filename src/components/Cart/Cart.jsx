import { Link } from "react-router-dom"
import { useCartContext } from '../../context/CartContext'
import { precioConDescuento } from '../../assets/funciones'

const Cart = () => {
   const { cart, totalPrice, emptyCart, removeItem } = useCartContext()
   return (
      <div className='uk-container' data-uk-margin="margin: uk-margin-top">
         <h1 className='uk-margin-large-top uk-text-center uk-margin-remove-bottom'>Carrito</h1>
         <div className="uk-text-center" data-uk-margin="margin: uk-margin-top">
            { cart.length === 0 
               ?  <>
                     <span className='uk-display-block uk-text-center'>No tienes productos en tu carrito de compras</span>
                  </>
               :  <>
                     <div className="uk-overflow-auto">
                        <table className="uk-table uk-table-divider uk-text-left">
                           <thead>
                              <tr>
                                 <th></th>
                                 <th>Nombre</th>
                                 <th>Cantidad</th>
                                 <th>Precio</th>
                                 <th>Total</th>
                                 <th></th>
                              </tr>
                           </thead>
                           <tbody className="uk-table-middle">
                              { cart.map( product => 
                                 <tr key={product.id}>
                                    <td><img src={product.galeria[0].file.url} alt={product.modelo} width={40} height={40} /></td>
                                    <td>{product.modelo}</td>
                                    <td>${precioConDescuento(product.precio, product.descuento).toLocaleString("es-CL")}</td>
                                    <td>{product.quantity}</td>
                                    <td>
                                       $
                                       { (precioConDescuento(product.precio, product.descuento)*product.quantity).toLocaleString("es-CL") }
                                    </td>
                                    <td>
                                       <button type="button" uk-icon="icon: trash" onClick={()=> removeItem(product.id)}></button>
                                    </td>
                                 </tr>
                              ) }
                           </tbody>
                        </table>
                     </div>
                     <div className="uk-margin-large-top" data-uk-margin="margin: uk-margin-top">
                        <h4 className="uk-text-bold">Resumen de la compra: </h4>
                        <h5>Total compra: {totalPrice()}</h5>
                        <button type="button" className="uk-button uk-button-default" onClick={()=>emptyCart()}>
                           <span>Vaciar carrito</span>
                           <i className="uk-margin-small-left" uk-icon="icon: trash"></i>
                        </button>
                     </div>
                     <Link className="uk-button uk-button-danger" to={'/checkout'}>Finalizar compra</Link>
                  </>
            }
            <Link className="uk-button uk-button-secondary uk-margin-small-left" to={'/'}>Continuar comprando</Link>
         </div>
      </div>
   )
}

export default Cart
