import React, { useState } from "react";
import Project from './project';
import { Link } from 'react-router-dom';
import './phase.css';
import Detail from "../images/detail.png"


const Phase = () => {
  const [visible, setVisible] = useState(true);
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(false);
  const [visibles2, setVisibles2] = useState(true);
  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  const get_detail = () => {
    setVisible1((prev) => !prev);
    setVisible2((prev) => !prev);
  }
  const removeElement2 = () => {
    setVisibles2((prev) => !prev);
  };
  const myRecipe = JSON.parse(localStorage.getItem('recipe'));

  
    return(
       <>
      <div className="fixed-top text-center mt-2" style={{paddingLeft:"50em"}} > 
      <button type="button"  className="border rounded-circle m-2 p-4  btn border-info" style={{backgroundColor: "#b7e778"}} >Run</button>
      <button type="button"  className="border rounded-circle m-2 p-4  btn border-info" style={{backgroundColor: "#b7e778"}}>Hold</button>
      <button type="button"  className="border rounded-circle m-2 p-4 btn border-info" style={{backgroundColor: "#b7e778"}} >Abort</button>
      <button type="button"  className="border rounded-circle m-2 p-4 btn border-info" style={{backgroundColor: "#b7e778"}} >Stop</button>
      </div> 
    <div className=" d-flex menu-body w-100 "  >
    <div className=" menu-body2 d-flex flex-row w-100">
     
       <div className="border d-flex row w-100 border-info" >
       <div className="d-flex  justify-content-between">
        <div>
            <button type="button"  className="border text-center m-1 btn border-info" style={{backgroundColor: "#C0C0C0"}} onClick={removeElement2}>Management</button>
            </div>
            <div>
            <Link to="/logic">
            <button type="button"  className="border  btn m-1  border-info" style={{backgroundColor: "#b7e778"}}>Logic </button>
            </Link>
            <Link to="/graph">
            <button type="button"  className="border  btn  border-info" style={{backgroundColor: "#b7e778"}} >Graph</button>
            </Link>
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
          </div>
      <div className=" border d-flex p-0 m-0 border-info">
      {visibles2&& 

<div className=" m-0" style={{width:"20%"}}>
<Project />
</div>
} 
        <div className="border  border-info" > 
        jii       
        <div className=" row" >
        
          <ul className ="nav m-2 d-flex wrap justify-content-around navbar-nav">

            {/* <button style={{backgroundColor: "#b7e778"}} ><img className="w-25 h-auto" alt="Action" src={require(`../images/Action.png`)} /></button> */}
         
        
           <img className="w-25 h-auto" alt="Action" src={require(`../images/Ende.png`)} />
       
          <img className="w-25 h-auto" alt="Start" src={require(`../images/Start.png`)} />
         
          <img className="w-25 h-auto" alt="Transition" src={require(`../images/Transition.png`)} />
         <img className="w-25 h-auto" alt="Start" src={require(`../images/Parallel.png`)} /> 
          <Link to="/">
          <li className ="nav-item pt-5 mt-5 w-75">
            <button type="button"  className="border btn btn-rounded m-4  border-info" style={{backgroundColor: "#b7e778"}}>Back</button>
          </li>
          </Link>
          </ul>

  
      </div>
        </div>

        <div className="border w-100 border-info" >        
          <div className="d-flex h-100">

          <div className="border w-100 border-info" >        
          <text className=" border-bottom d-flex  justify-content-center p-2 border-info "> {myRecipe}  Run:O </text>
          <section className="d-flex p-2 mb-5 justify-content-between"> 

            <button className="p-0 no-border" style={{width:"3em", height:"3em"}}> <img alt="detail" className="image" src={Detail} style={{width:"100%", height:"100%"}} onClick={get_detail}/> </button>
            <text> Rev-01.00</text>
             </section>
             <div className="d-flex column justify-content-around"> 
             <div className="d-flex w-50"> STEP CHAIN</div>
             {visible2 &&
             <div className="border  d-flex row justify-content-between border-info m-2 w-50 h-25">
              <h5 className="border border-info text-center" style={{backgroundColor: "#b7e778"}}> All steps </h5>
              <table  className="table border border-dark " > 
              <thead >
                <tr>
                <th className="p-0">Scrittname</th>
                <th className="p-0">Scrittnummer</th>
                <th className="p-0">Restartadress</th>
                </tr>

              </thead>
                <tbody>
                <tr className="rows" >
                    <td ><input type="text" defaultValue="Grundstellung" className='w-100 no-border'></input></td>
                     <td ><input type="text" defaultValue="10" className=' no-border'></input></td>
                     <td ><input type="text" defaultValue="20" className=' no-border'></input></td>            
                </tr>
                <tr className="rows" >
                    <td ><input type="text" defaultValue="pH-Phufen" className='w-100 no-border'></input></td>
                     <td ><input type="text" defaultValue="10" className=' no-border'></input></td>
                     <td ><input type="text" defaultValue="20" className=' no-border'></input></td>            
                </tr>
                <tr className="rows" >
                    <td ><input type="text" defaultValue="pH-Einstellen" className='w-100 no-border'></input></td>
                     <td ><input type="text" defaultValue="10" className=' no-border'></input></td>
                     <td ><input type="text" defaultValue="20" className=' no-border'></input></td>            
                </tr>
                <tr className="rows" >
                    <td ><input type="text" defaultValue="Prozess-Freigabe" className='w-100 no-border'></input></td>
                     <td ><input type="text" defaultValue="10" className=' no-border'></input></td>
                     <td ><input type="text" defaultValue="20" className=' no-border'></input></td>            
                </tr>
               </tbody> 
              </table>
            <div className="d-flex justify-content-end">
            <button type="button"  className="border  btn m-1  border-info" style={{backgroundColor: "#b7e778"}}>Cancel </button>
            <button type="button"  className="border  btn m-1  border-info" style={{backgroundColor: "#b7e778"}}>Confirm </button>
            </div>
             </div>
              }
             </div>
             
        </div>
        {visible1 && 
        <div className="border  border-info" >        
        <text className=" border-bottom d-flex  justify-content-center p-2 border-info "> Run:detail </text>
<div className="p-4">
        <table  className="table table-bordered p-5 border border-dark" > 
    <thead >
  <tr>
      <th className="p-0">Action:</th>
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
<td ><input type="text" defaultValue="" className='w-100 no-border'></input></td>
   <td ><input type="text" defaultValue="" className='w-100 no-border'></input></td>
   <td ><input type="text" defaultValue="" className='w-100 no-border'></input></td>
   <td ><input type="text" defaultValue="" className='w-100 no-border'></input></td>
   <td ><input type="text" defaultValue="" className='w-100 no-border' ></input></td>
   </tr>
  )}
  </tbody> 
</table>
<table  className="table table-bordered m-1 border border-dark" > 
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
       }


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