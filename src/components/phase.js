import React, { useState } from "react";
import Project from './project';
import { Link } from 'react-router-dom';
import './phase.css';
import Detail from "../images/detail.png"
import 'reactflow/dist/style.css';
import { useCallback } from 'react';
import ImgNodeChain from './ImgNodeChain.js';
const nodeTypes = {
  ImgNodeUpd: ImgNodeChain,
};
import ReactFlow, {
  
  MiniMap,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  StepEdge,
  StraightEdge,
  useReactFlow,
  Panel,
} from 'reactflow';
//NEED TO STAY OUTSIDE
const getNodeId = () => `randomnode_${+new Date()}`;
const initialNodes = [];
const initialEdges = [];


const Phase = () => {
  //fortoolbox
  const [visible, setVisible] = useState(false);

  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(false);
  //for project
  const [visibles2, setVisibles2] = useState(false);
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

  ////FOR STEP CHAIN
  const [nodes, setNodes,onNodesChange] = useNodesState(initialNodes);
const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
const [rfInstance, setRfInstance] = useState(null);
const { setViewport } = useReactFlow();
const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

/////FOR THE STEP CHAIN DIAGRAM PERSITENCE MEMORY
const onSave = useCallback(() => {
  if (rfInstance) {
    const flow = rfInstance.toObject();
    localStorage.setItem("chain", JSON.stringify(flow));
  }
}, [rfInstance]);

const onRestore = useCallback(() => {
  const restoreFlow = async () => {
    const flow = JSON.parse(localStorage.getItem("chain"));
    console.log(flow)
    if (flow) {
      const { x = 0, y = 0, zoom = 1 } = flow.viewport;
      setNodes(flow.nodes || []);
      setEdges(flow.edges || []);
      setViewport({ x, y, zoom });
    }
  };
  restoreFlow();
}, [setNodes, setViewport]);

const getImg = useCallback((e) => {
  
  const btnId=e.target.id;
  console.log(btnId);
  const node =  {
   id: getNodeId(), 
   sourcePosition: 'top',
    targetPosition: 'bottom',
    position: { x: 100, y: -200 },
    type: 'ImgNodeUpd',
     data: {  image:require(`../images/${btnId}`) },
  }
  
  setNodes([...nodes, node]);
}, [nodes]);

    return(
       <>
      <div className="fixed-top text-center mt-2" style={{paddingLeft:"50em"}} > 
      <button type="button"  className="border rounded-circle m-2 p-4  btn border-info" style={{backgroundColor: "#b7e778"}} >Run</button>
      <button type="button"  className="border rounded-circle m-2 p-4  btn border-info" style={{backgroundColor: "#b7e778"}}>Hold</button>
      <button type="button"  className="border rounded-circle m-2 p-4 btn border-info" style={{backgroundColor: "#b7e778"}} >Abort</button>
      <button type="button"  className="border rounded-circle m-2 p-4 btn border-info" style={{backgroundColor: "#b7e778"}} >Stop</button>
      </div> 
    <div className=" d-flex menu-body w-100   "  >
    <div className=" menu-body2 d-flex flex-row  h-75 w-100">
     
       <div className="border d-flex row w-100  border-info" >
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

<div className=" m-0" style={{width:"18%"}}>
<Project />
</div>
} 
        <div className="border border-info " style={{width:"18%"}} > 
        jii       
        <div className=" d-flex mt-5 row justify-content-between p-4 h-75" >

            <div><button className="logic-btn border-0 p-0 m-0 w-100"  onClick={getImg }  ><img className="logic-button" id="Action.png" src={require(`../images/Action.png`)} style={{backgroundColor: "white"}} /></button></div>

          <div><button className="logic-btn border-0 p-0 w-100"  onClick={getImg }  ><img className="logic-button" id="Ende.png" src={require(`../images/Ende.png`)} style={{backgroundColor: "white"}} /></button></div>
          <div><button className="logic-btn border-0 p-0 w-100"  onClick={getImg } ><img className="logic-button" id="Start.png" alt="Start" src={require(`../images/Start.png`)} style={{backgroundColor: "white"}} /></button></div>
         
         <div><button className="logic-btn border-0 p-0 w-100"  onClick={getImg }  > <img className="logic-button" id="Transition.png" alt="Transition" src={require(`../images/Transition.png`)}  style={{backgroundColor: "white"}}/></button></div>
         <div><button className="logic-btn border-0 p-0 w-100"  onClick={getImg }  ><img className="logic-button" id="Parallel.png" alt="Parallel" src={require(`../images/Parallel.png`)}  style={{backgroundColor: "white"}}/></button> </div>
      </div>
      <Link to="/">
           <div className="mt-auto text-center "> <button type="button"  className="border btn btn-rounded p-4  border-info" style={{backgroundColor: "#b7e778"}}>Back</button></div>
          </Link>
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

             <div className="d-flex w-100 "> 
             <section className="d-flex h-100 w-100 justify-content-between"> 
            <div className="border w-100">
            <div  style={{display: 'flex', justifyContent: 'space-evenly', width: '100%', height:"100hv"}}>
            <div className=" w-100 " style={{ height: '90vh', width:"90em" }}>
              <ReactFlow
                  nodes={nodes}
                  edges={edges}
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                  onConnect={onConnect}
                  onInit={setRfInstance}
                  nodeTypes={nodeTypes}
                  fitView
                  attributionPosition="bottom-left"
                  edgeTypes={{ default: StraightEdge }}

                 >
              <MiniMap />
              <Controls />

              <Panel position="bottom-right">
                <button onClick={onSave}>save</button>
                <button onClick={onRestore}>restore</button>
              </Panel>
                
              </ReactFlow>
    </div>
        </div>
            </div>
             </section>
             </div>


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