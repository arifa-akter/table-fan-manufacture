import React from 'react';

const Blogs = () => {
    return (
      <section className='blogs mt-28 mb-28 '>
          <div className="container mx-auto">
            <div className="lg:w-[700px] grid grid-cols-1 mx-auto p-3">
               <div className="question">
                 <span className="pr-1">1.</span><span className='text-primary  font-bold pt-5'>How will you improve the performance of a React application ?</span>
                  <p className="pb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ab aperiam repellendus delectus. Fugit necessitatibus fuga laborum, quod, eligendi dolore odio dignissimos magnam ducimus
                     perferendis, omnis sint et laudantium obcaecati.</p>
                  <hr className='mb-5'/>   
                  <span className="pr-1">2.</span><span className='text-primary font-bold'>What are the different ways to manage a state in a React application ?</span>
                  <p className="pb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ab aperiam repellendus delectus. Fugit necessitatibus fuga laborum, quod, eligendi dolore odio dignissimos magnam ducimus
                     perferendis, omnis sint et laudantium obcaecati.</p>
                     <hr className='mb-5'/>   
                  <span className="pr-1">3.</span><span className='text-primary font-bold'>How does prototypical inheritance work?</span>
                  <p className="pb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ab aperiam repellendus delectus. Fugit necessitatibus fuga laborum, quod, eligendi dolore odio dignissimos magnam ducimus
                     perferendis, omnis sint et laudantium obcaecati.</p>
                     <hr className='mb-5'/>  
                  <span className="pr-1">4.</span><span className='text-primary font-bold'>why you do not set the state directly in react for example  if you have const[product, setProduct]=useState([]) why you do not set product instead why you use set priduct?</span>
                  <p className="pb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ab aperiam repellendus delectus. Fugit necessitatibus fuga laborum, quod, eligendi dolore odio dignissimos magnam ducimus
                     perferendis, omnis sint et laudantium obcaecati.</p>
                     <hr className='mb-5'/> 
                  <span className="pr-1">5.</span> 
                  <span className='text-primary font-bold'>what is unit test? why should write unit tests</span>
                  <p className="pb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ab aperiam repellendus delectus. Fugit necessitatibus fuga laborum, quod, eligendi dolore odio dignissimos magnam ducimus
                     perferendis, omnis sint et laudantium obcaecati.</p>
          
               </div>
            </div>
          </div>
      </section>
    );
};

export default Blogs;