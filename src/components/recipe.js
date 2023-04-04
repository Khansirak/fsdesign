import React from "react";


import { Link } from 'react-router-dom';

const Recipe = () => {

    return(
       <>
        <li>
        <details open>
          <summary className="pb-2"><input id="message2" type="text" className="border border-success" defaultValue="Recipe"  /> 
          <Link to="/phase">Recipe-name</Link>
           
           
           </summary>
          <ul className='d-flex flex-column pb-1'>
          <li > 
          <summary className="pb-3"><input  id="message" type="text"  className="border border-success" defaultValue=" Operation"  /> name-number </summary>
          <ul >
            <li > <input type="text" id="message3" className="border border-success" defaultValue="Phase"  /> Name-numer
            
            <ul className='d-flex flex-column pb-5'>
            <li className='pb-3 mt-2'>
              <input type="text" id="message3" className="border  border-success" defaultValue="Parameter"  /> Name-number </li>
              <li className='pb-3'>
              <input type="text" id="message3" className="border border-success" defaultValue="Alarm"  /> Name-number </li>
              <li >
              <input type="text" id="message3" className="border border-success" defaultValue="Logic"  /> Name-number </li>
            </ul>
              </li>
            </ul>    
          </li>
          </ul>
        </details>
        </li>
        </> 
    );

    };


export default Recipe;