// Assets
import "./App.scss"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Context
import { DarkModeProvider } from "../context/DarkModeContext"

// Components
import Error404 from "./Error404/Error404"
import Cart from "./Cart/Cart"
import Footer from "./Footer/Footer"
import NavBar from "./NavBar/NavBar"
import Main from "./Main/Main"
import ItemListContainer from "./ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer"
import Checkout from "./Checkout/Checkout"

const App = () => {
   return (
      <>
         <BrowserRouter>
            <DarkModeProvider>
               <NavBar />
               <Main>
                  <Routes>
                     <Route exact path="/" element={<ItemListContainer />} />
                     <Route
                        exact
                        path="/categorias/:categoria"
                        element={<ItemListContainer />}
                     />
                     <Route
                        exact
                        path="/productos/:id"
                        element={<ItemDetailContainer />}
                     />
                     <Route exact path="/cart/" element={<Cart />} />
                     <Route exact path="/checkout/" element={<Checkout />} />
                     <Route path="*" element={<Error404 />} />
                  </Routes>
               </Main>
               <ToastContainer />
               <Footer />
            </DarkModeProvider>
         </BrowserRouter>
      </>
   )
}

export default App
