import { UseDarkModeContext } from "../../../context/DarkModeContext"

const ButtonDarkMode = () => {
   const { toggleDarkMode } = UseDarkModeContext()

   /* if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // dark mode
      // console.log('Dark mode system')
   } */

   return (
      <div className="uk-margin-right">
         <span>Dark mode </span>
         <input className="uk-checkbox" type="checkbox" onInput={()=> toggleDarkMode()}/>
      </div>
   )
}

export default ButtonDarkMode
