import React, { useState,useRef } from "react";
import Project from './project';
import { Link } from 'react-router-dom';
import './phase.css';
import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';
import Draggable from 'react-draggable';

const boxStyle = {border: "grey solid 2px", borderRadius: "10px", width:"100px", height:"100px"};


const Logic = () => {

  const [visible, setVisible] = useState(true);
  const [num, setOutput] = useState(1);
  const [input, setInput] = useState(0);
const DraggableBox = ({id}) => {
    const updateXarrow = useXarrow();
    return (
        <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
            <div id={id} style={boxStyle}>
            <img  className="logic-button" alt="example" src={require(`./AND_1.png`)} />
            </div>
        </Draggable>
    );
};


const DraggableInput = ({id}) => {
  const updateXarrow = useXarrow();
  return (
      <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
          <div id="input1" className="mt-2" style={{border: "grey solid 2px", borderRadius: "10px", width:"1005", height:"auto"}}>
          <input type="text" className="w-100"   />
          </div>
      </Draggable>
  );
};

const DraggableOutput = () => {
  const updateXarrow = useXarrow();
  return (
      <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
          <div id="output1" className="mt-2" style={{border: "grey solid 2px", borderRadius: "10px", width:"100%", height:"auto"}}>
          <input type="text" className="w-100"   />
          </div>
      </Draggable>
  );
};

const addOutput = (e) => {

setOutput(num+1);
}
const addInput = (e) => {
 
 setInput(input+1);
 }

  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  
    return(
       <>
       
    <div className=" d-flex menu-body w-100 "  >
    <div className=" menu-body2 d-flex flex-row w-100">
 <div className=" m-0" style={{width:"15%"}}>
  <div className="align-self-sm-center">Management</div>
 <Project />
 </div>
      <div className=" d-flex row border w-100 border-info "  >
       <section className="d-flex flex-row btn-group m-1 justify-content-end navbar-nav">
       <div className =" ">
            <button type="button"  className="border  btn m-1  border-info" style={{backgroundColor: "#b7e778"}}>Logic </button>
            
            <button type="button"  className="border m-1 btn border-info" style={{backgroundColor: "#C0C0C0"}} onClick={removeElement}>List-toolbox</button>
          </div>
          </section>
       <div className="d-flex h-100" >
        <div className="border h-100 border-info" > 
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
            <button type="button" className="border btn m-3 border-info" style={{backgroundColor: "#b7e778"}} onClick={addInput}>New Input Parameter</button>
          </li>
          <li className ="nav-item w-75">
            <button type="button"  className="border btn m-3 border-info" style={{backgroundColor: "#b7e778"}} onClick={addOutput}>New Output Parameter</button>
          </li>
          <li className ="nav-item w-75">
            <button type="button"  className="border btn m-3 border-info" style={{backgroundColor: "#b7e778"}}>New Graph</button>
          </li>
          <Link to="/phase">
          <li className ="nav-item pt-5 mt-5 w-75">
            <button type="button"  className="border btn m-3 border-info" style={{backgroundColor: "#b7e778"}}>Back</button>
          </li>
          </Link>
          </ul>
          </nav>
      </div>
        </div>

        <div className="border w-100 border-info" >        
          <div className="d-flex h-100">
          <div className="border w-100 border-info" >        
         
          <section className="d-flex p-4 h-100 justify-content-between"> 
            <div className="border w-25 ">
            <h6 className="border-bottom p-2 text-center"> Input </h6>
                <DraggableInput id={'input1'}/>
                {[...Array(input)].map((x, i) =>
                  <DraggableInput key={i} />
                  )}

            </div>
            <div className="border p-3 w-100">
            <div style={{display: 'flex', justifyContent: 'space-evenly', width: '100%'}}>
            <Xwrapper>
                <DraggableBox id={'elem1'}/>
                <DraggableBox id={'elem2'}/>
               
                <Xarrow start="elem1" end="elem2" lineColor="black" headColor="black" strokeWidth={1} showHead={false} />
            </Xwrapper>
        </div>
            </div>

            <div className="border  w-25"> 
            <h6 className="border-bottom p-2 text-center"> Output </h6>
             
                {[...Array(num)].map((x, i) =>
    <DraggableOutput key={i} />
  )}
            </div>
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