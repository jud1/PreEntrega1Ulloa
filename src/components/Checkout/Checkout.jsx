import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from "../../functions/firebase"
import { generateRandomRUT, validateRUT } from "validar-rut"
import { useCartContext } from "../../context/CartContext"
import { ToastContainer, toast } from "react-toastify"
import comunas from "../../assets/comunas"
import "react-toastify/dist/ReactToastify.css"

const Checkout = () => {
   const { totalPrice, emptyCart, cart } = useCartContext()
   const datosFormulario = useRef()
   const notify = (msg) => toast.warn(msg, { position: "top-center" })
   let navigate = useNavigate()

   const consultarFormulario = (e) => {
      e.preventDefault()
      const formData = new FormData(datosFormulario.current)
      const formDataObj = Object.fromEntries(formData)

      const aux = [...cart]

      
      // If para verificar que el email sea el mismo
      if (formDataObj.email === formDataObj.emailrepeat && validateRUT(formDataObj.rut)) {
         aux.forEach(productoCart => {
            getProducto(productoCart.id).then(prodBBDD => {
               if(prodBBDD.stock >= productoCart.quantity){
                  prodBBDD.stock -= productoCart.quantity
                  updateProducto(productoCart.id, prodBBDD)
                  createOrdenCompra(formDataObj, new Date(),totalPrice()).then((ordenCompra) => {
                     getOrdenCompra(ordenCompra.id).then(() => {
                        e.target.reset()
                        emptyCart()
                        navigate("/")
                     })
                  })
               }
               else {
                  notify(`Uno de tus productos agoto el stock`)
               }
            })
         })
      } 
      /* Email invalido (paso rut) */
      else if (validateRUT(formDataObj.rut)) notify("Verifica que los emails sean identicos")
      /* Rut invalido */ 
      else notify("Rut invalido")
   }

   return (
      <div className="uk-container uk-margin-large-top" data-uk-margin="margin: uk-margin-top">
         <ToastContainer />
         <h2>componente checkout</h2>
         <form onSubmit={consultarFormulario} ref={datosFormulario} data-uk-margin="margin: uk-margin-top">
            <div>
               <label htmlFor="nombre" className="uk-form-label">
                  Nombre
               </label>
               <div className="uk-form-controls">
                  <input className="uk-input" type="text" placeholder="Ingresa tu nombre" name="nombre" required />
               </div>
            </div>
            <div>
               <label htmlFor="email" className="uk-form-label">
                  Email
               </label>
               <div className="uk-form-controls">
                  <input className="uk-input" type="email" placeholder="Ingresa tu email" name="email" required />
               </div>
            </div>
            <div>
               <label htmlFor="emailrepeat" className="uk-form-label">
                  Repetir Email
               </label>
               <div className="uk-form-controls">
                  <input className="uk-input" type="email" placeholder="Ingresa tu email" name="emailrepeat" required />
               </div>
            </div>
            <div>
               <label htmlFor="rut" className="uk-form-label">
                  RUT
               </label>
               <div className="uk-form-controls">
                  <input className="uk-input" type="text" placeholder="Ingresa tu rut" name="rut" defaultValue={generateRandomRUT(1, true, true)} required />
               </div>
               <span>
                  <small>Autogenerado (no acepta rut invalidos)</small>
               </span>
            </div>
            <div>
               <label htmlFor="telefono" className="uk-form-label">
                  Teléfono
               </label>
               <div className="uk-form-controls">
                  <input className="uk-input" type="tel" placeholder="Some text..." name="telefono" required />
               </div>
            </div>
            <div>
               <label htmlFor="direccion" className="uk-form-label">
                  Dirección (solo RM)
               </label>
               <div className="uk-form-controls">
                  <input className="uk-input" type="text" placeholder="Some text..." name="direccion" required />
               </div>
            </div>
            <div>
               <label htmlFor="comuna" className="uk-form-label">
                  Comuna
               </label>
               <div className="uk-form-controls">
                  <select className="uk-select" aria-label="Select" name="comuna">
                     {comunas.sort().map((comuna, index) => (
                        <option key={comuna}>{comuna}</option>
                     ))}
                  </select>
               </div>
            </div>
            { cart.length >= 1
               ? <button className="uk-button uk-button-primary" type="submit">Ir a pagar</button>
               : false
            }
         </form>
      </div>
   )
}

export default Checkout
