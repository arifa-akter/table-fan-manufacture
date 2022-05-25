import React from 'react';

const Blogs = () => {
    return (
      <section className='blogs mt-28 mb-28 '>
          <div className="container mx-auto">
            <div className="lg:w-[700px] grid grid-cols-1 mx-auto p-3">
               <div className="question">
               <span className="pr-1">1.</span><span className='text-primary  font-bold pt-5'>How will you improve the performance of a React application ?</span>
                  <p className="pb-6">React is a JavaScript library for building user interfaces. React ships with several ways to minimize the number of costly DOM operations required to update the UI. For many applications, using React will lead to a fast user interface without doing much work to specifically optimize for performance such that When working with React, there are cases where you will need to render multiple elements or return a group of related items.Another way of optimizing a React app is by making sure I bundle my app for production before deploying.</p>
             
                 
                  <hr className='mb-5'/>   
                  <span className="pr-1">2.</span><span className='text-primary font-bold'>What are the different ways to manage a state in a React application ?</span>
                  <p className="pb-6">There are four main types of state you need to properly manage in my React apps such as Local stat Global state Server state URL state  Local state is data we manage in one or another component.
                  Local state is most often managed in React using the useState hook. Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in my app, or in multiple components at least Global state is data we manage across multiple components.
                  Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least Data that exists on my URLs, including the pathname and query parameters.</p>
                     <hr className='mb-5'/>   
                  <span className="pr-1">3.</span><span className='text-primary font-bold'>How does prototypical inheritance work?</span>
                  <p className="pb-6">Prototype-based programming is a style of object-oriented programming in which behaviour reuse known as inheritance is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming..</p>
                     <hr className='mb-5'/>    
                     <span className="pr-1">4.</span><span className='text-primary font-bold'>why you do not set the state directly in react for example  if you have const[product, setProduct]=useState([]) why you do not set product instead why you use set priduct?</span>
                  <p className="pb-6"> i do not use product when i setProduct in the useState then i get value form product setProduct set  the value in use state it is a function it store data in state </p>
                
                     <hr className='mb-5'/> 
                  <span className="pr-1">5.</span> 
                  <span className='text-primary font-bold'>what is unit test? why should write unit tests</span>
                  <p className="pb-6">
                  Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and    sometimes QA staff.</p>
          
               </div>
            </div>
          </div>
      </section>
    );
};

export default Blogs;