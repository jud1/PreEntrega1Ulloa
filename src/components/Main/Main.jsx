import { UseDarkModeContext } from "../../context/DarkModeContext"

const Main = (props) => {
   const { darkMode } = UseDarkModeContext()

   return (
      <main 
         className={`uk-padding-large uk-padding-remove-horizontal uk-padding-remove-top ${darkMode ? "uk-background-secondary uk-light" : "uk-background-default"}`} 
         data-uk-height-viewport='offset-top: true; offset-bottom: true' 
         data-uk-margin="margin: uk-margin-large-top">
         {props.children}
      </main>
   )
}
export default Main