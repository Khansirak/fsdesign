import React, { useState } from 'react';
import Addcolumn1 from './addcolumn1'


const Addrow1 = (props) => {


  
  return (
   <>
    <tr >
    {[...Array(props.param)].map((x, i) =>
    <Addcolumn1 key={i} />
  )}
       
    </tr>
   </>
  );
};
export default Addrow1;
