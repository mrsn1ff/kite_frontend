import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container mt-5'>
            <div className='row '>
                <h4>To create a ticket, select a relevant topic</h4>
                <div className='col-4  p-5'>
                    <h5><i class="fa fa-plus-circle" aria-hidden="true"></i>&nbsp; Account Opening</h5>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2" }}>Getting started</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Online</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Offline</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Charges</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Company, Partnership and HUF</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Non Resident Indian (NRI)</a>
                </div>
                <div className='col-4  p-5'>
                    <h5><i class="fa fa-user-o" aria-hidden="true"></i>
                    &nbsp;  Your Zerodha Account </h5>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2" }}>Login credentials</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Your Profile</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Account modification and segment </a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>CMR & DP ID</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Nomination</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Transfer and conversion of shares</a>
                </div>
                <div className='col-4  p-5'>
                    <h5><i class="fa fa-bar-chart" aria-hidden="true"></i>
                    &nbsp; Trading and Markets </h5>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2" }}>Trading FAQs</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Kite</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Margins</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Product and order types</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Corporate actions</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Kite features</a>
                </div>
            </div>

            <div className='row'>
                <div className='col-4  p-5'>
                    <h5><i class="fa fa-credit-card" aria-hidden="true"></i>
                    &nbsp;  Funds </h5>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2" }}>Fund withdrawal</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Adding funds</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Adding bank accounts</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>eMandates</a><br/>
                </div>
                <div className='col-4  p-5'>
                    <h5><i class="fa fa-search" aria-hidden="true"></i>
                    &nbsp; Console </h5>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2" }}>IPO</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Portfolio</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Funds statement</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Profile</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Reports</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Referral program</a>
                </div>
                <div className='col-4  p-5'>
                    <h5><i class="fa fa-circle-o-notch" aria-hidden="true"></i>
                    &nbsp;  Coin  </h5>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2" }}>Understanding mutual funds</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Coin app</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Coin web</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>Transactions and reports</a><br/>
                    <a href="" style={{textDecoration:"none" , marginLeft:"30px" , lineHeight:"2"}}>National Pension Scheme (NPS)</a><br/>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;