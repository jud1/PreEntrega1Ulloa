import React from 'react'
import { useNavigate } from 'react-router-dom'
const Checkout = () => {

    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const formData = new FormData(datosFormulario.current)
        const formDataObj = Object.fromEntries(formData)
        console.log(formDataObj)
        e.target.reset()
        navigate("/")
    }

   return (
      <div className="uk-container uk-margin-large-top" data-uk-margin="margin: uk-margin-top">
         <h2>componente checkout</h2>
         <form onSubmit={consultarFormulario} ref={datosFormulario} data-uk-margin="margin: uk-margin-top">
            <div>
               <label htmlFor="nombre" className="uk-form-label">Nombre</label>
               <div className="uk-form-controls">
                  <input className="uk-input" type="text" placeholder="Some text..." name="nombre" />
               </div>
            </div>
            <div>
               <label htmlFor="email" className="uk-form-label">Email</label>
               <div className="uk-form-controls">
                  <input className="uk-input" type="email" placeholder="Some text..." name="email" />
               </div>
            </div>
            <div>
               <label htmlFor="identificacion" className="uk-form-label">Rut o Pasaporte</label>
               <div className="uk-form-controls">
                  <input className="uk-input" type="text" placeholder="Some text..." name="identificacion" />
               </div>
            </div>
            <div>
               <label htmlFor="telefono" className="uk-form-label">Teléfono</label>
               <div className="uk-form-controls">
                  <input className="uk-input" type="tel" placeholder="Some text..." name="telefono" />
               </div>
            </div>
            <div>
               <label htmlFor="direccion" className="uk-form-label">Dirección</label>
               <div className="uk-form-controls">
                  <input className="uk-input" type="text" placeholder="Some text..." name="direccion" />
               </div>
            </div>
            <div>
               <label htmlFor="comuna" className="uk-form-label">Comuna</label>
               <div className="uk-form-controls">
                  <select className="uk-select" aria-label="Select" name="comuna">
                     <option>Option 01</option>
                     <option>Option 02</option>
                  </select>
               </div>
            </div>
            <button className="uk-button uk-button-primary" type="submit">Ir a pagar</button>
         </form>
      </div>
   )
}

export default Checkout
