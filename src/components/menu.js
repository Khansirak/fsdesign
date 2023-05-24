import React, { useState } from 'react';
import './menu.css';

import Project from './project';
const Menu = () => {

///for LIST-TOOLBOX
const [visible, setVisible] = useState(false);
const removeElement = () => {
  setVisible((prev) => !prev);
};
  return (
<>

    <div className="menu-body w-100 "  >
    <div className=" menu-body2 d-flex flex-row">
      <div className=" row" >
        <nav className =" p-0 pt-5">
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

      <div className="border w-100  border-info"  >
     
        <div className=' d-flex row m-1'>
       <div className="col text-center "><h4 className=" p-2 font-weight-bold"> Management</h4></div>
       <div className="col text-end" ><button type="button"  className="border right m-1 btn border-info" style={{backgroundColor: "#C0C0C0"}} onClick={removeElement}>List-toolbox</button></div>
     
       </div>
       <div className="d-flex w-100 h-100 " >
       <div className="d-flex border w-100 justify-content-center border-info" >
        <Project />
        </div>
        <div className="border w-50 border-info">there</div>
        
        {visible && 
        <div className="border border-info" style={{width: "30%"}}>
 

           <ul className=" toolbox d-flex  m-0 p-0 ">
            <li className="border  border-info">I/O-List</li>
            <li className=" border  border-info">Signal-list</li>
            <li className=" border  border-info">Logic-In-Out</li>
            <li className=" border  border-info">Parameter</li>
            <li className=" border  border-info">EM</li>
            <li className=" border  border-info">Interlock</li>
           </ul>

          </div>
}
       </div>
      </div>

      
    </div>
   </div>

   </>

  );
};
export default Menu;
