import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5 mt-5'>
            <div className='row mt-5 mb-5'>
                <div className='col-12 text-center'>
                <img src='media/images/homeHero.png' alt='Hero_image' className='mb-4 img-fluid' style={{width:"70%"}}/>    
                </div>
            </div>    
            <div className='row text-center'>
                <h1 className='mt-4 mb-4 fs-1'>Invest in everything</h1>
                <p className='mb-4 fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more. </p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"15%" , margin:"0 auto" , padding:"2px"}}>Sign up now</button>
            </div>
        </div>
     );
}

export default Hero;