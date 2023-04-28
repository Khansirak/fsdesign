import React, { useState,useRef, useEffect } from "react";
import Project from './project';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './phase.css';
import './library.css';
import 'reactflow/dist/style.css';
import './logic.css';
import { mockData } from './mocklibrary';
import App  from './flow';
import Image from "./AND_1.png";

import { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  StepEdge,
} from 'reactflow';

//NEED TO STAY OUTSIDE

const initialNodes = [
  { id: '1', sourcePosition: 'right', targetPosition: 'left',  position: { x: 0, y: 0 }, data: { label: <img src={Image} style={{width:"100px", height:"100px"}}/>} },
  { id: '4', sourcePosition: 'right', targetPosition: 'left',  position: { x: -600, y: -200 }, data: { label: <input type="text" defaultValue="input" className="w-100"   />} },
  { id: '5', sourcePosition: 'right', targetPosition: 'left', position: { x: 600, y: -200 }, data: {  label: <input type="text" defaultValue="output" className="w-100"   />} },

];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2',type: 'step', }];
/////

const Logic = () => {

//for the libary
  const [name, setName] = React.useState("AND_1.png");
  const [visible1, setVisible1] = useState(true);
  const [visibles, setVisibles] = useState(false);
  const [visibles2, setVisibles2] = useState(true);
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
  const removeElement = () => {
    setVisible((prev) => !prev);
  };
  const removeElement2 = () => {
    setVisibles2((prev) => !prev);
  };

//////// FOR THE DIAGRAM LOGIC


const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

const Addnode = useCallback(() => {
  const node =  {
    id: uuidv4(),
    sourcePosition: 'right', targetPosition: 'left',
    data: { label: <input type="text" defaultValue="input" className="w-100"   />},
    position: { x: -600, y: -300 },
  }
  //To BE DELETED
  setNodes([...nodes, node]);
  
  console.log(node)
}, [nodes]);

const AddnodeOutput = useCallback(() => {
  const node =  {
    id: uuidv4(),
    sourcePosition: 'right', targetPosition: 'left',
    data: { label: <input type="text" defaultValue="output" className="w-100"   />},
    position: { x: 600, y: -100 },
  }
  setNodes([...nodes, node]);
  
}, [nodes]);


const getImg = useCallback((e) => {
  const btnId=e.target.id;
  console.log(btnId);
  const node =  {
   id: uuidv4(), 
   sourcePosition: 'right',
    targetPosition: 'left',
    position: { x: 100, y: -200 },
     data: { label: <img src={require(`../images/${btnId}`)} style={{width:"100px", height:"100px"}}/>},
  }
  setNodes([...nodes, node]);
  
  console.log(node);
  
}, [nodes]);

/////

///for LIST-TOOLBOX
  const [visible, setVisible] = useState(true);

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
      <div className=" d-flex row border  w-100 border-info "  >

      <div className =" d-flex p-2  justify-content-between ">
        <button type="button"  className="border m-1 btn border-info" style={{backgroundColor: "#C0C0C0"}}  onClick={removeElement2}>Management</button>
  
            <button type="button"  className="border m-1 btn border-info" style={{backgroundColor: "#C0C0C0"}} onClick={removeElement}>List-toolbox</button>
          </div>
<div className="d-flex p-0 border border-info">
{visibles2&& 

 <div className=" m-0" style={{width:"15%"}}>
 <Project />
 </div>
}  
       <div className="d-flex w-100 h-100" >

        <div className="row text-center border border-info"  style={{width:"10%"}} > 
        <nav className ="navbar " >
          <ul className ="nav d-flex  text-center justify-content-around navbar-nav">
          
          <li className ="nav-item w-75 ">
            <button type="button"  className="border btn btn-rounded m-4 border-info" style={{backgroundColor: "#b7e778"}} onClick={showElement} >Library </button>
          </li>
         
          <li className ="nav-item w-75">
            <button type="button" className="border btn btn-rounded m-4 border-info" style={{backgroundColor: "#b7e778"}} onClick={Addnode } >New Input Parameter</button>
          </li>
          <li className ="nav-item w-75">
            <button type="button"  className="border btn btn-rounded m-4  border-info" style={{backgroundColor: "#b7e778"}} onClick={AddnodeOutput } >New Output Parameter</button>
          </li>
          <li className ="nav-item w-75">
            <button type="button"  className="border btn btn-rounded m-4  border-info" style={{backgroundColor: "#b7e778"}}>New Graph</button>
          </li>
          <Link to="/phase">
          <li className ="nav-item pt-5 mt-5 w-75">
            <button type="button"  className="border btn btn-rounded m-4  border-info" style={{backgroundColor: "#b7e778"}}>Back</button>
          </li>
          </Link>
          </ul>
          </nav>
   
        </div>
        {show &&
        <div className="d-flex border w-100 border-info" >        
          <div className="d-flex h-100">
          <div className=" d-flex border w-100 border-info" >        
         
          <section className="d-flex p-2 justify-content-between"> 
            <div>
            <ul className ="nav d-flex text-center justify-content-around navbar-nav">
          <li className ="nav-item  ">
            <button type="button"  className="border btn btn-rounded m-4 border-info" style={{ backgroundColor: active ? "#C0C0C0" : "#b7e778"}} onClick={removeElement1}  >Logic-block </button>
          </li>
          <li className ="nav-item ">
            <button type="button"  className="border  btn  btn-rounded m-4  border-info" style={{backgroundColor: active1 ? "#C0C0C0" : "#b7e778"}} onClick={removeElements} >Controller</button>
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
              
              <button className="logic-btn" onClick={() => setName(data.src)}><img className="logic-button" alt={data.src} src={require(`../images/${name}`)} /></button>
            ))}
            
          </div>
        }
            <div>   
            <ul className ="nav m-2 d-flex w-100 text-center justify-content-around navbar-nav">
          <li className ="nav-item ">
            <button type="button"  className="border w-75 btn m-3 border-info" style={{backgroundColor: "#b7e778"}} >Add input</button>
          </li>
          </ul></div>

          <div className="border w-25  border-info" >
          <img className="logic-button-show  p-4"  src={require(`../images/${name}`)} />

          <button type="button"  className="border btn m-3 border-info" style={{backgroundColor: "#b7e778"}} id={name} onClick={getImg }  >Add to Logic</button>

       </div>
             </section>
        </div>
  <div >
        </div>
          </div>
       
        </div>

}
{show1 &&
        <div className="border w-100 border-info" >        
          <div className="d-flex h-100">
          <div className="border w-100 " >        
         
          <section className="d-flex h-100 justify-content-between"> 
            <div className="border w-100">
            <div  style={{display: 'flex', justifyContent: 'space-evenly', width: '100%', height:"100hv"}}>
            <div className=" w-100 " style={{ height: '90vh', width:"90em" }}>
              <ReactFlow
                  nodes={nodes}
                  edges={edges}
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                  onConnect={onConnect}
                  fitView
                  attributionPosition="bottom-left"
                  edgeTypes={{ default: StepEdge }}
                  
                 >
              <MiniMap />
              <Controls />
              <div className="d-flex h-100 justify-content-between ">
                 <div className=" border text-center  border-info"  style={{width: '15%'}}> <h4 className="border border-info">Inputs</h4></div>
                 <div className=" border text-center  border-info" style={{width: '15%'}}> <h4 className="border border-info">Outputs</h4></div>
              </div>
                
              </ReactFlow>
    </div>
        </div>
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
    
   </div>
   
        </> 
    );

    };


export default Logic;