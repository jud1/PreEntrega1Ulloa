import { useContext, useState, createContext } from "react"

const DarkModeContext = createContext()

export const UseDarkModeContext = () => useContext(DarkModeContext)

export const DarkModeProvider = props => {
   const [darkMode, setDarkMode] = useState(false)
   const toggleDarkMode = () => setDarkMode(!darkMode)

   return (
      <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
         {props.children}
      </DarkModeContext.Provider>
   )
}
