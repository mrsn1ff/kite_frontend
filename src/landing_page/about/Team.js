import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <h1 className='text-center'>People</h1>
            </div>

            <div className='row p-5' style={{fontSize:"1.1em" , lineHeight:"1.8"}}>
                <div className='col-6 p-4 text-center'>
                    <img src="media/images/nithinKamath.jpg" alt="Nithin_Founder" style={{borderRadius:"50%" , width:"60%"}}/>
                    <h5 className='text-center mt-5'>Nithin Kamath</h5>
                    <h6 className='text-muted fs-6 text-center mt-3'>Founder CEO</h6>
                </div>
                <div className='col-6 fs-6 mt-5' >
                    <p>
                    Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.   
                    </p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC). </p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href='' style={{textDecoration:"none"}}>HomePage</a> / <a href='' style={{textDecoration:"none"}}> TradingQnA</a> / <a href='' style={{textDecoration:"none"}}> Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;