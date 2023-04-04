import React, { useState } from "react";
import Project from './project';
import { Link } from 'react-router-dom';
import './library.css';

import { mockData } from './mocklibrary';

const Library = () => {

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
       <section className="d-flex flex-row btn-group m-1 justify-content-center navbar-nav">
       <div className =" ">
         
            <h4  className="font-weight-bold">Logic-library </h4>
        
  
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
            <button type="button"  className="border btn m-3 border-info" style={{backgroundColor: "#b7e778"}} >Library </button>
          </li>
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
        <div className="d-flex border w-100 border-info" >        
          <div className="d-flex h-100">
          <div className=" d-flex border w-100 border-info" >        
         
          <section className="d-flex p-2 justify-content-between"> 
            <div>
            <ul className ="nav m-2 d-flex  justify-content-around navbar-nav">
          <li className ="nav-item  ">
            <button type="button"  className="border btn m-3 border-info" style={{backgroundColor: "#b7e778"}} >Logic-block </button>
          </li>
          <li className ="nav-item ">
            <button type="button"  className="border  btn m-3 border-info" style={{backgroundColor: "#b7e778"}} >Controller</button>
          </li>
          </ul>
            </div>
            <div class="d-flex align-content-center flex-wrap">
            { mockData.map((data) => (
              
              <button className="logic-btn"><img className="logic-button" alt={data.src} src={require(`../images/${data.src}`)} /></button>
            ))}

          </div>
            <div>   
            <ul className ="nav m-2 d-flex  justify-content-around navbar-nav">
          <li className ="nav-item  ">
            <button type="button"  className="border btn m-3 border-info" style={{backgroundColor: "#b7e778"}} >Add to Logic </button>
          </li>
          <li className ="nav-item ">
            <button type="button"  className="border w-75 btn m-3 border-info" style={{backgroundColor: "#b7e778"}} >Add input</button>
          </li>
          </ul></div>
             </section>
        </div>
  <div >
        </div>
          </div>
       
        </div>
       </div>
      </div>
    </div>
   </div>
        </> 
    );

    };


export default Library;