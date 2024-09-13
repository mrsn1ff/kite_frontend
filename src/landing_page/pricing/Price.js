import React from 'react';

function Price() {
    return ( 
        <div className='container border-top border-bottom '>
            <div className='row mt-5 g-3 mb-5'>
                <div className='col-4 text-center'>
                    <img src="media/images/pricing0.svg" alt="Pricing_0" style={{width:"70%"}}/>
                    <h2 className='mt-4 mb-4 text-left'>Free equity delivery</h2>
                    <h6 className='text-muted ' style={{lineHeight:"1.8"}}>All equity delivery investments (NSE, BSE), <br/> are absolutely free — ₹ 0 brokerage. </h6>
                </div>
                <div className='col-4 text-center'>
                    <img src="media/images/intradayTrades.svg" alt="Pricing_20" style={{width:"70%"}}/>
                    <h2 className='mt-4 mb-4' >Intraday and F&O trades</h2>
                    <h6 className='text-muted ' style={{lineHeight:"1.8"}}>Flat ₹ 20 or 0.03% (whichever is lower) <br/> &nbsp; per executed order on intraday trades<br/> across equity, currency, and commodity &nbsp; trades. Flat ₹20 on all option trades.  </h6>
                </div>
                <div className='col-4 text-center'>
                    <img src="media/images/pricing0.svg" alt="Pricing_0" style={{width:"70%"}}/>
                    <h2 className='mt-4 mb-4 '>Free direct MF</h2>
                    <h6 className='text-muted ' style={{lineHeight:"1.8"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.  </h6>
                </div>
            </div>
        </div>
     );
}

export default Price;