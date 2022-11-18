const Main = (props) => {
   return (
      <main 
         className='uk-padding-large uk-padding-remove-horizontal uk-padding-remove-top' 
         data-uk-height-viewport='offset-top: true; offset-bottom: true' data-uk-margin="margin: uk-margin-large-top">
         {props.children}
      </main>
   )
}
export default Main