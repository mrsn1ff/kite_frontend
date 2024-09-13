import React from 'react';

function Hero() {
    return ( 
        <div style={{backgroundColor:"rgb(56, 126, 209)"}}>
        <div className='container text-white' >
            <div className='row ' style={{marginTop:"70px" , marginBottom:"20px"}}>
                <div className='col-6 mt-5 mb-5'>
                    <h5>Support Portal</h5>
                    <p style={{fontSize:"23px", marginTop:"50px"}} >Search for an answer or browse help topics to create a ticket</p>
                    <input type="text" placeholder='Eg: how do i activate F&O, why is my order getting rejected ...' style={{width:"550px" , height:"50px" ,padding:"20px" , border:"none", borderRadius:"5px"}}/>
                    <div className='mt-3 d-flex flex-wrap justify-content-evenly'>
                        <p className="flex-grow-1 text-center" style={{textEmphasisColor:"white",textDecoration:"underline"}}>Track account opening</p>
                        <p className="flex-grow-1 text-center" style={{textEmphasisColor:"white",textDecoration:"underline"}}>Track segment activation</p>
                        <p className="flex-grow-1 text-center" style={{textEmphasisColor:"white",textDecoration:"underline"}}>Intraday margins</p>
                        <p className="flex-grow-1" style={{textEmphasisColor:"white" , marginLeft:"15px" ,textDecoration:"underline"}}>Kite user manual</p>
                        </div>
                </div>
                <div className='col-6 mt-5 mb-5 '>
                    <h6 className='d-flex justify-content-end mb-5'>Track tickets</h6>
                    <p style={{fontSize:"23px", marginTop:"90px" , marginLeft:"70px"}}>Featured</p>
                    <p style={{fontSize:"18px", marginTop:"10px" , marginLeft:"90px", textDecoration:"underline"}}>1. Current Buybacks - August 2024</p>
                    <p style={{fontSize:"18px", marginTop:"10px" , marginLeft:"90px" , textDecoration:"underline"}}>2. Latest Intraday leverages and Square-off timings</p>
                </div>
            </div>
        </div>
        </div>
     );
}

export default Hero;