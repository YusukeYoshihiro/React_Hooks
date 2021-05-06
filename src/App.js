import React from 'react';
import Accordion from './components/Accordion';
import ColorSelect from './components/ColorSelect';
import Translate from './components/Translate';
import Search from './components/Search';
import Route from './components/Route';
import Header from './components/Header';

// const showAccordion = () => {
//   if(window.location.pathname === '/'){
//     return <Accordion items={items}/>
//   }
// }

// const showList = () => {
//   if(window.location.pathname === '/list'){
//     return <Search />
//   }
// } 

// const showDropdown = () => {
//   if(window.location.pathname === '/dropdown'){
//     return <ColorDropdown />
//   }
// }

// const showTranslate = () => {
//   if(window.location.pathname === '/translate'){
//     return <Translate />
//   }
// }

const App = () => {
  return(
  <div className="ui container" style={{marginTop:"10px"}}>
   <Header />
   <Route path="/">
     <Accordion />
   </Route>
   <Route path="/list">
    <Search />
   </Route>
   <Route path="/select">
     <ColorSelect /> 
   </Route> 
   <Route path="/translate">
     <Translate />
   </Route>
  {/* {showAccordion()}
  {showList()}
  {showDropdown()}
  {showTranslate()} */}
  </div>
  )}

export default App
