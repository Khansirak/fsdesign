import React, { useState,useRef, useEffect } from "react";
import Project from './project';
import { Link } from 'react-router-dom';
import './phase.css';
import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';
import './library.css';
import Draggable from 'react-draggable';

import { mockData } from './mocklibrary';

import Image from "./AND_1.png";

import { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  ReactFlowProvider,
} from 'reactflow';

import 'reactflow/dist/style.css';



const boxStyle = {border: "grey solid 2px", borderRadius: "10px", width:"100px", height:"100px"};


const Logic = () => {

//for the libary
  const [name, setName] = React.useState("AND_1.png");
  const [visible1, setVisible1] = useState(true);
  const [visibles, setVisibles] = useState(false);
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const removeElement1 = () => {
    setVisible1(() => true);
    setVisibles(() => false);
    setActive(true);
    setActive1(false);
  };
  const removeElements = () => {
    setVisible1(() => false);
    setVisibles(() => true);
    setActive1(true);
    setActive(false);
  };


////////

const initialNodes = [
  { id: '1', sourcePosition: 'right', targetPosition: 'left', position: { x: 0, y: 0 }, data: { label: <img src={Image} style={{width:"100px", height:"100px"}}/>} },
  { id: '2', sourcePosition: 'right', targetPosition: 'left', position: { x: 0, y: 100 }, data: { label: <img src={Image} style={{width:"100px", height:"100px"}}/>} },
  { id: '3', sourcePosition: 'right', targetPosition: 'left', position: { x: 100, y: 0 }, data: { label: <img src={Image} style={{width:"100px", height:"100px"}}/>} },
  {
    id: 'horizontal-1',
    sourcePosition: 'right',
    type: 'input',
    data: { label: 'Input' },
    position: { x: 0, y: 80 },
  },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2',type: 'step', }];

const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

/////

//for logic
  const [visible, setVisible] = useState(true);

//persist the output field NOT WORKING 
  const [num, setOutput] = useState(1);

  
  const [input, setInput] = useState(0);



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

  //logic/libary change display
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(true);
  const showElement = () => {
    setShow((prev) => !prev);
    setShow1((prev) => !prev);
  };
    return(
       <>
       
    <div className=" d-flex menu-body w-100 "  >
    <div className=" menu-body2 d-flex flex-row w-100">
    <div className="fixed-top text-center mt-2" style={{paddingLeft:"50em"}} > 
      <button type="button"  className="border text-dark m-2 px-5 p-2  btn border-info" style={{backgroundColor: "#b7e778"}} > <h4>Logic</h4> </button>
      </div> 
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

        <div className="d-flex border h-100 border-info" > 
        jii       
        <div className=" row" >
        <nav className ="navbar ">
          <ul className ="nav m-2 d-flex  justify-content-around navbar-nav">
          
          <li className ="nav-item w-75 ">
            <button type="button"  className="border btn m-3 border-info" style={{backgroundColor: "#b7e778"}} onClick={showElement} >Library </button>
          </li>
         
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

{show1 &&
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
            <div style={{display: 'flex', justifyContent: 'space-evenly', width: '100%', height:"100hv"}}>
            <div className="border " style={{ height: '70vh', width:"700px" }}>
              <ReactFlow
                  nodes={nodes}
                  edges={edges}
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                  onConnect={onConnect}
                  fitView
                  attributionPosition="bottom-left"
                 >
              <MiniMap />
              <Controls />
              <Background  />
              </ReactFlow>
    </div>
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
      }

{show &&
        <div className="d-flex border w-100 border-info" >        
          <div className="d-flex h-100">
          <div className=" d-flex border w-100 border-info" >        
         
          <section className="d-flex p-2 justify-content-between"> 
            <div>
            <ul className ="nav d-flex  justify-content-around navbar-nav">
          <li className ="nav-item  ">
            <button type="button"  className="border btn m-3 border-info" style={{ backgroundColor: active ? "#C0C0C0" : "#b7e778"}} onClick={removeElement1}  >Logic-block </button>
          </li>
          <li className ="nav-item ">
            <button type="button"  className="border  btn m-3 border-info" style={{backgroundColor: active1 ? "#C0C0C0" : "#b7e778"}} onClick={removeElements} >Controller</button>
          </li>
          </ul>
            </div>

            {visible1 && 
            <div className=" forscroll border w-100   border-dark " >
              
            { mockData.map((data) => (
              
              <button className="logic-btn" onClick={() => setName(data.src)}><img className="logic-button" alt={data.src} src={require(`../images/${data.src}`)} /></button>
            ))}
          </div>
        }
        
        {visibles && 
            <div className="d-flex forscroll border w-100  align-content-center flex-wrap border-dark " >
              
            { mockData.map((data) => (
              
              <button className="logic-btn" onClick={() => setName(data.src)}><img className="logic-button" alt={data.src} src={require(`../images/AND_1.png`)} /></button>
            ))}
            
          </div>
        }
            <div>   
            <ul className ="nav m-2 d-flex w-100 justify-content-around navbar-nav">
          <li className ="nav-item  ">
            <button type="button"  className="border btn m-3 border-info" style={{backgroundColor: "#b7e778"}} >Add to Logic </button>
          </li>
          <li className ="nav-item ">
            <button type="button"  className="border w-75 btn m-3 border-info" style={{backgroundColor: "#b7e778"}} >Add input</button>
          </li>
          </ul></div>

          <div className="border w-25  border-info">
          <img className="logic-button-show  p-4"  src={require(`../images/${name}`)} />
       </div>
             </section>
        </div>
  <div >
        </div>
          </div>
       
        </div>

}


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