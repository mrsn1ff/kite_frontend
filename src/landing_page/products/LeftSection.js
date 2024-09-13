import React from 'react';

function LeftSection({
    imageURL,
    productName ,
    productDescription , 
    tryDemo , 
    learnMore , 
    googlePlay, 
    appStore}) {
    return ( 
        <div className='container mt-5 '>
            <div className='row align-items-center'>
                <div className='col-6 p-5 justify-content-start'>
                    <img src={imageURL}  alt={productName} className="img-fluid"/>
                </div>
                <div className='col-6 p-5 my-3'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='my-3'>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try demo< i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a href={learnMore} style={{marginLeft:"50px" , textDecoration:"none"}}>Learn more<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className='d-flex mt-3'>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' alt="Google Play" className="img-fluid mr-3"/></a>
                        <a href={appStore} style={{marginLeft:"50px"}}><img src='media/images/appstoreBadge.svg' alt="App Store" className="img-fluid"/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;