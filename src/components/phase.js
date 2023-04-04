import React, { useState } from "react";
import Project from './project';
import { Link } from 'react-router-dom';
import './phase.css';
const Phase = () => {
  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  
    return(
       <>
       
    <div className=" d-flex menu-body w-100 "  >
    <div className=" menu-body2 d-flex flex-row">
 <div className=" w-25 m-0">
  <div className="align-self-sm-center">Management</div>
 <Project />
 </div>
    

      <div className=" d-flex row border w-100 border-info "  >

       <div className=" text-center font-weight-bold"> 
       <section className="d-flex flex-row btn-group m-1 justify-content-end navbar-nav">
       <div className ="">
            <Link to="/logic">
            <button type="button"  className="border  btn m-1  border-info" style={{backgroundColor: "#b7e778"}}>Logic </button>
            </Link>

            <button type="button"  className="border  btn  border-info" style={{backgroundColor: "#b7e778"}} >Graph</button>
       
            <Link to="/description">
            <button type="button" className="border m-1 btn border-info" style={{backgroundColor: "#b7e778"}}>Descrition</button>
            </Link>
            <Link to="/parameter">
            <button type="button"  className="border  m-1 btn border-info" style={{backgroundColor: "#b7e778"}}>Parameter</button>
            </Link>
            <Link to="/signals">
            <button type="button"  className="border  m-1 btn border-info" style={{backgroundColor: "#b7e778"}}>Signals</button>
            </Link>
            <Link to="/alarmprompt">
            <button type="button"  className="border m-1 btn border-info" style={{backgroundColor: "#b7e778"}}>Alarm&Prompt</button>
            </Link>
            
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
          <li className ="nav-item w-75 ">
            <button type="button"  className="border btn m-3 border-info" style={{backgroundColor: "#b7e778"}} /* onClick={() => {setInput([...recip, <recip defaultValue={recip.length + 1} />]);}} */ >Schritt </button>
          </li>
          <li className ="nav-item w-75 ">
            <button type="button"  className="border  btn m-3 border-info" style={{backgroundColor: "#b7e778"}} >Transition</button>
          </li>
          <li className ="nav-item w-75">
            <button type="button" className="border btn m-3 border-info" style={{backgroundColor: "#b7e778"}}>Action</button>
          </li>
          <li className ="nav-item w-75">
            <button type="button"  className="border btn m-3 border-info" style={{backgroundColor: "#b7e778"}}>UP</button>
          </li>
          <li className ="nav-item w-75">
            <button type="button"  className="border btn m-3 border-info" style={{backgroundColor: "#b7e778"}}>Down</button>
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
          <text className=" border-bottom d-flex  justify-content-center p-2 border-info "> Phase-name-Number  Run:O </text>
          <section className="d-flex p-2 justify-content-between"> 
            <a> <img alt="detail" className="image"  /> </a>
            <text> Rev-01.00</text>
             </section>
        </div>

  <div >
        <div className="border w-100 border-info" >        
        <text className=" border-bottom d-flex  justify-content-center p-2 border-info "> Run:detail </text>
  {/*       <div>
        <button className="btn btn-sm btn-danger" >
                Insert Row
              </button>
        </div>
      */}
        <table  className="table  m-1  border border-dark" > 
    <thead >
  <tr>
      <th className="p-0">Transition:</th>
      <th className="p-0" ></th>
      <th className="p-0" >Step-no:</th>
      <th className="p-0" ></th>
      <th className="p-0" >Restart date:</th>            
    </tr>
    <tr>
      <th className="p-0">Delay-t</th>
      <th className="p-0" >Cond.</th>
      <th className="p-0" >Name</th>
      <th className="p-0" >Description</th>
      <th className="p-0" >Value</th>              
    </tr>
  </thead>
  <tbody>
    {[...Array(20)].map(() =>
      <tr className="rows" >
<td ><input type="text" defaultValue="" className='w-75 no-border'></input></td>
   <td ><input type="text" defaultValue="" className='w-75 no-border'></input></td>
   <td ><input type="text" defaultValue="" className='w-75 no-border'></input></td>
   <td ><input type="text" defaultValue="" className='w-75 no-border'></input></td>
   <td ><input type="text" defaultValue="" className='w-75 no-border' ></input></td>
   </tr>
  )}
  </tbody> 
</table>
<table  className="table m-1 border border-dark" > 
    <thead >
  <tr>
      <th className="p-0">Action:</th>
      <th className="p-0" ></th>
      <th className="p-0" >Step-no:</th>
      <th className="p-0" ></th>
      <th className="p-0" ></th>            
    </tr>
    <tr>
      <th className="p-0">Delay-t</th>
      <th className="p-0" >Cond.</th>
      <th className="p-0" >Name</th>
      <th className="p-0" >Description</th>
      <th className="p-0" >Value</th>              
    </tr>
  </thead>
  <tbody>
    {[...Array(15)].map(() =>
      <tr className="rows" >
<td ><input type="text" defaultValue="" className='w-75 no-border'></input></td>
   <td ><input type="text" defaultValue="" className='w-75 no-border'></input></td>
   <td ><input type="text" defaultValue="" className='w-75 no-border'></input></td>
   <td ><input type="text" defaultValue="" className='w-75 no-border'></input></td>
   <td ><input type="text" defaultValue="" className='w-75 no-border' ></input></td>
   </tr>
  )}
  </tbody> 
</table>
        </div>
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


export default Phase;