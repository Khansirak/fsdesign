import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';


function TextUpdaterNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    
    <div className=" text-center ">
 
        <input id="text" name="text" onChange={onChange} className="p-1 w-100" />
      
      <Handle type="source" position={Position.Right} isConnectable={isConnectable} />
    </div>
  );
}

export default TextUpdaterNode;
