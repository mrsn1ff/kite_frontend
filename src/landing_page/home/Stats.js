import React from 'react';

function Stats() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='fs-2 mb-5 '>Trust with confidence</h1>

                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>
                        That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                    </p>
                    <br />

                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
                    </p>
                    <br />

                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs. 
                    </p>
                    <br />

                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money. 
                    </p>
                    <br /> 
                </div>
                
                <div className='col-8 text-center'>
                    <img src="media/images/ecosystem.png" alt="Ecosystem_image" style={{width:"85%"}} className='ml-5'/>
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a href='' style={{textDecoration:"none"}}>Try Kite demo  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div><br />

                <img src="media/images/pressLogos.png" alt="Press Logos"style={{width:"70%",margin:"0 auto"}} className='mt-5 mb-5'/>
            </div>
        </div>
     );
}

export default Stats;