import React, { useState } from "react";
import Project from './project';
import { Link } from 'react-router-dom';
import './phase.css';
const Logic = () => {
  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  
    return(
       <>
       
    <div className=" d-flex menu-body w-100 "  >
    <div className=" menu-body2 d-flex flex-row w-100">
 <div className=" w-25 m-0">
  <div className="align-self-sm-center">Management</div>
 <Project />
 </div>
    

      <div className=" d-flex row border w-100 border-info "  >

       <div className=" text-center font-weight-bold"> 
       <section className="d-flex flex-row btn-group m-1 justify-content-end navbar-nav">
       <div className =" ">
         
            <button type="button"  className="border  btn m-1  border-info" style={{backgroundColor: "#b7e778"}}>Logic </button>
            
            <button type="button"  className="border m-1 btn border-info" style={{backgroundColor: "#C0C0C0"}} onClick={removeElement}>List-toolbox</button>
        
  
          </div>
          
          </section>
      </div>

       <div className="d-flex" >

    
        <div className="border  border-info" > 
        jii       
        <div className=" row" >
        <nav className ="navbar ">
          <ul className ="nav m-2 d-flex  justify-content-around navbar-nav">
          <Link to="/library">
          <li className ="nav-item w-75 ">
            <button type="button"  className="border btn m-3 border-info" style={{backgroundColor: "#b7e778"}} >Library </button>
          </li>
          </Link>
          <li className ="nav-item w-75 ">
            <button type="button"  className="border  btn m-3 border-info" style={{backgroundColor: "#b7e778"}} >Connection</button>
          </li>
          <li className ="nav-item w-75">
            <button type="button" className="border btn m-3 border-info" style={{backgroundColor: "#b7e778"}}>New Input Parameter</button>
          </li>
          <li className ="nav-item w-75">
            <button type="button"  className="border btn m-3 border-info" style={{backgroundColor: "#b7e778"}}>New Output Parameter</button>
          </li>
          <li className ="nav-item w-75">
            <button type="button"  className="border btn m-3 border-info" style={{backgroundColor: "#b7e778"}}>New Graph</button>
          </li>
          <li className ="nav-item pt-5 mt-5 w-75">
            <button type="button"  className="border btn m-3 border-info" style={{backgroundColor: "#b7e778"}}>Back</button>
          </li>
  
          </ul>
          </nav>
  
      </div>
        </div>

        <div className="border w-100 border-info" >        
          <div className="d-flex h-100">
          <div className="border w-100 border-info" >        
         
          <section className="d-flex p-2 justify-content-between"> 
            <div>Input</div>
            <div> Output</div>
             </section>
        </div>

  <div >

        </div>
          </div>
       
        </div>

        {visible && 
        <div className="border w-25 border-info">
 

           <ul className=" toolbox column d-flex p-0 ">
            <li className="border small border-info">I/O-List</li>
            <li className=" border small border-info">Signal-list</li>
            <li className=" border small border-info">Logic-In-Out</li>
            <li className=" border small border-info">Parameter</li>
            <li className=" border small border-info">EM</li>
            <li className=" border small border-info">Interlock</li>
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


export default Logic;