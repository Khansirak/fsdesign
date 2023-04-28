import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './phase.css';
import './library.css';
import 'reactflow/dist/style.css';
import './logic.css';
import { mockData } from './mocklibrary';
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
    { id: '1', sourcePosition: 'right', targetPosition: 'left',  position: { x: -200, y: -350 }, data: { label: <img src={Image} style={{width:"100px", height:"100px"}}/>} },
    { id: '4', sourcePosition: 'right', targetPosition: 'left',  position: { x: -500, y: -300 }, data: { label: <input type="text" defaultValue="input" className="w-100"   />} },
    { id: '5', sourcePosition: 'right', targetPosition: 'left', position: { x: 500, y: -300 }, data: {  label: <input type="text" defaultValue="output" className="w-100"   />} },
  
  ];
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2',type: 'step', }];
  /////

  const Flow = () => {


    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  
const Addnode = useCallback(() => {
    const node =  {
      id: uuidv4(),
      sourcePosition: 'right', targetPosition: 'left',
      data: { label: <input type="text" defaultValue="input" className="w-100"   />},
      position: { x: -400, y: -300 },
    }
  
    setNodes([...nodes, node]);
    
    console.log(node)
  }, [nodes]);
  
  const AddnodeOutput = useCallback(() => {
    const node =  {
      id: uuidv4(),
      sourcePosition: 'right', targetPosition: 'left',
      data: { label: <input type="text" defaultValue="output" className="w-100"   />},
      position: { x: 400, y: -200 },
    }
    setNodes([...nodes, node]);
    
  }, [nodes]);
  
  const AddnodeBlock = useCallback(() => {
   
    const node =  {
     id: uuidv4(), 
     sourcePosition: 'right',
      targetPosition: 'left',
      position: { x: 100, y: -200 },
       data: { label: <img src={require(`../images/${name}`)} style={{width:"100px", height:"100px"}}/>},
    }
    setNodes([...nodes, node]);
    
    console.log(node);
    console.log(name);
  }, [nodes]);
  const KP = useCallback(() => {
   
   
    console.log(name);
  }, []);
return(
    <>
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
    </>
);  

  }
  export default Flow;