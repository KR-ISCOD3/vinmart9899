import React, { useEffect, useState } from 'react';

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10); // update every 10ms
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 10);
    
    return () => clearInterval(interval);
  }, [end, duration]);

  return <h1 className='m-0' style={{fontSize: "clamp(45px,4vw,70px)"}}>{count}+</h1>;
};


function  Hero() {
  return (
    <div className='container-fluid p-0 font-text' >
        <div className='container pt-lg-5' >
            <div className="row mt-lg-3">
                <div className='col-lg-6 pt-lg-5' style={{height:500}}>
                    <h6 className='m-0 ms-2 text-secondary'>NavinIn-Vinmart9899</h6>
                    <div style={{lineHeight:"105px"}}>
                        <p style={{fontSize:"clamp(65px,5vw,210px)"}} className='text-coffee-900 fw-bolder m-0'>
                            Coffee
                            <span className='text-dark'>Corner</span>
                        </p>
                        <p style={{fontSize:"clamp(65px,5vw,210px)"}} className=' fw-meduim font-khmer m-0'>
                            សាខា
                            <span className='text-coffee-900'>ដីហុយ</span>
                        </p>
                    </div>
                    <p className='mt-2 fs-5 pe-5'>
                        Lorem ipsum, dolor sit amet consectetur 
                        adipisicing elit Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Veniam, suscipit!
                    </p>
                    <button className='btn btn-dark rounded-0 fs-5 px-4 py-2 me-3'>
                        Order Now
                    </button>
                    <button className='btn btn-outline-dark rounded-0 fs-5 px-4 py-2'>
                        View Menu
                    </button>
                </div>
                <div className='col-lg-6 d-none d-lg-block position-relative' >
                    <div style={{width:200,height:200,top:0,left:30}} className='bg-black position-absolute z-1'>
                        <img src="./image/coffeecorner.png" alt="" className='w-100 h-100 object-fit-cover border border-5 border-light'/>
                    </div>
                    <div style={{width:"70%",height:"630px",top:60,right:40}} className='bg-black position-absolute border border-5 border-light'>
                        <img src="./image/vimart.png" alt="" className='w-100 h-100 object-fit-cover'/>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 py-5 bg-dark border-top border-5 border-light">
           <div className="container py-4"> 
                <div className='text-light d-flex justify-content-between justify-content-lg-start'>
                    <div className=''>
                        <Counter end={50} />
                        <p className='text-secondary fs-5'>Coffee & Drinks</p>
                    </div>

                    <div className='mx-lg-5 px-lg-5'>
                        <Counter end={30} />
                        <p className='text-secondary fs-5'>Event Space</p>
                    </div>
                    <div className=''>
                        <Counter end={16} />
                        <p className='text-secondary fs-5'>Friendly Staff</p>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Hero
