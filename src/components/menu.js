import React, { useState } from 'react';
import './menu.css';

import Recipe from './recipe';
import Project from './project';
const Menu = () => {

  // const [recip, setInput] = useState([<Recipe defaultValue={1} />]);
  

  return (
<>

    <div className="menu-body w-100 "  >
    <div className=" menu-body2 d-flex flex-row">
      <div className=" row" >
        <nav className ="navbar ">
          <ul className ="nav ml-2 d-flex justify-content-around navbar-nav">
          <li className ="nav-item w-75 ">
            <button type="button"  className="border btn m-3 border-info" style={{backgroundColor: "#b7e778"}} /* onClick={() => {setInput([...recip, <recip defaultValue={recip.length + 1} />]);}} */ >New Project</button>
          </li>
          <li className ="nav-item w-75">
            <button type="button"  className="border  btn m-3 border-info" style={{backgroundColor: "#b7e778"}} >New recipe</button>
          </li>
          <li className ="nav-item w-75">
            <button type="button" className="border btn m-3 border-info" style={{backgroundColor: "#b7e778"}}>New Partial recipe</button>
          </li>
          <li className ="nav-item w-75">
            <button type="button"  className="border btn m-3 border-info" style={{backgroundColor: "#b7e778"}}>New Operation</button>
          </li>
          <li className ="nav-item w-75">
            <button type="button"  className="border btn m-3 border-info" style={{backgroundColor: "#b7e778"}}>New Phase</button>
          </li>
  
          </ul>
          </nav>
  
      </div>

      <div className="  w-100 "  >
       <div className=" text-center p-2 font-weight-bold"> Management</div>

       <div className="d-flex " >
       <div className="d-flex border w-75 h-auto d-inline-block  justify-content-center border-info" >
        <Project />
        </div>
        <div className="border w-50 border-info">there</div>
       </div>
      </div>

      
    </div>
   </div>

   </>

  );
};
export default Menu;
