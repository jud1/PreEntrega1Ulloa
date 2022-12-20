import { UseDarkModeContext } from "../../../context/DarkModeContext"

const ButtonDarkMode = () => {
   const { toggleDarkMode } = UseDarkModeContext()
   return (
      <div>
         <input type="checkbox" onInput={()=> toggleDarkMode()}/>
      </div>
   )
}

export default ButtonDarkMode
