import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-5'>
                    <h3 className='mb-3 fs-2'>Unbeatable pricing</h3>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges. </p>
                    <a href='' style={{textDecoration:"none"}}>See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                </div>
                <div className='col-7'>
                    <div className='row mb-5'>
                        <div className='col-4'>
                            <img src="media/images/pricing0.svg" alt="Pricing_0" style={{width:"60%"}}/>
                            <p>Free Account opening</p>
                        </div>
                        <div className='col-4'>
                            <img src="media/images/pricing0.svg" alt="Pricing_0"style={{width:"60%"}}  /> 
                            <p>Free equity delivery
                            and direct mutual funds</p>
                        </div>
                        <div className='col-4'>
                            <img src="media/images/intradayTrades.svg" alt="Pricing_0"style={{width:"60%"}} />
                            <p>Intraday and
                            F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;