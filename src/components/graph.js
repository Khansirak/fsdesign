import React, { useState } from "react";
import Project from './project';
import { Link } from 'react-router-dom';
import './phase.css';




const Graph = () => {
  const [visible, setVisible] = useState(true);
  const [visibles2, setVisibles2] = useState(true);
  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  const removeElement2 = () => {
    setVisibles2((prev) => !prev);
  };


    return(
       <>
       
    <div className=" d-flex menu-body w-100 "  >
    <div className=" menu-body2 d-flex flex-row w-100">
    <div className="fixed-top text-center mt-2" style={{paddingLeft:"50em"}} > 
      <button type="button"  className="border text-dark m-2 px-5 p-2  btn border-info" style={{backgroundColor: "#b7e778"}} > <h4>Grahp</h4> </button>
 
      </div> 

    

      <div className=" d-flex row border w-100 border-info "  >

     
       
       <div className ="d-flex p-0 justify-content-between ">
       <div>
            <button type="button"  className="border text-center m-1 btn border-info" style={{backgroundColor: "#C0C0C0"}} onClick={removeElement2} >Management</button>
            </div>
            <div>
            <button type="button"  className="border  btn m-1  border-info" style={{backgroundColor: "#b7e778"}}>Overview </button>
            
            <button type="button"  className="border m-1 btn border-info" style={{backgroundColor: "#C0C0C0"}} onClick={removeElement}>List-toolbox</button>
            </div>
          </div>
   

       <div className="d-flex p-0 h-100" >
    
    
        <div className="d-flex column border h-100 w-50 border-info" > 
        {visibles2&& 
        <div className=" border w-50 m-0 border-info">
  
          <Project />
        </div> 
}    
        <div className="d-flex w-50 row justify-content-around" >
        <nav className ="d-flex row justify-content-between">
          <ul className ="nav p-4 d-flex flex-wrap  ">
        
          <li className ="nav-item w-50 ">
            <button type="button"  className="border btn btn-rounded    border-info" style={{backgroundColor: "#b7e778"}} >New coordinate </button>
          </li>
          <li className ="nav-item w-50 ">
            <button type="button"  className="border  btn m-1 w-75  border-info" style={{backgroundColor: "#b7e778"}} >Horizontal Line</button>
          </li>
          <li className ="nav-item w-50">
            <button type="button" className="border btn m-1 w-75 border-info" style={{backgroundColor: "#b7e778"}}>Auxiliary Line horizontal</button>
          </li>
          <li className ="nav-item w-50">
            <button type="button"  className="border btn m-1  w-75 border-info" style={{backgroundColor: "#b7e778"}}>Text</button>
          </li>
          <li className ="nav-item w-50">
            <button type="button"  className="border btn m-1  w-75 border-info" style={{backgroundColor: "#b7e778"}}>New Page</button>
          </li>
          <li className ="nav-item  w-50">
            <button type="button"  className="border btn m-1 w-75 border-info" style={{backgroundColor: "#b7e778"}}>Free Hand Line</button>
          </li>
          <li className ="nav-item w-50">
            <button type="button"  className="border btn m-1 w-75 border-info" style={{backgroundColor: "#b7e778"}}>Auxiliary Line vertical</button>
          </li>
          <li className ="nav-item  w-50">
            <button type="button"  className="border btn m-1 w-75 border-info" style={{backgroundColor: "#b7e778"}}>Vertical Line</button>
          </li>
          
          </ul>
          <ul>
          <Link to="/phase">
          <li className ="nav-item  w-75">
            <button type="button"  className="border btn m-3 w-100 border-info" style={{backgroundColor: "#b7e778"}}>Back</button>
          </li>
          </Link>
          </ul>
          
          </nav>
  
      </div>
        </div>

        <div className="border w-100 border-info" >  

          <div className="d-flex h-100">
          <div className="border w-100 border-info" >        
          <h3 className="border-bottom text-center border-info"> Graph </h3>
          <section className="d-flex p-4 h-100 justify-content-center"> 
              
          
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


export default Graph;