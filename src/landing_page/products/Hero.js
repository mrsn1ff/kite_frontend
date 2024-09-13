import React from 'react';

function Hero() {
    return ( 
        <div className='container text-center' style={{marginTop:"160px"}}>
            <div className='row border-bottom '>
                <h1 style={{fontSize:"3rem"}}>Technology</h1>
                <h5 className='mt-3'>Sleek, modern, and intuitive trading platforms </h5>
                <h6 className='mt-4 mb-5'  style={{marginBottom:"160px"}}>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a></h6>
            </div>
        </div>
     );
}

export default Hero;