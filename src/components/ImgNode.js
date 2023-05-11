import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import Image from "./AND_1.png";

function ImgNode({ data, isConnectable }) {

    const customPositions = {
        myPosition: {
          top: '-50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        // Add more custom positions here
      };
      
  return (
    <div>
      <Handle type="target" position="left" id="a" style={{ top: "0px" }} isConnectable={isConnectable} />
      <Handle type="target" position="left" id="b" style={{ bottom: "1px"}} isConnectable={isConnectable} />
      {/* {sourceHandles.map((handle, index) => (
            <Handle key={`handle-${index}`} type="target" position={handle.position} style={{ background: '#555' }} />
          ))} */}
      <img src={data.image} alt="Node Image"  style={{width:"100px", height:"100px"}} />
      <Handle type="source" position="right" style={{ background: "#555" }} isConnectable={isConnectable} />
    </div>
  );
}

export default ImgNode;
