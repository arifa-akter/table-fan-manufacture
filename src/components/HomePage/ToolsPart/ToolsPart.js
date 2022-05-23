import React, { useEffect, useState } from 'react';
import Tools from './Tools';


const ToolsPart = () => {
    const [fanTools ,setFanTools] = useState([])
    console.log(fanTools)
    useEffect(()=>{
        fetch('http://localhost:5000/tools')
        .then(res=>res.json())
        .then(data=>setFanTools(data))
    },[])
    return (
      <section className='mt-28 mb-28'>
      <div className="container mx-auto">
          <h1 className='text-center font-bold lg:text-5xl text-2xl text-[#020225ee] lg:mt-28 lg:mb-28'>Fan Spare Tools</h1>
         <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
             {
                 fanTools.map(fanTool=><Tools
                 key={fanTool._id}
                 fanTool={fanTool}
                 ></Tools>)
             }
         </div>
      </div>
      </section>
    );
};

export default ToolsPart;